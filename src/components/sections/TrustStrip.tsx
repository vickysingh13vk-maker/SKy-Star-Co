import { trustStrip } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";

export function TrustStrip() {
  return (
    <section aria-label="Why buyers work with Sky Star" className="border-y border-navy-900/10 bg-white">
      <div className="container-wide">
        <ul className="grid divide-y divide-navy-900/10 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          {trustStrip.map((item, index) => (
            <Reveal as="li" key={item.title} delay={index * 80} className="px-1 py-8 md:px-8">
              <p className="font-display text-sm font-semibold uppercase tracking-wideish text-navy-900">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.copy}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
