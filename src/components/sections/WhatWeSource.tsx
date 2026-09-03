import { whatWeSource } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteButton } from "@/components/cta/QuoteButton";

// Art direction notes for the category image slots — replaced by real
// photography of each category when the shoot is delivered.
const categoryImageBrief = [
  "Product detail photography",
  "Lighting product photography",
  "Appliance product photography",
];

export function WhatWeSource() {
  return (
    <section id="what-we-source" aria-labelledby="what-we-source-heading" className="bg-paper py-20 md:py-28">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            id="what-we-source-heading"
            eyebrow={whatWeSource.eyebrow}
            heading={
              <>
                {whatWeSource.headline[0]}
                <br />
                {whatWeSource.headline[1]}
              </>
            }
          >
            <p>{whatWeSource.intro}</p>
          </SectionHeading>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-6">
          {whatWeSource.anchorCategories.map((category, index) => (
            <Reveal key={category.heading} delay={index * 100}>
              <article className="group h-full">
                <PlaceholderImage
                  label={categoryImageBrief[index] ?? "Product photography"}
                  tone="navy"
                  ratio="5 / 4"
                  index={`0${index + 1}`}
                />
                <h3 className="mt-5 font-display text-lg font-medium text-navy-900">
                  {category.heading}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{category.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-16 border-y border-navy-900/12 py-8">
            <p className="text-xs font-semibold uppercase tracking-label text-navy-700">
              Additional Sourcing Capability
            </p>
            <p className="mt-4 text-lg leading-relaxed text-navy-900 sm:text-xl">
              {whatWeSource.supportingCategories.join("  ·  ")}
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-16 flex flex-col items-start gap-6 rounded border border-navy-900/12 bg-white p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <h3 className="font-display text-xl font-medium text-navy-900">
                {whatWeSource.closing.heading}
              </h3>
              <p className="mt-2 max-w-lg text-base leading-relaxed text-muted">
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
