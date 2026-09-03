import { trustStrip } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";

export function TrustStrip() {
  return (
    <section aria-labelledby="trust-heading" className="bg-bone">
      <div className="shell">
        <h2 id="trust-heading" className="sr-only">
          How Sky Star works with buyers
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4">
          {trustStrip.map((item, index) => (
            <Reveal
              as="li"
              key={item.title}
              delay={index * 70}
              className="rule-light border-t py-9 md:pr-10 lg:py-12 md:[&:nth-child(even)]:border-l md:[&:nth-child(even)]:pl-10 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:pl-10"
            >
              <span className="block font-display text-numeral-sm font-medium text-brass-ink">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-display-sm text-ink">{item.title}</h3>
              <p className="mt-3 max-w-[34ch] text-body-sm text-steel">{item.copy}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
