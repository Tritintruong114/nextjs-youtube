import type { Config } from "tailwindcss";
import { createFluidValue } from "./utils/fluid/fluidValue";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./animation/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        house: ["var(--font-house)"],
        jose: ["Josefin Sans", "sans-serif"],
        great: ["Great Vibes", "cursive"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
      inset: {},
      borderRadius: {},
      padding: {},
      height: {},
      margin: {},
      fontSize: {
        "fluid-body-xl": createFluidValue(20, 20),
        "fluid-body-lg": createFluidValue(18, 18),
        "fluid-body-sm": createFluidValue(14, 14),
        "fluid-h1": createFluidValue(48, 64),
        "fluid-h2": createFluidValue(32, 48),
        "fluid-h3": createFluidValue(24, 32),
        "fluid-h4": createFluidValue(20, 24),
        "fluid-h5": createFluidValue(20, 20),
        "fluid-display-m": createFluidValue(60, 84),
        "fluid-display-xl": createFluidValue(45, 140),
        "fluid-display-2xl": createFluidValue(50, 190),
        "fluid-display-3xl": createFluidValue(50, 400),
      },
      colors: {
        bruno: {
          gold: "#ffd600",
          black: "#000000",
          white: "#ffffff",
          yellow: "#f7ff00",
          broom: "#fff023",
        },
      },
      width: {},
      gap: {},
    },
  },
  plugins: [],
};
export default config;
