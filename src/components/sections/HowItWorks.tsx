import { howItWorks } from "@/content/site";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteButton } from "@/components/cta/QuoteButton";

// Short stage names for the summary rail — the seven steps compressed into the
// route a shipment actually takes.
const stages = [
  "Requirement",
  "Review",
  "Sourcing",
  "Commercial",
  "Order",
  "Production",
  "Delivery",
];

function Station({
  step,
  className = "",
}: {
  step: (typeof howItWorks.steps)[number];
  className?: string;
}) {
  return (
    <article className={`rule-light relative border-t pt-7 ${className}`}>
      {/* measurement tick straddling the route line */}
      <span aria-hidden="true" className="absolute -top-1.5 left-0 h-3 w-px bg-brass" />
      <span className="block font-display text-numeral font-medium text-ink/50">{step.number}</span>
      <h3 className="mt-4 max-w-[20ch] text-display-sm text-ink">{step.heading}</h3>
      <p className="mt-3 max-w-[38ch] text-body-sm text-steel">{step.copy}</p>
    </article>
  );
}

export function HowItWorks() {
  const firstRow = howItWorks.steps.slice(0, 4);
  const secondRow = howItWorks.steps.slice(4);

  return (
    <section id="how-it-works" aria-labelledby="how-it-works-heading" className="bg-bone py-section">
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHead
              index="§ 03"
              label={howItWorks.eyebrow}
              heading={howItWorks.headline}
              id="how-it-works-heading"
            />
          </Reveal>

          {/* Route summary: the whole process in one line */}
          <Reveal delay={120} className="hidden xl:block">
            <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 pb-2 font-mono text-meta-sm uppercase text-steel">
              {stages.map((stage, index) => (
                <li key={stage} className="flex items-center gap-3">
                  {index > 0 && (
                    <span aria-hidden="true" className="text-brass">
                      →
                    </span>
                  )}
                  {stage}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        {/* Desktop and tablet: two-row route, read left to right */}
        <ol className="mt-16 hidden gap-x-8 gap-y-14 md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
          {firstRow.map((step, index) => (
            <Reveal as="li" key={step.number} delay={index * 70}>
              <Station step={step} />
            </Reveal>
          ))}

          {secondRow.map((step, index) => (
            <Reveal as="li" key={step.number} delay={index * 70}>
              <Station step={step} />
            </Reveal>
          ))}

          {/* Route terminus fills the final cell rather than leaving a hole */}
          <Reveal as="li" delay={240} className="hidden lg:block">
            <div className="rule-light relative flex h-full flex-col justify-between border-t pt-7">
              <span aria-hidden="true" className="absolute -top-1.5 left-0 h-3 w-px bg-brass" />
              <div>
                <p className="font-mono text-meta-sm uppercase text-brass-ink">Route complete</p>
                <p className="mt-4 max-w-[22ch] text-body-sm text-steel">
                  Seven steps from your first message to goods arriving at their destination.
                </p>
              </div>
              <div className="mt-8">
                <QuoteButton location="how_it_works">{howItWorks.cta}</QuoteButton>
              </div>
            </div>
          </Reveal>
        </ol>

        {/* Mobile: vertical route */}
        <ol className="mt-12 md:hidden">
          {howItWorks.steps.map((step, index) => (
            <Reveal as="li" key={step.number} delay={index * 50}>
              <div className="relative border-l border-ink/15 pb-9 pl-6 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-px top-2 h-px w-4 bg-brass"
                />
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-numeral-sm font-medium text-ink/50">
                    {step.number}
                  </span>
                  <h3 className="text-display-sm text-ink">{step.heading}</h3>
                </div>
                <p className="mt-3 text-body-sm text-steel">{step.copy}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <div className="mt-12 lg:hidden">
            <QuoteButton location="how_it_works_mobile">{howItWorks.cta}</QuoteButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
