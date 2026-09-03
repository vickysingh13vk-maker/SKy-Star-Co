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

export function Eyebrow({ children, tone = "navy", className = "" }: EyebrowProps) {
  return (
    <p
      className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-label ${toneClasses[tone]} ${className}`}
    >
      <span className="h-px w-8 bg-current" aria-hidden="true" />
      {children}
    </p>
  );
}
