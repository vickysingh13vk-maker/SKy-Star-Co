import { faq } from "@/content/site";
import { SectionHead } from "@/components/ui/SectionHead";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-bone-200 py-section">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <SectionHead
                  index="§ 06"
                  label="Frequently asked"
                  heading={
                    <>
                      Questions buyers ask
                      <span className="block text-ink/55">before they enquire.</span>
                    </>
                  }
                  id="faq-heading"
                />
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-8">
                  <p className="max-w-[32ch] text-body text-steel">
                    If something is not covered here, ask us directly — we will tell you plainly
                    whether we can support your requirement.
                  </p>
                  <WhatsAppButton location="faq" className="mt-6" />
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={80}>
              <Accordion items={faq} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
