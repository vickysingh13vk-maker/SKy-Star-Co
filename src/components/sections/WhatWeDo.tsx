import { whatWeDo } from "@/content/site";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteButton } from "@/components/cta/QuoteButton";

export function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      aria-labelledby="what-we-do-heading"
      className="bg-bone-200 py-section"
    >
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Statement holds position while the service list scrolls past it */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <SectionHead
                  index="§ 01"
                  label={whatWeDo.eyebrow}
                  heading={whatWeDo.headline}
                  id="what-we-do-heading"
                />
              </Reveal>
              <Reveal delay={100}>
                <div className="mt-8 max-w-prose space-y-4 text-body text-steel">
                  {whatWeDo.copy.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                <div className="mt-9">
                  <QuoteButton location="what_we_do" />
                </div>
              </Reveal>
            </div>
          </div>

          {/* Service register */}
          <div className="lg:col-span-7">
            <ol className="rule-light border-t">
              {whatWeDo.services.map((service, index) => (
                <Reveal as="li" key={service.number} delay={index * 70}>
                  <article className="group rule-light relative border-b py-8 transition-colors duration-400 ease-editorial hover:bg-bone/70 md:py-10">
                    <div className="grid grid-cols-[auto,1fr,auto] items-baseline gap-x-5 md:gap-x-9">
                      <span className="font-mono text-meta-sm text-brass-ink">{service.number}</span>
                      <h3 className="text-display-md text-ink">{service.heading}</h3>
                      <span
                        aria-hidden="true"
                        className="translate-x-0 self-center text-steel transition-transform duration-400 ease-editorial group-hover:translate-x-1.5 group-hover:text-brass-ink"
                      >
                        <svg width="22" height="12" viewBox="0 0 22 12" fill="none">
                          <path
                            d="M0 6h19M15.5 1.5L20 6l-4.5 4.5"
                            stroke="currentColor"
                            strokeWidth="1.4"
                          />
                        </svg>
                      </span>
                    </div>
                    <p className="col-start-2 mt-4 max-w-[52ch] text-body text-steel md:ml-[calc(1.75rem+2.25rem)]">
                      {service.copy}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
