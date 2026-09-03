import { footer as footerContent, nav, siteConfig, whatWeDo } from "@/content/site";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { mailHref, telHref, isEmailConfigured, isPhoneConfigured } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="on-ink bg-ink text-bone">
      {/* Wordmark band */}
      <div className="shell rule-dark border-b py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-display text-[clamp(2rem,1.4rem+2.4vw,3.25rem)] font-semibold uppercase leading-none tracking-[0.16em] text-bone">
              Sky<span className="text-brass-light">&#8202;·&#8202;</span>Star
            </p>
            <p className="mt-5 max-w-[34ch] font-mono text-meta uppercase text-mist">
              {siteConfig.tagline}
            </p>
          </div>
          <p className="max-w-prose text-body-sm text-mist lg:col-span-5">
            {footerContent.description}
          </p>
        </div>
      </div>

      {/* Directory */}
      <div className="shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <nav aria-label="Footer" className="lg:col-span-3">
          <p className="font-mono text-meta-sm uppercase text-mist/70">Navigation</p>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-body-sm text-bone/80 transition-colors duration-250 hover:text-brass-light"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <p className="font-mono text-meta-sm uppercase text-mist/70">Services</p>
          <ul className="mt-5 space-y-3">
            {whatWeDo.services.map((service) => (
              <li key={service.heading} className="text-body-sm text-bone/80">
                {service.heading}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="font-mono text-meta-sm uppercase text-mist/70">Contact</p>
          <ul className="mt-5 space-y-3 text-body-sm text-bone/80">
            <li>
              {isEmailConfigured ? (
                <TrackedLink
                  event="email_click"
                  href={mailHref()}
                  className="transition-colors duration-250 hover:text-brass-light"
                >
                  {siteConfig.email}
                </TrackedLink>
              ) : (
                "[TBC — Business Email]"
              )}
            </li>
            <li>
              {isPhoneConfigured ? (
                <TrackedLink
                  event="phone_click"
                  href={telHref()}
                  className="transition-colors duration-250 hover:text-brass-light"
                >
                  {siteConfig.phone}
                </TrackedLink>
              ) : (
                "[TBC — Phone / WhatsApp]"
              )}
            </li>
            <li>{siteConfig.hongKongAddress ?? "[TBC — Hong Kong Address]"}</li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="font-mono text-meta-sm uppercase text-mist/70">Legal</p>
          {/* Rendered as text, not links: these pages are not published yet. */}
          <ul className="mt-5 space-y-3 text-body-sm text-mist">
            {footerContent.legalLinks.map((label) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Company record */}
      <div className="shell rule-dark border-t py-8">
        <dl className="grid gap-6 font-mono text-meta-sm uppercase text-mist/70 md:grid-cols-3">
          <div>
            <dt>Registered entity</dt>
            <dd className="mt-1.5 text-mist">
              Sky Star {siteConfig.legalCompanyName ?? "[TBC — Legal Company Name]"}
            </dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd className="mt-1.5 text-mist">{footerContent.registeredStatement}</dd>
          </div>
          <div>
            <dt>Registration no.</dt>
            <dd className="mt-1.5 text-mist">{siteConfig.registrationNumber ?? "[TBC]"}</dd>
          </div>
        </dl>
        <p className="mt-8 pb-24 font-mono text-meta-sm uppercase text-mist md:pb-0">
          {footerContent.copyright}
        </p>
      </div>
    </footer>
  );
}
