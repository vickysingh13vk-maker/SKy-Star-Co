import { whySkyStar } from "@/content/site";
import { media } from "@/content/media";
import { SectionHead } from "@/components/ui/SectionHead";
import { TradeImage } from "@/components/media/TradeImage";
import { Reveal } from "@/components/ui/Reveal";

export function WhySkyStar() {
  return (
    <section
      id="why-sky-star"
      aria-labelledby="why-sky-star-heading"
      className="on-ink bg-ink py-section text-bone"
    >
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHead
                index="§ 04"
                label={whySkyStar.eyebrow}
                heading={whySkyStar.headline}
                id="why-sky-star-heading"
                tone="light"
              />
            </Reveal>

            <Reveal delay={140} className="mt-12 hidden lg:block">
              <TradeImage
                slot={media.freight}
                ratio="3 / 2"
                tone="dark"
                meta
                sizes="40vw"
                frameClassName="rule-dark border"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ol className="rule-dark border-t">
              {whySkyStar.points.map((point, index) => (
                <Reveal as="li" key={point.heading} delay={index * 60}>
                  <div className="rule-dark grid grid-cols-[auto,1fr] gap-x-6 border-b py-7 md:gap-x-10 md:py-8">
                    <span className="font-display text-numeral-sm font-medium text-brass-light">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-display-sm text-bone">{point.heading}</h3>
                      <p className="mt-3 max-w-prose text-body-sm text-mist">{point.copy}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
