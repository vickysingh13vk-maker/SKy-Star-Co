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
    <div className="divide-y divide-navy-900/12 border-y border-navy-900/12">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.question}>
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="flex w-full min-h-[64px] items-center justify-between gap-6 py-5 text-left focus-visible:outline-offset-[-2px]"
              >
                <span className="text-base font-medium text-navy-900 sm:text-lg">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className={`relative flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-navy-900/25 transition-transform duration-250 ${
                    isOpen ? "rotate-45 bg-navy-900" : ""
                  }`}
                >
                  <span
                    className={`absolute h-[1.5px] w-3.5 ${isOpen ? "bg-white" : "bg-navy-900"}`}
                  />
                  <span
                    className={`absolute h-3.5 w-[1.5px] ${isOpen ? "bg-white" : "bg-navy-900"}`}
                  />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="overflow-hidden pb-6 pr-12"
            >
              <p className="max-w-2xl text-base leading-relaxed text-muted">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
