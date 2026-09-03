import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

interface SectionHeadingProps {
  eyebrow: string;
  heading: ReactNode;
  id?: string;
  align?: "left" | "center";
  tone?: "navy" | "light" | "accent";
  headingTone?: "dark" | "light";
  children?: ReactNode;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  id,
  align = "left",
  tone = "navy",
  headingTone = "dark",
  children,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      <Eyebrow tone={tone} className={align === "center" ? "justify-center" : ""}>
        {eyebrow}
      </Eyebrow>
      <h2
        id={id}
        className={`mt-5 text-balance font-display text-[clamp(1.75rem,1.35rem+2vw,2.75rem)] font-medium leading-[1.1] tracking-tightest ${
          headingTone === "light" ? "text-white" : "text-navy-900"
        }`}
      >
        {heading}
      </h2>
      {children && (
        <div
          className={`mt-4 text-base leading-relaxed ${
            headingTone === "light" ? "text-white/75" : "text-muted"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
