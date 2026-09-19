import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Soft pink-pastel world — blush background, no near-black anywhere.
        blossom: {
          DEFAULT: "#FFEEF2", // page background
          soft: "#FFF8FA",    // card surfaces
          card: "#FFFFFF",    // polaroid white
        },
        pink: {
          DEFAULT: "#FF8FAB", // primary accent
          deep: "#E75A7C",    // buttons, active states
          light: "#FFD1DC",   // tape, chips, borders
        },
        plum: {
          DEFAULT: "#5C3A46", // main text
          muted: "#9C7C86",   // secondary text
        },
      },
      fontFamily: {
        // Big handwritten headline — the "diary/bucin" feel.
        hand: ["var(--font-caveat)", "cursive"],
        // Section titles — soft serif, still romantic but readable at small sizes.
        display: ["var(--font-playfair)", "Georgia", "serif"],
        // Body copy — rounded, friendly, easy to read.
        body: ["var(--font-quicksand)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "float-down": {
          "0%": { transform: "translateY(-10vh) translateX(0) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(110vh) translateX(var(--drift, 40px)) rotate(360deg)", opacity: "0" },
        },
        "pulse-soft": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.08)" },
        },
      },
      animation: {
        "float-down": "float-down linear infinite",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
