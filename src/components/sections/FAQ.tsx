import { faq } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="section-y bg-paper">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container-wide">
        <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-4">
            <Reveal>
              {/* Sticks alongside the answers on tall screens. */}
              <div className="lg:sticky lg:top-28">
                <Eyebrow tone="accent">FAQ</Eyebrow>
                <h2
                  id="faq-heading"
                  className="mt-6 max-w-[17ch] font-display text-display-2 font-semibold text-navy-900"
                >
                  Questions buyers ask before they enquire.
                </h2>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={120}>
              <Accordion items={faq} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
