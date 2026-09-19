import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm near-black, not pure black — feels like dusk, not a void.
        ink: {
          DEFAULT: "#100D10",
          soft: "#1B171B",
          line: "#2B2529",
        },
        // Rose-gold family — the "warm accent" the brief asked for,
        // kept away from the generic terracotta (#D97757) tell.
        rose: {
          DEFAULT: "#C9967A",
          light: "#E8B4A0",
          dim: "#8C6E58",
        },
        parchment: {
          DEFAULT: "#F5EDE6",
          muted: "#A89A94",
        },
      },
      fontFamily: {
        // Display serif carries the romantic, handwritten-letter feel.
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        // Body sans stays quiet and legible.
        body: ["var(--font-manrope)", "system-ui", "sans-serif"],
        // Used sparingly, only for the Roblox-era "system" motif.
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      backgroundImage: {
        "grain": "url('/grain.png')",
      },
    },
  },
  plugins: [],
};
export default config;
