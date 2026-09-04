import { whySkyStar } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function WhySkyStar() {
  return (
    <section
      id="why-sky-star"
      aria-labelledby="why-sky-star-heading"
      className="on-dark section-y relative overflow-hidden bg-charcoal-900 text-white"
    >
      <div
        className="rule-grid-dark pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
      />

      <div className="container-wide relative">
        <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow tone="light">{whySkyStar.eyebrow}</Eyebrow>
              <h2
                id="why-sky-star-heading"
                className="mt-6 max-w-[16ch] font-display text-display-2 font-semibold text-white"
              >
                {whySkyStar.headline}
              </h2>
            </Reveal>
          </div>
        </div>

        <ol className="mt-16 border-t border-white/15 md:mt-22">
          {whySkyStar.points.map((point, index) => (
            <Reveal as="li" key={point.heading} delay={Math.min(index, 4) * 70}>
              <div className="row-editorial row-rule-strong group grid grid-cols-1 gap-x-8 gap-y-3 border-b border-white/15 py-8 md:grid-cols-[5.5rem_minmax(0,17rem)_minmax(0,1fr)] md:items-baseline md:gap-y-0 md:py-10 lg:grid-cols-[7rem_minmax(0,20rem)_minmax(0,1fr)]">
                <span
                  aria-hidden="true"
                  className="tnum font-display text-numeral-sm font-semibold text-white/20 transition-colors duration-250 group-hover:text-accent-strong"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-display-3 font-semibold text-white">
                  {point.heading}
                </h3>
                <p className="max-w-[48ch] text-base leading-relaxed text-white/65 lg:justify-self-end">{point.copy}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
