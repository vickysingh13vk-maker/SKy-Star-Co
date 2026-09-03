import type { ReactNode } from "react";
import { MetaLabel } from "./Meta";

interface SectionHeadProps {
  /** Document-style section index, e.g. "§ 03". */
  index: string;
  label: string;
  heading: ReactNode;
  id?: string;
  tone?: "ink" | "light";
  children?: ReactNode;
  className?: string;
  headingClassName?: string;
}

/**
 * Section opener: a hairline with the section index and label above an
 * editorial heading. The index numbering is real structure — it follows the
 * page's reading order, so it tells the reader where they are.
 */
export function SectionHead({
  index,
  label,
  heading,
  id,
  tone = "ink",
  children,
  className = "",
  headingClassName = "",
}: SectionHeadProps) {
  const light = tone === "light";

  return (
    <div className={className}>
      <div
        className={`flex items-center gap-5 border-t pt-4 ${light ? "rule-dark" : "rule-light"}`}
      >
        <span
          className={`font-mono text-meta-sm uppercase ${light ? "text-brass-light" : "text-brass-ink"}`}
        >
          {index}
        </span>
        <MetaLabel tone={light ? "light" : "ink"} tick={false}>
          {label}
        </MetaLabel>
      </div>

      <h2
        id={id}
        className={`mt-7 max-w-[18ch] text-display-lg ${light ? "text-bone" : "text-ink"} ${headingClassName}`}
      >
        {heading}
      </h2>

      {children && (
        <div className={`mt-6 max-w-prose text-lede ${light ? "text-mist" : "text-steel"}`}>
          {children}
        </div>
      )}
    </div>
  );
}
