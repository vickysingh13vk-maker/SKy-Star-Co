import type { Config } from "tailwindcss";

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
        navy: {
          950: "#081625",
          900: "#0E2A47",
          800: "#123353",
          700: "#1B4470",
          600: "#2C5786",
        },
        // Neutral dark, distinct from navy. Used for the one section that has
        // to read as a different material rather than a darker blue.
        charcoal: {
          900: "#14181D",
          800: "#1D232A",
          700: "#2A323B",
        },
        ink: "#1C1F23",
        muted: "#5C6573",
        line: "#E1E5EA",
        paper: "#F4F6F8",
        cream: "#FAF8F4",
        accent: {
          // Text-safe accent (AA on white and on paper). accent-strong is for
          // fills and marks on dark surfaces only.
          DEFAULT: "#B0561B",
          strong: "#E8842C",
          soft: "#F2D8BE",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "Segoe UI", "sans-serif"],
        display: ["var(--font-inter-tight)", "-apple-system", "Segoe UI", "sans-serif"],
      },
      fontSize: {
        // Fluid editorial scale. Every heading on the site comes from here so
        // the hierarchy stays consistent across breakpoints.
        "display-1": ["clamp(2.625rem, 1.75rem + 4.1vw, 5.25rem)", { lineHeight: "0.96", letterSpacing: "-0.035em" }],
        "display-2": ["clamp(2rem, 1.5rem + 2.5vw, 3.625rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-3": ["clamp(1.5rem, 1.28rem + 1.1vw, 2.125rem)", { lineHeight: "1.1", letterSpacing: "-0.022em" }],
        "display-4": ["clamp(1.125rem, 1.05rem + 0.4vw, 1.375rem)", { lineHeight: "1.25", letterSpacing: "-0.015em" }],
        // Large process/reason numerals.
        numeral: ["clamp(3.25rem, 2rem + 5.6vw, 7rem)", { lineHeight: "0.82", letterSpacing: "-0.05em" }],
        "numeral-sm": ["clamp(2rem, 1.5rem + 2.2vw, 3.25rem)", { lineHeight: "0.85", letterSpacing: "-0.045em" }],
        lead: ["clamp(1.0625rem, 1rem + 0.35vw, 1.25rem)", { lineHeight: "1.62" }],
        label: ["0.6875rem", { lineHeight: "1.2", letterSpacing: "0.14em" }],
        "label-sm": ["0.625rem", { lineHeight: "1.2", letterSpacing: "0.16em" }],
      },
      maxWidth: {
        content: "1280px",
        wide: "1440px",
        measure: "34rem",
      },
      borderRadius: {
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
        lg: "8px",
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(14, 42, 71, 0.06)",
        card: "0 4px 16px rgba(14, 42, 71, 0.08)",
        raised: "0 12px 32px rgba(8, 22, 37, 0.14)",
        lift: "0 18px 48px -24px rgba(8, 22, 37, 0.45)",
      },
      transitionDuration: {
        150: "150ms",
        250: "250ms",
        400: "400ms",
        600: "600ms",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "38": "9.5rem",
      },
      letterSpacing: {
        tightest: "-0.03em",
        wideish: "0.08em",
        label: "0.14em",
      },
    },
  },
  plugins: [],
};

export default config;
