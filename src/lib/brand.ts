import fs from "node:fs";
import path from "node:path";

/**
 * Resolves brand artwork from /public/brand at render time.
 *
 * Drop the logo in and the header, footer and mobile menu switch from the
 * typographic wordmark to the real mark automatically — no code change. Two
 * variants are used because the header sits transparent over the dark hero
 * before settling onto the light background:
 *
 *   public/brand/logo.(svg|png|webp)        dark artwork, for light surfaces
 *   public/brand/logo-light.(svg|png|webp)  light artwork, for dark surfaces
 *
 * Supply a transparent SVG or PNG — artwork on a white rectangle will show
 * that rectangle over the navy header. If only one variant exists it is used
 * on both surfaces.
 */
const EXTENSIONS = ["svg", "png", "webp", "jpg"] as const;

function findAsset(basename: string): string | null {
  for (const ext of EXTENSIONS) {
    const relative = `/brand/${basename}.${ext}`;
    try {
      if (fs.existsSync(path.join(process.cwd(), "public", relative))) return relative;
    } catch {
      return null;
    }
  }
  return null;
}

export interface BrandArtwork {
  /** Artwork for light backgrounds (scrolled header). */
  dark: string | null;
  /** Artwork for dark backgrounds (hero header, footer, mobile menu). */
  light: string | null;
}

export function getBrandArtwork(): BrandArtwork {
  const dark = findAsset("logo");
  const light = findAsset("logo-light");
  return { dark: dark ?? light, light: light ?? dark };
}
