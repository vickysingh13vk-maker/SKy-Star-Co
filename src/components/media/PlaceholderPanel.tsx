export type PlateTone = "dark" | "light";

const tones: Record<PlateTone, string> = {
  dark: "bg-ink-800",
  light: "bg-bone-200",
};

/**
 * Blank stand-in for a photograph that has not been supplied yet.
 *
 * Deliberately empty: a flat panel in the surrounding surface's tone, holding
 * the frame's proportions so the layout is final before the photography
 * arrives. Set the slot's `src` in src/content/media.ts and the photograph
 * replaces this with no other change.
 */
export function PlaceholderPanel({ tone = "dark" }: { tone?: PlateTone }) {
  return <div className={`absolute inset-0 ${tones[tone]}`} aria-hidden="true" />;
}
