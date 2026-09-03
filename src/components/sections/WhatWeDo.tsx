import { whatWeDo } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteButton } from "@/components/cta/QuoteButton";

export function WhatWeDo() {
  return (
    <section id="what-we-do" aria-labelledby="what-we-do-heading" className="bg-navy-900 py-20 md:py-28">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                id="what-we-do-heading"
                eyebrow={whatWeDo.eyebrow}
                heading={whatWeDo.headline}
                tone="light"
                headingTone="light"
              />
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-6 max-w-md space-y-4 text-base leading-relaxed text-white/75">
                {whatWeDo.copy.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul className="border-t border-white/15">
              {whatWeDo.services.map((service, index) => (
                <Reveal as="li" key={service.number} delay={index * 90}>
                  <div className="grid grid-cols-[3.5rem,1fr] gap-4 border-b border-white/15 py-7 sm:grid-cols-[4.5rem,1fr] sm:gap-8 sm:py-8">
                    <span className="font-display text-2xl font-medium text-accent-strong sm:text-3xl">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-medium text-white sm:text-xl">
                        {service.heading}
                      </h3>
                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">
                        {service.copy}
                      </p>
                      {service.number === "04" && (
                        <div className="mt-5">
                          <QuoteButton location="what_we_do_ddp" variant="ghost" />
                        </div>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
