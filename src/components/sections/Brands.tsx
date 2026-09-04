import Image from "next/image";
import { brands } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Renders only once approved logos exist in `brands.logos`. The brief forbids
 * inventing client names, logos or relationships, so an empty list means the
 * section stays off the page entirely rather than shipping placeholder marks.
 */
export function Brands() {
  if (brands.logos.length === 0) return null;

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
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              {/* Cells carry their own hairlines; the negative offsets clip the
                  outer ones so the rules stay correct at any column count. */}
              <ul className="-ml-px -mt-px grid grid-cols-2 overflow-hidden sm:grid-cols-3">
                {brands.logos.map((brand) => (
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
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
