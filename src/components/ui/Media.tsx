import Image from "next/image";
import { PlaceholderImage } from "./PlaceholderImage";

interface MediaProps {
  /** Path under /public once licensed photography is supplied, otherwise null. */
  src: string | null | undefined;
  /** Describes the photograph for assistive technology and the pending slot. */
  alt: string;
  ratio?: string;
  className?: string;
  index?: string;
  caption?: string;
  tone?: "navy" | "charcoal" | "deep";
  sizes?: string;
  priority?: boolean;
}

/**
 * Renders real photography when it has been supplied and falls back to the
 * art-directed slot when it has not. Every image position on the site goes
 * through here, so dropping a file into /public and setting one path in
 * `site.ts` is the whole swap.
 */
export function Media({
  src,
  alt,
  ratio = "4 / 5",
  className = "",
  index,
  caption,
  tone = "navy",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}: MediaProps) {
  if (!src) {
    return (
      <PlaceholderImage
        label={alt}
        tone={tone}
        ratio={ratio}
        className={className}
        index={index}
        caption={caption}
      />
    );
  }

  return (
    <div
      className={`relative overflow-hidden bg-navy-900 ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
