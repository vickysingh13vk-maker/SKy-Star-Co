import { whatWeSource, SHOW_VAPE, vapeCategory } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteButton } from "@/components/cta/QuoteButton";

// Each featured category gets a deliberately different visual weight so the
// gallery reads as an edit, not a product grid.
const composition = [
  {
    wrapper: "lg:col-span-7",
    ratio: "4 / 3",
    lgRatio: "4 / 3",
    headingClass: "text-display-2",
    sizes: "(min-width: 1024px) 56vw, 100vw",
  },
  {
    wrapper: "lg:col-span-5 lg:mt-24",
    ratio: "4 / 3",
    lgRatio: "3 / 4",
    headingClass: "text-display-3",
    sizes: "(min-width: 1024px) 40vw, 100vw",
  },
  {
    // Explicit row-start: with a 4th tile below (vape, once published) sharing
    // this row at columns 1-4, sparse grid packing would place both
    // correctly on its own, but pinning the row keeps the composition
    // deterministic rather than relying on that packing behaviour.
    wrapper: "lg:col-span-8 lg:col-start-5 lg:row-start-2 lg:-mt-8",
    ratio: "4 / 3",
    lgRatio: "16 / 9",
    headingClass: "text-display-2",
    sizes: "(min-width: 1024px) 64vw, 100vw",
  },
  {
    // Vape, when SHOW_VAPE is on — a smaller fourth tile closing the same
    // row as the wide one above, rather than reusing the hero layout.
    wrapper: "lg:col-span-4 lg:col-start-1 lg:row-start-2",
    ratio: "4 / 3",
    lgRatio: "1 / 1",
    headingClass: "text-display-4",
    sizes: "(min-width: 1024px) 32vw, 100vw",
  },
];

export function WhatWeSource() {
  const categories = SHOW_VAPE
    ? [...whatWeSource.anchorCategories, vapeCategory]
    : whatWeSource.anchorCategories;

  return (
    <section id="what-we-source" aria-labelledby="what-we-source-heading" className="section-y bg-paper">
      <div className="container-wide">
        <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow tone="accent">{whatWeSource.eyebrow}</Eyebrow>
              <h2
                id="what-we-source-heading"
                className="mt-6 font-display text-display-2 font-semibold text-navy-900"
              >
                <span className="block">{whatWeSource.headline[0]}</span>
                <span className="block text-navy-900/45">{whatWeSource.headline[1]}</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-4">
            <Reveal delay={120}>
              <p className="max-w-measure text-lead text-muted">{whatWeSource.intro}</p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-y-14 md:mt-20 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-20">
          {categories.map((category, index) => {
            const layout = composition[index] ?? composition[0]!;
            const number = String(index + 1).padStart(2, "0");

            return (
              <Reveal key={category.key} delay={index * 90} className={`min-w-0 ${layout.wrapper}`}>
                <article className="group">
                  <div className="relative -mx-5 xs:-mx-6 md:-mx-10 lg:mx-0">
                    {/* Ratio differs between mobile and large screens, so the
                        crop stays right rather than letterboxing. */}
                    <Media
                      src={category.image}
                      alt={category.imageBrief}
                      caption={category.heading}
                      index={number}
                      tone={index === 1 ? "charcoal" : "navy"}
                      ratio={layout.ratio}
                      sizes={layout.sizes}
                      className="lg:hidden"
                    />
                    <Media
                      src={category.image}
                      alt={category.imageBrief}
                      caption={category.heading}
                      index={number}
                      tone={index === 1 ? "charcoal" : "navy"}
                      ratio={layout.lgRatio}
                      sizes={layout.sizes}
                      className="hidden lg:block"
                    />
                  </div>

                  <div className="mt-6 flex items-start gap-5 border-t border-navy-900/15 pt-5 md:gap-8">
                    <span
                      aria-hidden="true"
                      className="tnum meta pt-1.5 text-navy-900/40"
                    >
                      {number}
                    </span>
                    <div>
                      <h3
                        className={`font-display ${layout.headingClass} font-semibold text-navy-900`}
                      >
                        {category.heading}
                      </h3>
                      <p className="mt-3 max-w-[42ch] text-base leading-relaxed text-muted">
                        {category.copy}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Wider capability, set as type rather than another grid of boxes. */}
        <Reveal delay={120}>
          <div className="mt-18 border-t border-navy-900/15 pt-8 md:mt-24 lg:grid lg:grid-cols-12 lg:gap-x-10">
            <p className="meta text-navy-700 lg:col-span-3">Additional Sourcing Capability</p>
            <ul className="mt-5 flex flex-wrap gap-y-2 lg:col-span-9 lg:mt-0">
              {whatWeSource.supportingCategories.map((item, index) => (
                <li key={item} className="text-lead text-navy-900">
                  <span>{item}</span>
                  {index < whatWeSource.supportingCategories.length - 1 && (
                    <span className="px-4 text-accent/50" aria-hidden="true">
                      /
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-14 flex flex-col items-start gap-6 border-t border-navy-900/15 pt-10 md:flex-row md:items-end md:justify-between md:gap-10">
            <div>
              <h3 className="max-w-[18ch] font-display text-display-3 font-semibold text-navy-900">
                {whatWeSource.closing.heading}
              </h3>
              <p className="mt-3 max-w-measure text-base leading-relaxed text-muted">
                {whatWeSource.closing.copy}
              </p>
            </div>
            <QuoteButton location="what_we_source" className="flex-shrink-0">
              {whatWeSource.closing.cta}
            </QuoteButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
