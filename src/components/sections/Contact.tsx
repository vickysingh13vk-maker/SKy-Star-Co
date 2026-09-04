import { contact, siteConfig } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { mailHref, telHref, isEmailConfigured, isPhoneConfigured } from "@/lib/contact";

function ContactDetailRow({
  label,
  index,
  children,
}: {
  label: string;
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-4 border-t border-white/15 py-5">
      <span aria-hidden="true" className="tnum meta pt-1 text-white/35">
        {index}
      </span>
      <div>
        <p className="meta text-white/50">{label}</p>
        <p className="mt-2 text-lead text-white">{children}</p>
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="on-dark section-y relative overflow-hidden bg-navy-950 text-white"
    >
      <div
        className="rule-grid-dark pointer-events-none absolute inset-0 opacity-50"
        aria-hidden="true"
      />

      <div className="container-wide relative">
        <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-12">
          {/* Information panel */}
          <div className="min-w-0 lg:col-span-5">
            <Reveal>
              <Eyebrow tone="light">{contact.eyebrow}</Eyebrow>
              <h2
                id="contact-heading"
                className="mt-6 max-w-[12ch] font-display text-display-2 font-semibold text-white"
              >
                {contact.headline}
              </h2>
              <div className="mt-7 max-w-measure space-y-4 text-base leading-relaxed text-white/70">
                {contact.copy.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-12">
                <p className="meta mb-2 text-accent-strong">Contact Sky Star directly</p>

                <ContactDetailRow label="Email" index="01">
                  {isEmailConfigured ? (
                    <TrackedLink
                      event="email_click"
                      href={mailHref()}
                      className="underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-accent-strong"
                    >
                      {siteConfig.email}
                    </TrackedLink>
                  ) : (
                    <span className="text-white/55">[TBC — Business Email]</span>
                  )}
                </ContactDetailRow>

                <ContactDetailRow label="Phone / WhatsApp" index="02">
                  {isPhoneConfigured ? (
                    <TrackedLink
                      event="phone_click"
                      href={telHref()}
                      className="underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-accent-strong"
                    >
                      {siteConfig.phone}
                    </TrackedLink>
                  ) : (
                    <span className="text-white/55">[TBC — Contact Number]</span>
                  )}
                </ContactDetailRow>

                <ContactDetailRow label="Hong Kong Office" index="03">
                  {siteConfig.hongKongAddress ?? (
                    <span className="text-white/55">[TBC — Registered Address]</span>
                  )}
                </ContactDetailRow>
              </div>
            </Reveal>
          </div>

          {/* Form, on its own light surface. */}
          <div className="min-w-0 lg:col-span-7">
            <Reveal delay={80}>
              <div className="-mx-5 bg-cream p-6 text-ink shadow-lift xs:-mx-6 xs:p-8 md:-mx-10 md:p-10 lg:mx-0 lg:p-12">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
