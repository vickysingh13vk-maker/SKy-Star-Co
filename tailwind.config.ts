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
      maxWidth: {
        content: "1280px",
        wide: "1440px",
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
      },
      transitionDuration: {
        150: "150ms",
        250: "250ms",
        400: "400ms",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
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
