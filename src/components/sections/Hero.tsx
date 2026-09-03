import Image from "next/image";
import { hero } from "@/content/site";
import { media } from "@/content/media";
import { MetaLabel } from "@/components/ui/Meta";
import { TradeImage, resolveSlotPhoto } from "@/components/media/TradeImage";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteButton } from "@/components/cta/QuoteButton";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";

const railFields = [
  { label: "Origin", value: "HKG / Asia" },
  { label: "Desk", value: "Trade Desk" },
  { label: "Reference", value: media.hero.ref },
];

function Statement({ showRail = true }: { showRail?: boolean }) {
  return (
    <>
      <Reveal>
        <MetaLabel tone="light">{hero.eyebrow}</MetaLabel>
      </Reveal>

      <Reveal delay={80}>
        <h1 id="hero-heading" className="mt-8 max-w-[14ch] text-display-xl text-bone">
          {hero.headline[0]}
          <span className="block text-bone/65">{hero.headline[1]}</span>
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

      {showRail && (
        <Reveal delay={320}>
          <dl className="rule-dark mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t pt-6">
            {railFields.map((field) => (
              <div key={field.label}>
                <dt className="font-mono text-meta-sm uppercase text-mist/70">{field.label}</dt>
                <dd className="mt-1.5 font-mono text-meta uppercase text-bone">{field.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      )}
    </>
  );
}

function RoutingStrip() {
  return (
    <div className="rule-dark relative z-10 border-t bg-ink/80 backdrop-blur-[2px] lg:bg-transparent">
      <div className="shell flex flex-col gap-5 py-6 md:flex-row md:items-center md:justify-between">
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
  );
}

/**
 * Hero composition, in two states.
 *
 * With a photograph: it fills the section and the statement sits over a scrim
 * on the left, so a wide port image is seen at full width. On mobile the
 * statement comes first on ink and the photograph follows as its own band, so
 * the image keeps its detail instead of being buried under a heavy overlay.
 *
 * Without one: a split composition with the drawn plate framed on the right,
 * which reads as intended artwork rather than a stretched background.
 */
export function Hero() {
  const photo = resolveSlotPhoto(media.hero);

  if (!photo) {
    return (
      <section
        id="top"
        aria-labelledby="hero-heading"
        className="on-ink relative bg-ink text-bone"
      >
        <div className="shell relative pb-14 pt-28 md:pb-20 md:pt-36 lg:pb-24 lg:pt-40">
          <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6 lg:pb-6">
              <Statement />
            </div>
            <Reveal delay={200} className="lg:col-span-6">
              <TradeImage
                slot={media.hero}
                ratio="4 / 5"
                tone="dark"
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="w-full lg:ml-auto lg:max-w-[520px]"
                frameClassName="rule-dark border"
              />
            </Reveal>
          </div>
        </div>
        <RoutingStrip />
      </section>
    );
  }

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="on-ink relative isolate flex flex-col bg-ink text-bone"
    >
      {/* Media layer: a band on mobile, the full section behind the text on desktop */}
      <div className="relative order-2 aspect-[16/10] w-full xs:aspect-[16/9] lg:absolute lg:inset-0 lg:z-0 lg:aspect-auto lg:h-full">
        <Image
          src={photo}
          alt={media.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-[68%_center]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,26,43,0.97) 0%, rgba(10,26,43,0.93) 34%, rgba(10,26,43,0.6) 58%, rgba(10,26,43,0.28) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 hidden h-44 lg:block"
          style={{
            background: "linear-gradient(180deg, rgba(10,26,43,0) 0%, rgba(10,26,43,0.9) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 order-1 lg:min-h-[clamp(620px,88vh,900px)] lg:pt-[88px]">
        <div className="shell flex h-full flex-col justify-center pb-14 pt-28 md:pb-16 md:pt-32 lg:py-24">
          <div className="max-w-[46rem] lg:max-w-[38rem] xl:max-w-[44rem]">
            <Statement />
          </div>
        </div>
      </div>

      <div className="order-3">
        <RoutingStrip />
      </div>
    </section>
  );
}
