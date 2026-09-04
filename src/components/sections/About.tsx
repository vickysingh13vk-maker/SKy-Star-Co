import { about } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteButton } from "@/components/cta/QuoteButton";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-y bg-white">
      <div className="container-wide">
        {/* Movement 1 — the statement, at full width. */}
        <Reveal>
          <Eyebrow tone="accent">{about.eyebrow}</Eyebrow>
          <h2
            id="about-heading"
            className="mt-6 max-w-[18ch] font-display text-display-1 font-semibold text-navy-900"
          >
            <span className="block">{about.headline[0]}</span>
            <span className="block text-navy-900/45">{about.headline[1]}</span>
          </h2>
        </Reveal>

        {/* Movement 2 — evidence: photography beside the narrative. */}
        <div className="mt-14 grid gap-y-10 md:mt-18 lg:grid-cols-12 lg:gap-x-12">
          <Reveal delay={120} className="min-w-0 lg:col-span-5">
            <div className="-mx-5 xs:-mx-6 md:-mx-10 lg:mx-0">
              <Media
                src={null}
                alt="Working with suppliers in Asia"
                tone="deep"
                ratio="4 / 5"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </Reveal>

          <div className="min-w-0 lg:col-span-6 lg:col-start-7">
            <Reveal delay={160}>
              <div className="max-w-measure space-y-4 text-base leading-relaxed text-muted">
                {about.copy.map((p, index) => (
                  <p
                    key={p}
                    className={
                      index === 0 || index === 2
                        ? "text-lead font-medium text-navy-900"
                        : undefined
                    }
                  >
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-10 border-l-2 border-accent pl-6 font-display text-display-2 font-semibold text-navy-900">
                {about.emphasis}
              </p>
            </Reveal>

            <Reveal delay={260}>
              <p className="mt-8 max-w-measure text-base leading-relaxed text-muted">
                {about.closing}
              </p>
              <div className="mt-8">
                <QuoteButton location="about">{about.cta}</QuoteButton>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Movement 3 — the boundary, stated plainly. */}
        <Reveal delay={120}>
          <div className="mt-18 grid gap-y-10 border-t border-navy-900/15 pt-10 md:mt-24 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
            <div>
              <h3 className="meta text-navy-900">{about.contrast.areLabel}</h3>
              <ul className="mt-6 space-y-4">
                {about.contrast.are.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 border-t border-navy-900/10 pt-4 first:border-t-0 first:pt-0"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"
                    />
                    <span className="text-lead text-navy-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="meta text-muted">{about.contrast.areNotLabel}</h3>
              <ul className="mt-6 space-y-4">
                {about.contrast.areNot.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 border-t border-navy-900/10 pt-4 first:border-t-0 first:pt-0"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.9375rem] h-px w-4 flex-shrink-0 bg-muted/60"
                    />
                    <span className="text-lead text-muted line-through decoration-muted/30 decoration-1">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
