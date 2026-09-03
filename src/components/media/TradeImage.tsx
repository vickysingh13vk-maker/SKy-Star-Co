import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { MediaSlot } from "@/content/media";
import { TechnicalPlate, type PlateTone } from "./TechnicalPlate";

/**
 * Resolves whether a slot has a usable photograph.
 *
 * Remote URLs (Unsplash/Pexels/Pixabay, allowed in next.config.mjs) are taken
 * on trust. Local paths are checked against /public at render time, so a slot
 * whose file has not been added yet falls back to its drawing instead of
 * shipping a broken image. Drop the file in and it switches over on the next
 * build with no code change.
 */
function resolvePhoto(src: string | null): string | null {
  if (!src) return null;
  if (/^https?:\/\//.test(src)) return src;
  try {
    return fs.existsSync(path.join(process.cwd(), "public", src)) ? src : null;
  } catch {
    return null;
  }
}

interface TradeImageProps {
  slot: MediaSlot;
  /** CSS aspect-ratio for the frame, e.g. "4 / 5". */
  ratio?: string;
  tone?: PlateTone;
  meta?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  frameClassName?: string;
}

/**
 * The one image frame used across the page: a photograph (or, until one
 * exists, a drawn plate) with corner registration marks and optional trade
 * metadata. Keeping the frame in one component is what lets photography
 * replace drawings with no layout work.
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
  const photo = resolvePhoto(slot.src);
  const markColour = tone === "dark" ? "border-brass" : "border-brass-ink";

  return (
    <figure className={className}>
      <div className={`relative overflow-hidden ${frameClassName}`} style={{ aspectRatio: ratio }}>
        {photo ? (
          <Image
            src={photo}
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

/** Same resolution rule, for backgrounds that are not framed. */
export function resolveSlotPhoto(slot: MediaSlot): string | null {
  return resolvePhoto(slot.src);
}
