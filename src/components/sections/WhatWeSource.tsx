import { whatWeSource } from "@/content/site";
import { media } from "@/content/media";
import { SectionHead } from "@/components/ui/SectionHead";
import { TradeImage } from "@/components/media/TradeImage";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteButton } from "@/components/cta/QuoteButton";

// Anchor categories carry more visual weight than the supporting list, which
// is typographic only — the hierarchy the brief asks for.
const anchorMedia = [media.hardware, media.lighting, media.appliances];

export function WhatWeSource() {
  const [dominant, ...supporting] = whatWeSource.anchorCategories;

  return (
    <section
      id="what-we-source"
      aria-labelledby="what-we-source-heading"
      className="on-ink bg-ink py-section text-bone"
    >
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SectionHead
              index="§ 02"
              label={whatWeSource.eyebrow}
              heading={
                <>
                  {whatWeSource.headline[0]}
                  <span className="block text-bone/55">{whatWeSource.headline[1]}</span>
                </>
              }
              id="what-we-source-heading"
              tone="light"
              headingClassName="max-w-[22ch]"
            >
              <p>{whatWeSource.intro}</p>
            </SectionHead>
          </Reveal>

          {/* Category register — states the hierarchy rather than implying it */}
          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <dl className="rule-dark border-t">
              {[
                { label: "Anchor categories", value: "Three" },
                { label: "Supporting categories", value: "Assessed individually" },
                { label: "Basis", value: "Your specification" },
              ].map((row) => (
                <div key={row.label} className="rule-dark flex justify-between gap-6 border-b py-4">
                  <dt className="font-mono text-meta-sm uppercase text-mist/70">{row.label}</dt>
                  <dd className="text-right font-mono text-meta-sm uppercase text-brass-light">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Asymmetric gallery: one dominant plate, two supporting, offset. */}
        <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-10">
          {dominant && (
            <Reveal className="lg:col-span-7">
              <article>
                <TradeImage
                  slot={anchorMedia[0]!}
                  ratio="4 / 3"
                  tone="dark"
                  meta
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  frameClassName="rule-dark border"
                />
                <h3 className="mt-7 text-display-md text-bone">{dominant.heading}</h3>
                <p className="mt-3 max-w-prose text-body text-mist">{dominant.copy}</p>
              </article>
            </Reveal>
          )}

          <div className="flex flex-col gap-10 lg:col-span-5 lg:mt-20">
            {supporting.map((category, index) => (
              <Reveal key={category.heading} delay={120 + index * 90}>
                <article>
                  <TradeImage
                    slot={anchorMedia[index + 1]!}
                    ratio="16 / 10"
                    tone="dark"
                    meta
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    frameClassName="rule-dark border"
                  />
                  <h3 className="mt-6 text-display-sm text-bone">{category.heading}</h3>
                  <p className="mt-2 max-w-prose text-body-sm text-mist">{category.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Supporting capability: typography, not cards. */}
        <Reveal delay={120}>
          <div className="mt-20 lg:mt-24">
            <p className="font-mono text-meta-sm uppercase text-mist/70">
              Additional sourcing capability
            </p>
            <ul className="mt-6 rule-dark border-t">
              {whatWeSource.supportingCategories.map((label, index) => (
                <li
                  key={label}
                  className="rule-dark flex items-baseline gap-5 border-b py-5 md:gap-8"
                >
                  <span className="font-mono text-meta-sm text-brass-light">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-display-sm text-bone/85">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="max-w-[20ch] text-display-md text-bone">
                {whatWeSource.closing.heading}
              </h3>
              <p className="mt-3 max-w-prose text-body text-mist">{whatWeSource.closing.copy}</p>
            </div>
            <QuoteButton location="what_we_source" variant="solid-light" className="flex-shrink-0">
              {whatWeSource.closing.cta}
            </QuoteButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
