import { footer as footerContent, nav, siteConfig } from "@/content/site";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { mailHref, telHref, isEmailConfigured, isPhoneConfigured } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Extra bottom padding on small screens keeps the sticky mobile CTA
          from covering the final line of footer content. */}
      <div className="container-wide pb-32 pt-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-display text-lg font-semibold tracking-tightest">SKY STAR</p>
            <p className="mt-3 text-sm font-medium uppercase tracking-wideish text-white/65">
              {siteConfig.tagline}
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              {footerContent.description}
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-6">
            <p className="text-xs font-semibold uppercase tracking-label text-white/60">
              Navigation
            </p>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/75 transition-colors duration-150 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-label text-white/60">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>
                {isEmailConfigured ? (
                  <TrackedLink event="email_click" href={mailHref()} className="hover:text-white">
                    {siteConfig.email}
                  </TrackedLink>
                ) : (
                  "[TBC — Business Email]"
                )}
              </li>
              <li>
                {isPhoneConfigured ? (
                  <TrackedLink event="phone_click" href={telHref()} className="hover:text-white">
                    {siteConfig.phone}
                  </TrackedLink>
                ) : (
                  "[TBC — Phone / WhatsApp]"
                )}
              </li>
              <li>{siteConfig.hongKongAddress ?? "[TBC — Hong Kong Address]"}</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-label text-white/60">Legal</p>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              {footerContent.legalLinks.map((label) => (
                <li key={label} title="Page pending — content not yet published">
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Sky Star {siteConfig.legalCompanyName ?? "[TBC — Legal Company Name]"} ·{" "}
            {footerContent.registeredStatement} · Registration Number:{" "}
            {siteConfig.registrationNumber ?? "[TBC]"}
          </p>
          <p>{footerContent.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
