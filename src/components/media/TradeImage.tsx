import Image from "next/image";
import type { MediaSlot } from "@/content/media";
import { TechnicalPlate, type PlateTone } from "./TechnicalPlate";

interface TradeImageProps {
  slot: MediaSlot;
  /** CSS aspect-ratio for the frame, e.g. "4 / 5". */
  ratio?: string;
  tone?: PlateTone;
  /** Show the metadata strip beneath the frame. */
  meta?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  frameClassName?: string;
}

/**
 * The one image frame used across the page: a cropped plate or photograph with
 * corner registration marks and optional trade metadata. Keeping the frame in
 * one component is what lets photography replace drawings with no layout work.
 */
export function TradeImage({
  slot,
  ratio = "4 / 5",
  tone = "dark",
  meta = false,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "",
  frameClassName = "",
}: TradeImageProps) {
  const markColour = tone === "dark" ? "border-brass" : "border-brass-ink";

  return (
    <figure className={className}>
      <div
        className={`relative overflow-hidden ${frameClassName}`}
        style={{ aspectRatio: ratio }}
      >
        {slot.src ? (
          <Image
            src={slot.src}
            alt={slot.alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
          />
        ) : (
          <>
            <TechnicalPlate variant={slot.plate} tone={tone} />
            <span className="sr-only">{slot.alt} — illustrative technical drawing</span>
          </>
        )}

        {/* registration marks */}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute left-4 top-4 h-4 w-4 border-l-2 border-t-2 ${markColour}`}
        />
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute bottom-4 right-4 h-4 w-4 border-b-2 border-r-2 ${markColour} opacity-60`}
        />
      </div>

      {meta && (
        <figcaption
          className={`mt-3 flex items-baseline justify-between gap-4 border-t pt-3 font-mono text-meta-sm uppercase ${
            tone === "dark" ? "rule-dark text-mist" : "rule-light text-steel"
          }`}
        >
          <span>{slot.caption}</span>
          <span className={tone === "dark" ? "text-brass-light" : "text-brass-ink"}>{slot.ref}</span>
        </figcaption>
      )}
    </figure>
  );
}
