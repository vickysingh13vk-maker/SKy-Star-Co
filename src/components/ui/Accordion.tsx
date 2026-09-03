"use client";

import { useId, useState } from "react";
import { track } from "@/lib/analytics";

interface AccordionItem {
  question: string;
  answer: string;
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  function toggle(index: number) {
    setOpenIndex((current) => {
      const next = current === index ? null : index;
      if (next !== null) track("faq_open", { question: items[next]?.question });
      return next;
    });
  }

  return (
    <div className="rule-light border-t">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.question} className="rule-light border-b">
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="group flex min-h-[68px] w-full items-center gap-5 py-5 text-left md:gap-8"
              >
                <span className="font-mono text-meta-sm text-brass-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`flex-1 text-display-sm transition-colors duration-250 ${
                    isOpen ? "text-ink" : "text-ink/80 group-hover:text-ink"
                  }`}
                >
                  {item.question}
                </span>
                {/* plus / minus drawn as two hairlines */}
                <span aria-hidden="true" className="relative h-4 w-4 flex-shrink-0 text-steel">
                  <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current" />
                  <span
                    className={`absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-current transition-transform duration-400 ease-editorial ${
                      isOpen ? "scale-y-0" : "scale-y-100"
                    }`}
                  />
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
              <p className="max-w-prose pb-7 pl-10 text-body text-steel md:pl-14">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
