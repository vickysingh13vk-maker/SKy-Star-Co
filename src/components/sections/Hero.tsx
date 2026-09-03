import { hero } from "@/content/site";
import { media } from "@/content/media";
import { MetaLabel, MetaPair } from "@/components/ui/Meta";
import { TradeImage } from "@/components/media/TradeImage";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteButton } from "@/components/cta/QuoteButton";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";

/** Trade metadata printed down the side of the hero image. */
const railFields = [
  { label: "Origin", value: "HKG / Asia" },
  { label: "Desk", value: "Trade Desk" },
  { label: "Reference", value: media.hero.ref },
];

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="on-ink relative bg-ink text-bone">
      <div className="shell relative pb-14 pt-28 md:pb-20 md:pt-36 lg:pb-24 lg:pt-40">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Statement */}
          <div className="lg:col-span-7 xl:col-span-6">
            <Reveal>
              <MetaLabel tone="light">{hero.eyebrow}</MetaLabel>
            </Reveal>

            <Reveal delay={80}>
              <h1 id="hero-heading" className="mt-8 max-w-[14ch] text-display-xl text-bone">
                {hero.headline[0]}
                <span className="block text-bone/60">{hero.headline[1]}</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-8 max-w-prose space-y-4 text-lede text-mist">
                {hero.supporting.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
                <QuoteButton location="hero" variant="solid-light" />
                <WhatsAppButton location="hero" variant="outline-light" />
              </div>
            </Reveal>
          </div>

          {/* Plate with its measurement rail */}
          <Reveal delay={200} className="lg:col-span-5 xl:col-span-6">
            <div className="flex gap-5 lg:justify-end">
              <ul className="hidden shrink-0 flex-col justify-end gap-7 pb-2 xl:flex">
                {railFields.map((field) => (
                  <li key={field.label}>
                    <MetaPair label={field.label} value={field.value} tone="light" />
                  </li>
                ))}
              </ul>

              <TradeImage
                slot={media.hero}
                ratio="4 / 5"
                tone="dark"
                priority
                sizes="(min-width: 1280px) 40vw, (min-width: 1024px) 45vw, 100vw"
                className="w-full max-w-[520px] lg:max-w-none xl:w-[460px] 2xl:w-[520px]"
                frameClassName="border rule-dark"
              />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Service line + routing strip: the hero's closing detail */}
      <div className="rule-dark border-t">
        <div className="shell flex flex-col gap-6 py-6 md:flex-row md:items-center md:justify-between">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:flex sm:flex-wrap sm:items-center sm:gap-x-9">
            {hero.highlights.map((item) => (
              <li key={item} className="font-mono text-meta-sm uppercase text-mist">
                {item}
              </li>
            ))}
          </ul>
          <p
            className="font-mono text-meta-sm uppercase text-brass-light"
            aria-label="Source, then supply, then deliver"
          >
            Source <span aria-hidden="true">→</span> Supply <span aria-hidden="true">→</span> Deliver
          </p>
        </div>
      </div>
    </section>
  );
}
