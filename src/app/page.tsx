import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { WhatWeSource } from "@/components/sections/WhatWeSource";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhySkyStar } from "@/components/sections/WhySkyStar";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { getBrandArtwork } from "@/lib/brand";

export default function Home() {
  const brand = getBrandArtwork();

  return (
    <>
      <Header brand={brand} />
      <main id="main-content">
        <Hero />
        <TrustStrip />
        <WhatWeDo />
        <WhatWeSource />
        <HowItWorks />
        <WhySkyStar />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
