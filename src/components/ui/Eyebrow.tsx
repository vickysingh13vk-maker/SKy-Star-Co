interface EyebrowProps {
  children: string;
  tone?: "navy" | "light" | "accent";
  className?: string;
}

const toneClasses = {
  navy: "text-navy-700",
  light: "text-white/70",
  accent: "text-accent",
};

const ruleClasses = {
  navy: "bg-navy-700/45",
  light: "bg-accent-strong",
  accent: "bg-accent",
};

export function Eyebrow({ children, tone = "navy", className = "" }: EyebrowProps) {
  return (
    <p className={`meta flex items-center gap-3 ${toneClasses[tone]} ${className}`}>
      <span className={`h-px w-10 flex-shrink-0 ${ruleClasses[tone]}`} aria-hidden="true" />
      {children}
    </p>
  );
}
