import { howItWorks } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteButton } from "@/components/cta/QuoteButton";

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-it-works-heading" className="section-y bg-cream">
      <div className="container-wide">
        <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow tone="accent">{howItWorks.eyebrow}</Eyebrow>
              <h2
                id="how-it-works-heading"
                className="mt-6 max-w-[16ch] font-display text-display-2 font-semibold text-navy-900"
              >
                {howItWorks.headline}
              </h2>
            </Reveal>
          </div>

          {/* The whole route in one line, before the detail. */}
          <div className="lg:col-span-5 lg:col-start-8 lg:pt-4">
            <Reveal delay={120}>
              <p className="meta mb-4 text-navy-700">The route</p>
              <ol className="flex flex-wrap items-center gap-x-2.5 gap-y-2">
                {howItWorks.steps.map((step, index) => (
                  <li key={step.number} className="flex items-center gap-2.5">
                    {index > 0 && (
                      <span className="text-accent/70" aria-hidden="true">
                        &rarr;
                      </span>
                    )}
                    <span className="text-sm text-muted">{step.stage}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>

        {/* One timeline for every breakpoint — the rail narrows rather than
            the markup being duplicated for mobile. */}
        <ol className="mt-16 md:mt-22">
          {howItWorks.steps.map((step, index) => {
            const isLast = index === howItWorks.steps.length - 1;

            return (
              <Reveal as="li" key={step.number} delay={Math.min(index, 4) * 70}>
                <div className="group relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-5 pb-9 md:grid-cols-[8.5rem_minmax(0,1fr)] md:gap-x-10 md:pb-11 lg:grid-cols-[10rem_minmax(0,16rem)_minmax(0,1fr)]">
                  {/* Continuous route line, broken after the final step. */}
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="absolute left-[0.4375rem] top-4 h-full w-px bg-navy-900/15 md:left-[0.5rem] md:top-5"
                    />
                  )}

                  <div className="flex items-start gap-4 md:gap-6">
                    <span
                      aria-hidden="true"
                      className={`relative z-10 mt-1.5 h-[0.9375rem] w-[0.9375rem] flex-shrink-0 rounded-full border-2 md:mt-3 ${
                        isLast
                          ? "border-accent bg-accent"
                          : "border-navy-900/25 bg-cream group-hover:border-accent"
                      } transition-colors duration-250`}
                    />
                    <span className="tnum -mt-1.5 hidden font-display text-[clamp(2.75rem,1.9rem+2.4vw,4.25rem)] font-semibold leading-[0.8] text-navy-900/20 transition-colors duration-250 group-hover:text-accent/70 md:block">
                      {step.number}
                    </span>
                  </div>

                  <div className="md:pt-0.5">
                    <p className="tnum meta mb-2 text-accent md:hidden">{step.number}</p>
                    <h3 className="font-display text-display-4 font-semibold text-navy-900">
                      {step.heading}
                    </h3>
                    <p className="mt-2 max-w-[46ch] text-base leading-relaxed text-muted lg:hidden">
                      {step.copy}
                    </p>
                  </div>

                  <p className="hidden max-w-[54ch] text-base leading-relaxed text-muted lg:block lg:pt-0.5">
                    {step.copy}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ol>

        <Reveal delay={160}>
          <div className="border-t border-navy-900/15 pt-10">
            <QuoteButton location="how_it_works">{howItWorks.cta}</QuoteButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
