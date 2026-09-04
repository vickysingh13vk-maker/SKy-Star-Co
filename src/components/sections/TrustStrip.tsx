import { trustStrip } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";

export function TrustStrip() {
  return (
    <section
      aria-label="Why buyers work with Sky Star"
      className="on-dark relative overflow-hidden bg-navy-950 text-white"
    >
      <div className="rule-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="container-wide relative">
        <ul className="grid border-t border-white/15 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4 lg:gap-x-12">
          {trustStrip.map((item, index) => (
            <Reveal
              as="li"
              key={item.title}
              delay={index * 80}
              className="border-b border-white/12 py-9 sm:py-10 lg:border-b-0 lg:py-12"
            >
              <span className="mb-5 block h-px w-7 bg-accent-strong" aria-hidden="true" />
              <p className="meta text-white">{item.title}</p>
              <p className="mt-3 max-w-[30ch] text-sm leading-relaxed text-white/65">{item.copy}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
