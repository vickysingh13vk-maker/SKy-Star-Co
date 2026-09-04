"use client";

import { useId, useState } from "react";
import { track } from "@/lib/analytics";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  function toggle(index: number) {
    setOpenIndex((current) => {
      const next = current === index ? null : index;
      if (next !== null) {
        track("faq_open", { question: items[next]?.question });
      }
      return next;
    });
  }

  return (
    <div className="border-t border-navy-900/15">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;
        const number = String(index + 1).padStart(2, "0");

        return (
          <div key={item.question} className="border-b border-navy-900/15">
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="group flex min-h-[64px] w-full items-start gap-5 py-6 text-left focus-visible:outline-offset-[-2px] md:gap-8 md:py-7"
              >
                <span
                  aria-hidden="true"
                  className={`tnum meta mt-1.5 flex-shrink-0 transition-colors duration-250 ${
                    isOpen ? "text-accent" : "text-navy-900/35 group-hover:text-accent"
                  }`}
                >
                  {number}
                </span>

                <span
                  className={`flex-1 font-display text-display-4 font-semibold transition-colors duration-250 ${
                    isOpen ? "text-navy-900" : "text-navy-900 group-hover:text-accent"
                  }`}
                >
                  {item.question}
                </span>

                {/* Thin plus that becomes a minus — no card, no chevron. */}
                <span
                  aria-hidden="true"
                  className="relative mt-2 flex h-4 w-4 flex-shrink-0 items-center justify-center"
                >
                  <span className="absolute h-px w-4 bg-navy-900" />
                  <span
                    className={`absolute h-4 w-px bg-navy-900 transition-transform duration-250 ${
                      isOpen ? "scale-y-0" : "scale-y-100"
                    }`}
                  />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-7 md:pl-[calc(2.75rem+1rem)]"
            >
              <p className="max-w-[62ch] text-base leading-relaxed text-muted">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
