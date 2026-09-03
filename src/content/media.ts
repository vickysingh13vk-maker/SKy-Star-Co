import type { PlateVariant } from "@/components/media/TechnicalPlate";

/**
 * Image slots for the page. This is the only file to edit to change the
 * photography.
 *
 * Each `src` accepts either:
 *   - a file in /public, e.g. "/images/hero-port.jpg"; or
 *   - a direct URL from Unsplash, Pexels or Pixabay, e.g.
 *     "https://images.unsplash.com/photo-XXXXXXXXXXXXX" (those hosts are
 *     allowed in next.config.mjs, and next/image optimises them).
 *
 * A slot whose file is missing falls back to its drawn technical plate rather
 * than showing a broken image, so the page is never in a broken state while
 * photography is being collected.
 *
 * Alt text describes the intended photograph and stays accurate after the
 * swap. Keep it factual: these are illustrative images, not photographs of
 * Sky Star's own facilities, so the alt text must not claim otherwise.
 */
export interface MediaSlot {
  src: string | null;
  width?: number;
  height?: number;
  alt: string;
  plate: PlateVariant;
  /** Trade reference printed beside the frame. */
  ref: string;
  /** Short caption in the frame's metadata strip. */
  caption: string;
}

export const media = {
  hero: {
    // Supplied Sky Star hero artwork — add the file at this path.
    src: "/images/hero-port.jpg",
    alt: "Container terminal at sunrise: a Sky Star truck on the quay beside stacked containers, with a loaded container ship, gantry cranes and the Hong Kong skyline beyond",
    plate: "port",
    ref: "REF. 001",
    caption: "Container terminal",
  },
  hardware: {
    src: "/images/hardware.jpg",
    alt: "Precision hardware components including fasteners, bearings and brackets",
    plate: "hardware",
    ref: "PLATE 02",
    caption: "Hardware & consumer products",
  },
  lighting: {
    src: "/images/led-lighting.jpg",
    alt: "Commercial LED luminaires installed in a ceiling array",
    plate: "lighting",
    ref: "PLATE 03",
    caption: "LED lighting",
  },
  appliances: {
    src: "/images/home-appliances.jpg",
    alt: "Domestic appliances including a washing machine, refrigerator and hob",
    plate: "appliances",
    ref: "PLATE 04",
    caption: "Home appliances",
  },
  warehouse: {
    src: "/images/warehouse.jpg",
    alt: "Warehouse pallet racking with loaded bays ready for despatch",
    plate: "warehouse",
    ref: "PLATE 05",
    caption: "Warehouse operations",
  },
  freight: {
    src: "/images/freight.jpg",
    alt: "Container vessel loaded and ready to depart",
    plate: "freight",
    ref: "PLATE 06",
    caption: "Air & sea freight",
  },
} satisfies Record<string, MediaSlot>;

export type MediaKey = keyof typeof media;
