import Image from "next/image";
import { brands } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const PLACEHOLDER_SLOTS = 6;

/**
 * Renders real logos once approved ones exist in `brands.logos`. Until then
 * it shows honest placeholder slots rather than staying off the page or
 * inventing marks — the brief forbids fake client names or logos, but an
 * empty section reads as unfinished rather than pending.
 */
export function Brands() {
  const hasLogos = brands.logos.length > 0;

  return (
    <section id="brands" aria-labelledby="brands-heading" className="section-y-tight bg-white">
      <div className="container-wide">
        <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow tone="accent">{brands.eyebrow}</Eyebrow>
              <h2
                id="brands-heading"
                className="mt-6 max-w-[18ch] font-display text-display-3 font-semibold text-navy-900"
              >
                {brands.headline}
              </h2>
              {!hasLogos && (
                <p className="mt-4 max-w-measure text-sm leading-relaxed text-muted">
                  Approved brand relationships will appear here as they are confirmed.
                </p>
              )}
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              {/* Cells carry their own hairlines; the negative offsets clip the
                  outer ones so the rules stay correct at any column count. */}
              <ul className="-ml-px -mt-px grid grid-cols-2 overflow-hidden sm:grid-cols-3">
                {hasLogos
                  ? brands.logos.map((brand) => (
                      <li
                        key={brand.name}
                        className="flex min-h-[7rem] items-center justify-center border-l border-t border-navy-900/12 p-6"
                      >
                        <Image
                          src={brand.logo}
                          alt={brand.name}
                          width={brand.width}
                          height={brand.height}
                          className="h-auto max-h-10 w-auto opacity-70 grayscale transition duration-250 hover:opacity-100 hover:grayscale-0"
                        />
                      </li>
                    ))
                  : Array.from({ length: PLACEHOLDER_SLOTS }).map((_, i) => (
                      <li
                        key={i}
                        aria-hidden="true"
                        className="flex min-h-[7rem] items-center justify-center border-l border-t border-navy-900/12 p-6"
                      >
                        <span className="h-6 w-24 rounded-sm bg-navy-900/[0.06]" />
                      </li>
                    ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
