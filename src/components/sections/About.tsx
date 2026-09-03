import { about } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteButton } from "@/components/cta/QuoteButton";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-white py-20 md:py-28">
      <div className="container-content">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>{about.eyebrow}</Eyebrow>
              <h2
                id="about-heading"
                className="mt-5 text-balance font-display text-[clamp(1.75rem,1.35rem+2vw,2.75rem)] font-medium leading-[1.1] tracking-tightest text-navy-900"
              >
                {about.headline[0]}
                <br />
                {about.headline[1]}
              </h2>
            </Reveal>

            <Reveal delay={160} className="hidden lg:mt-12 lg:block">
              <PlaceholderImage label="Working with suppliers in Asia" tone="paper" ratio="4 / 5" />
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={100}>
              <div className="max-w-xl space-y-4 text-base leading-relaxed text-muted">
                {about.copy.map((p, index) => (
                  <p
                    key={p}
                    className={index === 0 ? "text-lg text-navy-900 sm:text-xl" : "sm:text-lg"}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-10 border-l-2 border-accent-strong pl-6 font-display text-2xl font-medium tracking-tightest text-navy-900 sm:text-3xl">
                {about.emphasis}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {about.closing}
              </p>
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
