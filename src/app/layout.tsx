import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Fraunces, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site";

// Self-hosted latin subset of Inter (SIL Open Font License) — body copy and UI.
const inter = localFont({
  src: "./fonts/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
  preload: true,
});

// Editorial display serif for headings and large numerals. next/font/google
// downloads and self-hosts the font at build time — no runtime request to
// Google, same as the Inter files above. Fraunces is a variable font with an
// optical-size axis, so it sharpens automatically at hero sizes and softens
// at heading sizes without any per-component tuning.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
  preload: true,
});

// Monospace for the "trade documentation" register — eyebrows, uppercase
// labels, reference codes, desk metadata. Deliberately distinct from the
// heading and body faces so labels read as annotation rather than heading.
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
  preload: true,
});

const title = "Sky Star | B2B Trading & Sourcing from Hong Kong";
const description =
  "Sky Star helps international businesses source products from Asia, coordinate purchasing and arrange delivery to their destination — one point of contact, from requirement to delivery.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: "%s | Sky Star",
  },
  description,
  keywords: [
    "product sourcing Asia",
    "B2B trading company",
    "Hong Kong sourcing agent",
    "import export sourcing",
    "freight coordination",
    "DDP sourcing",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title,
    description,
    siteName: siteConfig.brand,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E2A47",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.brand,
    url: siteConfig.url,
    description,
    address: {
      "@type": "PostalAddress",
      addressCountry: "HK",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.brand,
    url: siteConfig.url,
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "International product sourcing and freight coordination",
    provider: {
      "@type": "Organization",
      name: siteConfig.brand,
    },
    areaServed: "Worldwide",
    description:
      "Product sourcing, trading support and air/sea freight coordination for international B2B buyers, with DDP arrangements available for eligible categories and destinations.",
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${fraunces.variable} ${ibmPlexMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
