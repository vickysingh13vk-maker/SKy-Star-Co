import { whySkyStar } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function WhySkyStar() {
  return (
    <section id="why-sky-star" aria-labelledby="why-sky-star-heading" className="bg-paper py-20 md:py-28">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            id="why-sky-star-heading"
            eyebrow={whySkyStar.eyebrow}
            heading={whySkyStar.headline}
            align="center"
          />
        </Reveal>

        <ul className="mt-16 grid border-t border-l border-navy-900/12 sm:grid-cols-2 lg:grid-cols-3">
          {whySkyStar.points.map((point, index) => (
            <Reveal
              as="li"
              key={point.heading}
              delay={(index % 3) * 90}
              className="border-b border-r border-navy-900/12 p-8 md:p-10"
            >
              <h3 className="font-display text-lg font-medium text-navy-900">{point.heading}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{point.copy}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
