import { hero } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
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
      <div className="container-wide grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="lg:col-span-6 lg:pb-24">
          <Reveal>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1
              id="hero-heading"
              className="mt-6 max-w-[15ch] text-balance font-display text-[clamp(2.125rem,1.5rem+2.9vw,3.25rem)] font-medium leading-[1.06] tracking-tightest text-navy-900 lg:max-w-none"
            >
              {hero.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-6 max-w-md space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              {hero.supporting.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-9 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
              <QuoteButton location="hero" />
              <WhatsAppButton location="hero" />
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-navy-900/10 pt-6 lg:flex lg:flex-wrap">
              {hero.highlights.map((item) => (
                <li key={item} className="text-xs font-semibold uppercase tracking-wideish text-navy-700">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:col-span-6">
          <div className="relative -mx-5 xs:-mx-6 md:-mx-10 lg:mx-0">
            <PlaceholderImage
              label="Freight and product movement"
              tone="navy"
              ratio="4 / 3"
              className="lg:hidden"
            />
            <PlaceholderImage
              label="Freight and product movement"
              tone="navy"
              ratio="3 / 4"
              className="hidden lg:block lg:ml-auto lg:h-[640px] lg:w-[92%] xl:h-[680px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
