import { NextResponse } from "next/server";
import {
  validateFile,
  validateQuoteForm,
  type QuoteFormValues,
} from "@/lib/quote-schema";

export const runtime = "nodejs";

// Minimum time (ms) a genuine visitor needs to fill the form. Submissions
// faster than this are almost always automated.
const MIN_SUBMIT_TIME_MS = 1500;

function readString(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export async function POST(request: Request) {
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { ok: false, error: "We could not read your submission. Please try again." },
      { status: 400 },
    );
  }

  // Honeypot: a real visitor never fills this hidden field.
  const honeypot = readString(formData, "website");
  // Timing gate: paired with a hidden "renderedAt" timestamp set on the client.
  const renderedAt = Number(readString(formData, "renderedAt"));
  const submittedTooFast =
    Number.isFinite(renderedAt) && Date.now() - renderedAt < MIN_SUBMIT_TIME_MS;

  if (honeypot || submittedTooFast) {
    // Respond as if successful so bots gain no signal, without processing.
    return NextResponse.json({ ok: true });
  }

  const values: QuoteFormValues = {
    fullName: readString(formData, "fullName"),
    companyName: readString(formData, "companyName"),
    businessEmail: readString(formData, "businessEmail"),
    phone: readString(formData, "phone"),
    requirement: readString(formData, "requirement"),
    quantity: readString(formData, "quantity"),
    destinationCountry: readString(formData, "destinationCountry"),
    additionalInfo: readString(formData, "additionalInfo"),
    consent: readString(formData, "consent") === "true",
  };

  const errors = validateQuoteForm(values);

  const file = formData.get("file");
  const fileError =
    file instanceof File && file.size > 0 ? validateFile(file) : undefined;

  if (Object.keys(errors).length > 0 || fileError) {
    return NextResponse.json(
      { ok: false, error: "Please check the highlighted fields and try again.", fieldErrors: errors, fileError },
      { status: 422 },
    );
  }

  try {
    // TODO(production): connect to a real delivery mechanism, e.g. an email
    // provider (Resend/SendGrid/SES) or a CRM webhook. Keep this the only
    // place that needs to change — the form and validation are already
    // production-ready. Never log or expose provider secrets to the client.
    //
    // await sendQuoteEnquiry({ values, file });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Something went wrong while sending your enquiry. Please try again or email us directly.",
      },
      { status: 500 },
    );
  }
}
