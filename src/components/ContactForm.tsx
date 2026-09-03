"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { contact } from "@/content/site";
import { Field, describedBy, inputClasses } from "@/components/ui/form/Field";
import { Checkbox } from "@/components/ui/form/Checkbox";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";
import { track } from "@/lib/analytics";
import { mailHref, isEmailConfigured } from "@/lib/contact";
import {
  ACCEPTED_FILE_EXTENSIONS,
  validateFile,
  validateQuoteForm,
  type QuoteFormErrors,
  type QuoteFormValues,
} from "@/lib/quote-schema";

const initialValues: QuoteFormValues = {
  fullName: "",
  companyName: "",
  businessEmail: "",
  phone: "",
  requirement: "",
  quantity: "",
  destinationCountry: "",
  additionalInfo: "",
  consent: false,
};

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [values, setValues] = useState<QuoteFormValues>(initialValues);
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [fileError, setFileError] = useState<string | undefined>();
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const hasStarted = useRef(false);
  const renderedAt = useRef(Date.now());
  const successRef = useRef<HTMLDivElement>(null);

  // The success panel replaces a much taller form, so bring it into view and
  // move focus to it — otherwise the confirmation can land off-screen.
  useEffect(() => {
    if (status !== "success") return;
    successRef.current?.scrollIntoView({ block: "center" });
    successRef.current?.focus();
  }, [status]);

  function markStarted() {
    if (!hasStarted.current) {
      hasStarted.current = true;
      track("quote_form_start");
    }
  }

  function updateField<K extends keyof QuoteFormValues>(key: K, value: QuoteFormValues[K]) {
    markStarted();
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleFileChange(selected: File | null) {
    markStarted();
    setFile(selected);
    const error = validateFile(selected);
    setFileError(error);
    if (selected && !error) {
      track("file_upload", { fileType: selected.type || "unknown" });
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validateQuoteForm(values);
    const currentFileError = validateFile(file);

    setErrors(validationErrors);
    setFileError(currentFileError);

    if (Object.keys(validationErrors).length > 0 || currentFileError) {
      const firstInvalidId = Object.keys(validationErrors)[0];
      if (firstInvalidId) {
        document.getElementById(firstInvalidId)?.focus();
      }
      return;
    }

    setStatus("submitting");
    setServerError(null);

    try {
      const payload = new FormData();
      payload.set("fullName", values.fullName);
      payload.set("companyName", values.companyName);
      payload.set("businessEmail", values.businessEmail);
      payload.set("phone", values.phone);
      payload.set("requirement", values.requirement);
      payload.set("quantity", values.quantity);
      payload.set("destinationCountry", values.destinationCountry);
      payload.set("additionalInfo", values.additionalInfo);
      payload.set("consent", String(values.consent));
      payload.set("renderedAt", String(renderedAt.current));
      payload.set("website", ""); // honeypot — left blank by real visitors
      if (file) payload.set("file", file);

      const response = await fetch("/api/quote", {
        method: "POST",
        body: payload,
      });

      const data = (await response.json()) as { ok: boolean; error?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Submission failed.");
      }

      setStatus("success");
      track("quote_form_submit", { status: "success" });
    } catch (error) {
      setStatus("error");
      setServerError(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your enquiry.",
      );
      track("quote_form_submit", { status: "error" });
    }
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        role="status"
        tabIndex={-1}
        className="rule-light border bg-bone-100 p-8 md:p-10"
      >
        <p className="font-mono text-meta-sm uppercase text-brass-ink">Enquiry received</p>
        <h3 className="mt-4 text-display-md text-ink">
          Thank you. Your requirement has been sent.
        </h3>
        <div className="mt-5 max-w-prose space-y-3 text-body text-steel">
          <p>
            We will review the details you provided and get back to you with the next steps
            {contact.responseTime ? ` within ${contact.responseTime}` : ""}.
          </p>
          <p>If your enquiry is time-sensitive, you are welcome to reach us on WhatsApp in the meantime.</p>
        </div>
        <div className="mt-6">
          <WhatsAppButton location="quote_success" />
        </div>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-10">
      {status === "error" && (
        <div role="alert" className="border border-signal-error/40 bg-signal-error/5 p-5">
          <p className="font-mono text-meta-sm uppercase text-signal-error">Your enquiry was not submitted</p>
          <p className="mt-2 text-body-sm text-steel">
            {serverError} Your details have been kept — please try again, or email us directly
            {isEmailConfigured ? (
              <>
                {" "}
                at{" "}
                <a href={mailHref()} className="font-medium text-ink underline underline-offset-4">
                  {mailHref().replace("mailto:", "")}
                </a>
                .
              </>
            ) : (
              " using the contact details below."
            )}
          </p>
        </div>
      )}

      <fieldset>
        <legend className="rule-light w-full border-b pb-3 font-mono text-meta-sm uppercase text-brass-ink">
          Section A — Your details
        </legend>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <Field id="fullName" label="Full Name" required error={errors.fullName}>
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              value={values.fullName}
              onChange={(e) => updateField("fullName", e.target.value)}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={describedBy("fullName", undefined, errors.fullName)}
              className={inputClasses}
            />
          </Field>

          <Field id="companyName" label="Company Name" required error={errors.companyName}>
            <input
              id="companyName"
              name="companyName"
              type="text"
              autoComplete="organization"
              required
              value={values.companyName}
              onChange={(e) => updateField("companyName", e.target.value)}
              aria-invalid={Boolean(errors.companyName)}
              aria-describedby={describedBy("companyName", undefined, errors.companyName)}
              className={inputClasses}
            />
          </Field>

          <Field id="businessEmail" label="Business Email" required error={errors.businessEmail}>
            <input
              id="businessEmail"
              name="businessEmail"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              value={values.businessEmail}
              onChange={(e) => updateField("businessEmail", e.target.value)}
              aria-invalid={Boolean(errors.businessEmail)}
              aria-describedby={describedBy("businessEmail", undefined, errors.businessEmail)}
              className={inputClasses}
            />
          </Field>

          <Field id="phone" label="Phone / WhatsApp Number">
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              className={inputClasses}
            />
          </Field>
        </div>
      </fieldset>

      <fieldset>
        <legend className="rule-light w-full border-b pb-3 font-mono text-meta-sm uppercase text-brass-ink">
          Section B — Your requirement
        </legend>
        <div className="mt-6 grid gap-6">
          <Field
            id="requirement"
            label="What are you looking for?"
            required
            helperText="Tell us about the product or service you need."
            error={errors.requirement}
          >
            <textarea
              id="requirement"
              name="requirement"
              rows={4}
              required
              value={values.requirement}
              onChange={(e) => updateField("requirement", e.target.value)}
              aria-invalid={Boolean(errors.requirement)}
              aria-describedby={describedBy("requirement", "helper", errors.requirement)}
              className={inputClasses}
            />
          </Field>

          <div className="grid gap-6 sm:grid-cols-2">
            <Field id="quantity" label="Quantity Required" required error={errors.quantity}>
              <input
                id="quantity"
                name="quantity"
                type="text"
                inputMode="numeric"
                required
                value={values.quantity}
                onChange={(e) => updateField("quantity", e.target.value)}
                aria-invalid={Boolean(errors.quantity)}
                aria-describedby={describedBy("quantity", undefined, errors.quantity)}
                className={inputClasses}
              />
            </Field>

            <Field
              id="destinationCountry"
              label="Destination Country"
              required
              error={errors.destinationCountry}
            >
              <input
                id="destinationCountry"
                name="destinationCountry"
                type="text"
                autoComplete="country-name"
                required
                value={values.destinationCountry}
                onChange={(e) => updateField("destinationCountry", e.target.value)}
                aria-invalid={Boolean(errors.destinationCountry)}
                aria-describedby={describedBy("destinationCountry", undefined, errors.destinationCountry)}
                className={inputClasses}
              />
            </Field>
          </div>

          <Field
            id="additionalInfo"
            label="Additional Information"
            helperText="Add specifications, product links or any other useful details."
          >
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              rows={3}
              value={values.additionalInfo}
              onChange={(e) => updateField("additionalInfo", e.target.value)}
              aria-describedby={describedBy("additionalInfo", "helper")}
              className={inputClasses}
            />
          </Field>

          <Field
            id="file"
            label="Upload a File"
            helperText="Upload a product specification, image or reference document. PDF, Word or image files up to 10MB."
            error={fileError}
          >
            <input
              id="file"
              name="file"
              type="file"
              accept={ACCEPTED_FILE_EXTENSIONS}
              onChange={(e) => handleFileChange(e.target.files?.[0] ?? null)}
              aria-invalid={Boolean(fileError)}
              aria-describedby={describedBy("file", "helper", fileError)}
              className="block w-full rounded-sm border border-dashed border-ink/25 bg-bone-100 px-4 py-3.5 text-body-sm text-steel file:mr-4 file:rounded-sm file:border-0 file:bg-ink file:px-4 file:py-2.5 file:font-mono file:text-meta-sm file:uppercase file:text-bone hover:file:bg-ink-800"
            />
          </Field>
        </div>
      </fieldset>

      <Checkbox
        id="consent"
        name="consent"
        required
        checked={values.consent}
        onChange={(e) => updateField("consent", e.target.checked)}
        error={errors.consent}
        label={contact.privacyConsent}
      />

      <div className="rule-light flex flex-col gap-6 border-t pt-8 md:flex-row md:items-end md:justify-between">
        <Button type="submit" variant="solid" arrow={status !== "submitting"} disabled={status === "submitting"} className="md:min-w-[260px]">
          {status === "submitting" ? "Sending…" : contact.submitCta}
        </Button>

        <div>
          <p className="font-mono text-meta-sm uppercase text-steel">{contact.whatsappPrompt}</p>
          <WhatsAppButton location="quote_form" variant="outline" className="mt-3">
            {contact.whatsappCta}
          </WhatsAppButton>
        </div>
      </div>
    </form>
  );
}
