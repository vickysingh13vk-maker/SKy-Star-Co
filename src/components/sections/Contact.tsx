import { contact, siteConfig } from "@/content/site";
import { MetaLabel } from "@/components/ui/Meta";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { mailHref, telHref, isEmailConfigured, isPhoneConfigured } from "@/lib/contact";

function DetailRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rule-dark grid gap-1.5 border-b py-5 sm:grid-cols-[9rem,1fr] sm:gap-6">
      <p className="font-mono text-meta-sm uppercase text-mist/70">{label}</p>
      <div className="text-body text-bone">{children}</div>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="lg:grid lg:grid-cols-2">
      {/* Left: the invitation and the direct routes */}
      <div className="on-ink bg-ink text-bone">
        <div className="ml-auto w-full max-w-[760px] px-gutter py-section lg:pr-16">
          <Reveal>
            <div className="rule-dark border-t pt-4">
              <MetaLabel tone="light" tick={false}>
                <span className="text-brass-light whitespace-nowrap">§ 07</span>
                <span className="ml-5">{contact.eyebrow}</span>
              </MetaLabel>
            </div>
            <h2 id="contact-heading" className="mt-8 max-w-[12ch] text-display-lg text-bone">
              {contact.headline}
            </h2>
            <div className="mt-7 max-w-prose space-y-4 text-body text-mist">
              {contact.copy.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-12">
              <p className="font-mono text-meta-sm uppercase text-mist/70">Direct contact</p>
              <div className="mt-5 rule-dark border-t">
                <DetailRow label="Email">
                  {isEmailConfigured ? (
                    <TrackedLink
                      event="email_click"
                      href={mailHref()}
                      className="underline decoration-brass decoration-1 underline-offset-4 transition-colors hover:text-brass-light"
                    >
                      {siteConfig.email}
                    </TrackedLink>
                  ) : (
                    <span className="text-mist">[TBC — Business Email]</span>
                  )}
                </DetailRow>
                <DetailRow label="Phone / WhatsApp">
                  {isPhoneConfigured ? (
                    <TrackedLink
                      event="phone_click"
                      href={telHref()}
                      className="underline decoration-brass decoration-1 underline-offset-4 transition-colors hover:text-brass-light"
                    >
                      {siteConfig.phone}
                    </TrackedLink>
                  ) : (
                    <span className="text-mist">[TBC — Contact Number]</span>
                  )}
                </DetailRow>
                <DetailRow label="Hong Kong office">
                  {siteConfig.hongKongAddress ?? (
                    <span className="text-mist">[TBC — Registered Address]</span>
                  )}
                </DetailRow>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Right: the form itself */}
      <div className="bg-bone">
        <div className="mr-auto w-full max-w-[760px] px-gutter py-section lg:pl-16">
          <Reveal>
            <div className="rule-light border-t pt-4">
              <MetaLabel tick={false}>
                <span className="text-brass-ink">Form</span>
                <span className="ml-5">Enquiry record</span>
              </MetaLabel>
            </div>
            <h3 className="mt-7 text-display-md text-ink">Send us your requirement</h3>
            <p className="mt-3 max-w-prose text-body text-steel">
              Fields marked <span className="text-brass-ink">*</span> are required. The more detail
              you give, the faster we can come back with something useful.
            </p>
          </Reveal>

          <Reveal delay={80} className="mt-10">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
