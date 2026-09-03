import { contact, siteConfig } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { mailHref, telHref, isEmailConfigured, isPhoneConfigured } from "@/lib/contact";

function ContactDetailRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-white/15 py-5 first:border-t-0">
      <p className="text-xs font-semibold uppercase tracking-label text-white/50">{label}</p>
      <p className="mt-1.5 text-base text-white">{children}</p>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-white py-20 md:py-28">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>{contact.eyebrow}</Eyebrow>
              <h2
                id="contact-heading"
                className="mt-5 text-balance font-display text-[clamp(1.75rem,1.35rem+2vw,2.75rem)] font-medium leading-[1.1] tracking-tightest text-navy-900"
              >
                {contact.headline}
              </h2>
              <div className="mt-6 max-w-md space-y-4 text-base leading-relaxed text-muted">
                {contact.copy.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-10 rounded bg-navy-900 p-8">
                <p className="text-xs font-semibold uppercase tracking-label text-accent-strong">
                  Contact Sky Star Directly
                </p>

                <ContactDetailRow label="Email">
                  {isEmailConfigured ? (
                    <TrackedLink
                      event="email_click"
                      href={mailHref()}
                      className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
                    >
                      {siteConfig.email}
                    </TrackedLink>
                  ) : (
                    <span className="text-white/60">[TBC — Business Email]</span>
                  )}
                </ContactDetailRow>

                <ContactDetailRow label="Phone / WhatsApp">
                  {isPhoneConfigured ? (
                    <TrackedLink
                      event="phone_click"
                      href={telHref()}
                      className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
                    >
                      {siteConfig.phone}
                    </TrackedLink>
                  ) : (
                    <span className="text-white/60">[TBC — Contact Number]</span>
                  )}
                </ContactDetailRow>

                <ContactDetailRow label="Hong Kong Office">
                  {siteConfig.hongKongAddress ?? (
                    <span className="text-white/60">[TBC — Registered Address]</span>
                  )}
                </ContactDetailRow>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={80}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
