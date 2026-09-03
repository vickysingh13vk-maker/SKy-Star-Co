import { about } from "@/content/site";
import { media } from "@/content/media";
import { MetaLabel } from "@/components/ui/Meta";
import { TradeImage } from "@/components/media/TradeImage";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteButton } from "@/components/cta/QuoteButton";

// Stated plainly because the distinction is the point of the section.
const position = [
  { label: "What we are", value: "A trading and sourcing company, registered in Hong Kong" },
  { label: "What we are not", value: "A manufacturer or factory owner" },
];

export function About() {
  const [lede, ...rest] = about.copy;

  return (
    <section id="about" aria-labelledby="about-heading" className="bg-bone py-section">
      <div className="shell">
        {/* Statement leads at full width — the page's largest claim */}
        <Reveal>
          <div className="rule-light border-t pt-4">
            <MetaLabel tick={false}>
              <span className="text-brass-ink whitespace-nowrap">§ 05</span>
              <span className="ml-5">{about.eyebrow}</span>
            </MetaLabel>
          </div>
          <h2 id="about-heading" className="mt-8 max-w-[16ch] text-display-lg text-ink">
            {about.headline[0]}
            <span className="block text-ink/55">{about.headline[1]}</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-12">
          <Reveal delay={120} className="lg:col-span-5">
            <TradeImage
              slot={media.warehouse}
              ratio="4 / 5"
              tone="light"
              meta
              sizes="(min-width: 1024px) 40vw, 100vw"
              frameClassName="rule-light border"
            />
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={80}>
              {lede && <p className="text-display-sm text-ink">{lede}</p>}
              <div className="mt-5 max-w-prose space-y-4 text-body text-steel">
                {rest.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>

            {/* Position statement, set as a specification block */}
            <Reveal delay={140}>
              <dl className="mt-10 rule-light border-t">
                {position.map((row) => (
                  <div
                    key={row.label}
                    className="rule-light grid gap-2 border-b py-5 sm:grid-cols-[10rem,1fr] sm:gap-6"
                  >
                    <dt className="font-mono text-meta-sm uppercase text-brass-ink">{row.label}</dt>
                    <dd className="text-body text-ink">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-10 font-display text-display-md text-ink">{about.emphasis}</p>
              <p className="mt-4 max-w-prose text-body text-steel">{about.closing}</p>
              <div className="mt-8">
                <QuoteButton location="about">{about.cta}</QuoteButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
