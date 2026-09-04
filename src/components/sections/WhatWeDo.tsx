import { whatWeDo } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteButton } from "@/components/cta/QuoteButton";

export function WhatWeDo() {
  return (
    <section id="what-we-do" aria-labelledby="what-we-do-heading" className="section-y bg-white">
      <div className="container-wide">
        {/* Asymmetric intro: statement left, argument right. */}
        <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow tone="accent">{whatWeDo.eyebrow}</Eyebrow>
              <h2
                id="what-we-do-heading"
                className="mt-6 max-w-[14ch] font-display text-display-2 font-semibold text-navy-900"
              >
                {whatWeDo.headline}
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:pt-3">
            <Reveal delay={120}>
              <div className="max-w-measure space-y-4 text-base leading-relaxed text-muted">
                {whatWeDo.copy.map((p, index) => (
                  <p key={p} className={index === 2 ? "font-medium text-navy-900" : undefined}>
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Service list. Rows, not cards. */}
        <ol className="mt-16 border-t border-navy-900/15 md:mt-22">
          {whatWeDo.services.map((service, index) => (
            <Reveal as="li" key={service.number} delay={index * 80}>
              <div className="row-editorial row-rule-accent group grid grid-cols-1 gap-x-8 gap-y-3 border-b border-navy-900/15 py-8 transition-colors duration-250 md:grid-cols-[5.5rem_minmax(0,15rem)_minmax(0,1fr)] md:items-baseline md:gap-y-0 md:py-10 lg:grid-cols-[7rem_minmax(0,18rem)_minmax(0,1fr)]">
                <span
                  aria-hidden="true"
                  className="tnum font-display text-numeral-sm font-semibold text-navy-900/20 transition-colors duration-250 group-hover:text-accent"
                >
                  {service.number}
                </span>
                <h3 className="font-display text-display-3 font-semibold text-navy-900">
                  {service.heading}
                </h3>
                <p className="max-w-[46ch] text-base leading-relaxed text-muted lg:justify-self-end">{service.copy}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={160}>
          <div className="mt-12 md:mt-14">
            <QuoteButton location="what_we_do">{whatWeDo.cta}</QuoteButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
