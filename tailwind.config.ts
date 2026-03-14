import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        /* ✅ Main UI font (body, buttons, etc.) */
        sans: ["var(--font-sans)"],

        /* ✅ Mono font (code, numbers, etc.) */
        mono: ["var(--font-mono)"],

        /* ✅ Heading / brand font */
        keania: ["var(--font-keania-one)"],
      },
    },
    theme: {
  extend: {
    colors: {
      primary: "oklch(0.6 0.14 150)",
      accent: "oklch(0.65 0.24 27)",
    },
  },
},
  },
  plugins: [],
};

export default config;