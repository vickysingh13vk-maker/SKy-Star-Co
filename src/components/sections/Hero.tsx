import { hero } from "@/content/site";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteButton } from "@/components/cta/QuoteButton";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-cream pt-28 md:pt-32 lg:pt-36"
    >
      {/* Hairline column grid — trade documentation, not decoration. */}
      <div
        className="rule-grid pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
      />

      <div className="container-wide relative">
        <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0">
          <div className="min-w-0 lg:col-span-7 lg:pb-16">
            <Reveal>
              <p className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="meta flex items-center gap-3 text-navy-700">
                  <span className="h-px w-10 bg-accent" aria-hidden="true" />
                  {hero.eyebrow}
                </span>
              </p>

              <h1
                id="hero-heading"
                className="mt-7 max-w-[16ch] font-display text-display-1 font-semibold text-navy-900 lg:max-w-[14ch]"
              >
                <span className="block">{hero.headline[0]}</span>
                <span className="block text-navy-700">{hero.headline[1]}</span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-8 max-w-measure space-y-4 text-lead text-muted">
                {hero.supporting.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-10 flex flex-col items-stretch gap-3 xs:flex-row xs:flex-wrap xs:items-center">
                <QuoteButton location="hero" className="px-8 xs:min-w-[15rem]" />
                <WhatsAppButton location="hero" />
              </div>
            </Reveal>

            {/* Route: the whole proposition in three words. */}
            <Reveal delay={300}>
              <ol className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-navy-900/12 pt-6 md:gap-x-4">
                {hero.route.map((stage, index) => (
                  <li key={stage} className="flex items-center gap-3 md:gap-4">
                    {index > 0 && (
                      <span className="text-accent" aria-hidden="true">
                        &rarr;
                      </span>
                    )}
                    <span className="meta text-navy-900">{stage}</span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={360}>
              <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2.5 md:flex md:flex-wrap md:gap-x-8">
                {hero.highlights.map((item) => (
                  <li key={item} className="text-sm leading-snug text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Media column — bleeds to the viewport edge below lg. */}
          <Reveal delay={180} className="min-w-0 lg:col-span-5">
            <div className="relative -mx-5 xs:-mx-6 md:-mx-10 lg:mx-0">
              <Media
                src={null}
                alt="Freight and product movement"
                tone="navy"
                ratio="4 / 3"
                className="lg:hidden"
                sizes="100vw"
                priority
              />
              <Media
                src={null}
                alt="Freight and product movement"
                tone="navy"
                ratio="3 / 4"
                className="hidden lg:block lg:h-[clamp(30rem,52vw,42rem)]"
                sizes="42vw"
                priority
              />

              {/* Desk metadata, overlapping the image edge for depth. */}
              <dl className="absolute bottom-0 left-5 right-5 grid translate-y-1/2 grid-cols-3 gap-px overflow-hidden border border-navy-900/10 bg-navy-900/10 shadow-lift xs:left-6 xs:right-6 md:left-10 md:right-10 lg:-left-10 lg:right-6">
                {hero.meta.map((item) => (
                  <div key={item.label} className="bg-cream px-3 py-4 md:px-5">
                    <dt className="meta text-label-sm text-muted">{item.label}</dt>
                    <dd className="tnum mt-1.5 font-display text-sm font-semibold text-navy-900 md:text-base">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Space for the overlapping metadata block. */}
      <div className="h-16 md:h-20 lg:h-10" aria-hidden="true" />
    </section>
  );
}
