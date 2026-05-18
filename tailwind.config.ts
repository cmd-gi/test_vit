import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pitch: "#0A0A0A",
        charcoal: "#111111",
        slatex: "#1A1A1A",
        neon: "#FF6A00",
        ember: "#FF8C1A",
        peach: "#FFD7B3"
      },
      boxShadow: {
        glow: "0 0 32px rgba(255,106,0,0.35)",
      }
    },
  },
  plugins: [],
} satisfies Config;
