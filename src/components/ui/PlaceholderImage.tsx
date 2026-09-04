type Tone = "navy" | "charcoal" | "deep";

const toneStyles: Record<Tone, { background: string; grid: string; label: string; frame: string }> = {
  navy: {
    background:
      "radial-gradient(120% 90% at 78% 8%, #1B4470 0%, #123353 42%, #0B2038 72%, #081625 100%)",
    grid: "rgba(255, 255, 255, 0.05)",
    label: "text-white/55",
    frame: "border-white/15",
  },
  charcoal: {
    background:
      "radial-gradient(120% 90% at 22% 10%, #2A323B 0%, #1D232A 45%, #14181D 100%)",
    grid: "rgba(255, 255, 255, 0.045)",
    label: "text-white/50",
    frame: "border-white/12",
  },
  deep: {
    background:
      "radial-gradient(130% 100% at 50% 0%, #123353 0%, #0E2A47 40%, #081625 100%)",
    grid: "rgba(255, 255, 255, 0.055)",
    label: "text-white/55",
    frame: "border-white/15",
  },
};

interface PlaceholderImageProps {
  label: string;
  tone?: Tone;
  ratio?: string;
  className?: string;
  index?: string;
  /** Small caption on the lower rule — e.g. a category name. */
  caption?: string;
}

/**
 * Art-directed slot standing in for production photography that does not
 * exist yet. Deliberately abstract — no stock imagery pretending to be a real
 * port, factory or product shoot — and sized so a next/image element can drop
 * straight in once the shoot is delivered.
 */
export function PlaceholderImage({
  label,
  tone = "navy",
  ratio = "4 / 5",
  className = "",
  index,
  caption,
}: PlaceholderImageProps) {
  const t = toneStyles[tone];

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: ratio, background: t.background }}
      role="img"
      aria-label={`${label} — production photography pending`}
    >
      {/* Engraved measure grid. */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(${t.grid} 1px, transparent 1px), linear-gradient(90deg, ${t.grid} 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      {/* Registration marks, as on a printed trade document. */}
      <div className={`absolute inset-4 border ${t.frame} md:inset-6`} aria-hidden="true">
        <span className="absolute -left-px -top-px h-5 w-5 border-l border-t border-accent-strong/80" />
        <span className="absolute -bottom-px -right-px h-5 w-5 border-b border-r border-accent-strong/50" />
      </div>

      {index && (
        <span
          aria-hidden="true"
          className={`tnum absolute left-8 top-8 font-display text-label font-semibold ${t.label} md:left-10 md:top-10`}
        >
          {index}
        </span>
      )}

      <div
        className="absolute inset-x-8 bottom-8 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 md:inset-x-10 md:bottom-10"
        aria-hidden="true"
      >
        <p className={`meta ${t.label}`}>{caption ?? label}</p>
        <p className="meta text-label-sm text-white/30">Image slot</p>
      </div>
    </div>
  );
}
