type Tone = "navy" | "charcoal" | "paper";

const toneStyles: Record<Tone, { background: string; grid: string; text: string; frame: string }> = {
  navy: {
    background: "linear-gradient(160deg, #123353 0%, #0E2A47 45%, #081625 100%)",
    grid: "rgba(255, 255, 255, 0.055)",
    text: "text-white/60",
    frame: "border-white/20",
  },
  charcoal: {
    background: "linear-gradient(160deg, #2A2F35 0%, #1C1F23 55%, #101317 100%)",
    grid: "rgba(255, 255, 255, 0.05)",
    text: "text-white/55",
    frame: "border-white/15",
  },
  paper: {
    background: "linear-gradient(160deg, #1B4470 0%, #123353 60%, #0E2A47 100%)",
    grid: "rgba(255, 255, 255, 0.06)",
    text: "text-white/60",
    frame: "border-white/20",
  },
};

interface PlaceholderImageProps {
  label: string;
  tone?: Tone;
  ratio?: string;
  className?: string;
  index?: string;
}

/**
 * Art-directed slot for production photography that does not exist yet.
 * Deliberately abstract — no stock imagery standing in for real port,
 * factory or product photography — and easy to swap for a next/image
 * element once the shoot is delivered.
 */
export function PlaceholderImage({
  label,
  tone = "navy",
  ratio = "4 / 5",
  className = "",
  index,
}: PlaceholderImageProps) {
  const t = toneStyles[tone];

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: ratio, background: t.background }}
      role="img"
      aria-label={`${label} — production photography pending`}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(${t.grid} 1px, transparent 1px), linear-gradient(90deg, ${t.grid} 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
        aria-hidden="true"
      />

      <div className={`absolute inset-5 border ${t.frame} md:inset-6`} aria-hidden="true">
        <span className="absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-accent-strong" />
        <span className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-accent-strong/60" />
      </div>

      {index && (
        <span
          aria-hidden="true"
          className={`absolute left-9 top-9 font-display text-xs font-semibold tracking-label md:left-10 md:top-10 ${t.text}`}
        >
          {index}
        </span>
      )}

      <div
        className="absolute inset-x-9 bottom-9 flex flex-wrap items-baseline justify-between gap-2 md:inset-x-10 md:bottom-10"
        aria-hidden="true"
      >
        <p className={`text-xs font-semibold uppercase tracking-label ${t.text}`}>{label}</p>
        <p className="text-[0.625rem] uppercase tracking-label text-white/30">Image slot</p>
      </div>
    </div>
  );
}
