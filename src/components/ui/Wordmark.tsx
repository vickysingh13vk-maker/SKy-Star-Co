/* eslint-disable @next/next/no-img-element */

interface WordmarkProps {
  /** Resolved logo path, or null to fall back to the typographic wordmark. */
  src: string | null;
  tone: "light" | "dark";
  /** Rendered height in px; width follows the artwork's own ratio. */
  height?: number;
  className?: string;
}

/**
 * The brand lockup. Renders the supplied logo when one exists in
 * /public/brand, otherwise a typographic wordmark set in the display face so
 * the site is never without a mark.
 *
 * A plain <img> is used rather than next/image because the artwork's
 * intrinsic dimensions are not known ahead of time and the logo is small;
 * height is fixed and width auto, so it cannot shift layout.
 */
export function Wordmark({ src, tone, height = 34, className = "" }: WordmarkProps) {
  if (src) {
    return (
      <img
        src={src}
        alt="Sky Star — trading and sourcing, from requirement to delivery"
        style={{ height, width: "auto" }}
        className={`block w-auto object-contain ${className}`}
      />
    );
  }

  return (
    <span
      className={`font-display font-semibold uppercase tracking-[0.22em] ${
        tone === "light" ? "text-bone" : "text-ink"
      } ${className}`}
    >
      Sky
      <span className={tone === "light" ? "text-brass-light" : "text-brass-ink"}>
        &#8202;·&#8202;
      </span>
      Star
    </span>
  );
}
