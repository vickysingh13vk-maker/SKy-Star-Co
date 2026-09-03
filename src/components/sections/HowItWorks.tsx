import { howItWorks } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteButton } from "@/components/cta/QuoteButton";

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-it-works-heading" className="bg-white py-20 md:py-28">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            id="how-it-works-heading"
            eyebrow={howItWorks.eyebrow}
            heading={howItWorks.headline}
            align="center"
          />
        </Reveal>

        {/* Desktop / tablet: horizontal editorial process */}
        <ol className="mt-16 hidden grid-cols-2 gap-x-8 gap-y-14 md:grid lg:grid-cols-4">
          {howItWorks.steps.map((step, index) => (
            <Reveal
              as="li"
              key={step.number}
              delay={(index % 4) * 80}
              className="border-t border-navy-900/20 pt-5"
            >
              <span className="font-display text-4xl font-medium text-navy-900/55">
                {step.number}
              </span>
              <h3 className="mt-3 font-display text-base font-medium text-navy-900">
                {step.heading}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.copy}</p>
            </Reveal>
          ))}
        </ol>

        {/* Mobile: vertical timeline */}
        <ol className="mt-12 space-y-0 md:hidden">
          {howItWorks.steps.map((step, index) => (
            <Reveal as="li" key={step.number} delay={index * 60}>
              <div className="relative border-l-2 border-navy-900/15 py-1 pb-8 pl-6 last:pb-0">
                <span
                  className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-navy-900"
                  aria-hidden="true"
                />
                <span className="font-display text-sm font-semibold text-accent">
                  {step.number}
                </span>
                <h3 className="mt-1 font-display text-base font-medium text-navy-900">
                  {step.heading}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.copy}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={200}>
          <div className="mt-14 flex justify-center">
            <QuoteButton location="how_it_works">{howItWorks.cta}</QuoteButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
