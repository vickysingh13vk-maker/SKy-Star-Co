import type { PlateVariant } from "@/components/media/TechnicalPlate";

/**
 * Image slots for the page.
 *
 * Every slot renders a drawn technical plate until real photography exists.
 * To swap one in: drop the file into /public/images and set `src` to its path
 * (e.g. "/images/hero-port.jpg") plus the intrinsic `width`/`height`. Nothing
 * else in the layout needs to change — the frame, crop and metadata stay.
 *
 * Alt text describes the intended photograph, so it stays accurate after the
 * swap. Keep it specific and factual: no claims about Sky Star's own
 * facilities, since these are illustrative rather than company photography.
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
    src: null,
    alt: "Container terminal with stacked shipping containers beneath a ship-to-shore gantry crane",
    plate: "port",
    ref: "REF. 001",
    caption: "Container terminal",
  },
  hardware: {
    src: null,
    alt: "Precision hardware components including fasteners, bearings and brackets",
    plate: "hardware",
    ref: "PLATE 02",
    caption: "Hardware & consumer products",
  },
  lighting: {
    src: null,
    alt: "Array of commercial LED luminaires with their light distribution",
    plate: "lighting",
    ref: "PLATE 03",
    caption: "LED lighting",
  },
  appliances: {
    src: null,
    alt: "Front elevations of domestic appliances including a drum washer, upright unit and hob",
    plate: "appliances",
    ref: "PLATE 04",
    caption: "Home appliances",
  },
  warehouse: {
    src: null,
    alt: "Warehouse pallet racking with loaded bays ready for despatch",
    plate: "warehouse",
    ref: "PLATE 05",
    caption: "Warehouse operations",
  },
  freight: {
    src: null,
    alt: "Container vessel loaded for departure with its routing to destination",
    plate: "freight",
    ref: "PLATE 06",
    caption: "Air & sea freight",
  },
} satisfies Record<string, MediaSlot>;

export type MediaKey = keyof typeof media;
