import type { ReactNode } from "react";

type Tone = "ink" | "light" | "brass";

const tones: Record<Tone, string> = {
  ink: "text-steel",
  light: "text-mist",
  brass: "text-brass-ink",
};

interface MetaLabelProps {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  /** Draws the leading hairline tick that marks a document field. */
  tick?: boolean;
}

/** Monospaced trade-document label: section indices, field names, references. */
export function MetaLabel({ children, tone = "ink", className = "", tick = true }: MetaLabelProps) {
  return (
    <p
      className={`flex items-center gap-3 font-mono text-meta-sm uppercase ${tones[tone]} ${className}`}
    >
      {tick && (
        <span
          aria-hidden="true"
          className={`h-px w-6 ${tone === "light" ? "bg-brass-light" : "bg-brass"}`}
        />
      )}
      {children}
    </p>
  );
}

interface MetaPairProps {
  label: string;
  value: ReactNode;
  tone?: "ink" | "light";
  className?: string;
}

/** Origin / mode / status style field: small label above a value. */
export function MetaPair({ label, value, tone = "ink", className = "" }: MetaPairProps) {
  return (
    <div className={className}>
      <p
        className={`font-mono text-meta-sm uppercase ${tone === "light" ? "text-mist/70" : "text-steel"}`}
      >
        {label}
      </p>
      <p
        className={`mt-1.5 font-mono text-meta uppercase ${tone === "light" ? "text-bone" : "text-ink"}`}
      >
        {value}
      </p>
    </div>
  );
}
