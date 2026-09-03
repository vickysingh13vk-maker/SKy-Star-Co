import type { Config } from "tailwindcss";

/**
 * Sky Star design tokens.
 *
 * Visual language: trade documentation. Deep ink navy against warm bone paper,
 * hairline rules, monospaced reference metadata, large editorial numerals, and
 * a single brass signal colour used sparingly. Every value below is contrast
 * checked against the surface it is intended to sit on.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "430px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        // Dark surfaces
        ink: {
          DEFAULT: "#0A1A2B",
          900: "#0A1A2B",
          800: "#12304A",
          700: "#17384F",
          600: "#22506E",
        },
        // Light surfaces (warm, not cool grey)
        bone: {
          DEFAULT: "#F5F1EA",
          100: "#FBF9F5",
          200: "#EAE4D9",
          300: "#DCD5C8",
        },
        // Secondary text on light surfaces (AA on bone and bone-200)
        steel: "#50606F",
        // Single accent. `brass` is safe on ink; `brass-ink` is the text-safe
        // variant for light surfaces.
        brass: {
          DEFAULT: "#B98A2E",
          light: "#D9A441",
          ink: "#7A571A",
        },
        // Secondary text on ink surfaces
        mist: "#A9B8C4",
        signal: {
          error: "#97331F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Archivo", "Helvetica Neue", "sans-serif"],
        sans: ["var(--font-body)", "IBM Plex Sans", "Segoe UI", "sans-serif"],
        mono: ["var(--font-mono)", "IBM Plex Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Fluid editorial scale
        "display-xl": ["clamp(2.5rem, 1.55rem + 4.2vw, 5.25rem)", { lineHeight: "0.98", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2rem, 1.4rem + 2.6vw, 3.5rem)", { lineHeight: "1.04", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(1.5rem, 1.25rem + 1.1vw, 2.125rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.125rem, 1.05rem + 0.4vw, 1.375rem)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        // Oversized numerals used as structure
        numeral: ["clamp(2.5rem, 1.8rem + 3vw, 4.25rem)", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        "numeral-sm": ["clamp(1.5rem, 1.2rem + 1.2vw, 2rem)", { lineHeight: "0.9", letterSpacing: "-0.03em" }],
        // Copy
        lede: ["clamp(1.0625rem, 1rem + 0.35vw, 1.25rem)", { lineHeight: "1.6" }],
        body: ["1rem", { lineHeight: "1.65" }],
        "body-sm": ["0.9375rem", { lineHeight: "1.6" }],
        // Monospaced trade metadata
        meta: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.16em" }],
        "meta-sm": ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.18em" }],
      },
      maxWidth: {
        page: "1440px",
        prose: "62ch",
      },
      borderRadius: {
        none: "0",
        DEFAULT: "2px",
        sm: "1px",
      },
      spacing: {
        section: "clamp(4.5rem, 3rem + 6vw, 9rem)",
        "section-sm": "clamp(3rem, 2rem + 4vw, 6rem)",
        gutter: "clamp(1.25rem, 0.5rem + 2.5vw, 3.5rem)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        250: "250ms",
        400: "400ms",
        600: "600ms",
      },
    },
  },
  plugins: [],
};

export default config;
