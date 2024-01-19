import type { Config } from "tailwindcss";
import { createFluidValue } from "./utils/fluid/fluidValue";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./animation/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },

      inset: {},
      padding: {
        xxxl: "120px",
        xxl: "90px",
        xl: "60px",
        base: "20px",
        lg: "15px",
        md: "12px",
        sm: "9px",
        xs: "6px",
        xxs: "",
        xxxs: "",
      },
      height: {},
      margin: {
        xxxl: "120px",
        xxl: "90px",
        xl: "60px",
        base: "20px",
        lg: "15px",
        md: "12px",
        sm: "9px",
        xs: "",
        xxs: "",
        xxxs: "",
      },
      borderRadius: {},
      fontSize: {
        "fluid-body-xl": createFluidValue(20, 30),
        "fluid-body-xxl": createFluidValue(20, 54),
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
        "fluid-display-3xl": createFluidValue(50, 270),
      },
      colors: {
        bruno: {
          grey: "#BFBDBE",
          white: "#F2F2F2",
          black: "#0D0D0D",
          ximen: "#595659",
          yellow: "#F2E85E",
          "dark-grey": "#403C3F",
        },
      },
      width: {},
      gap: {
        base: "20px",
      },
    },
  },
  plugins: [],
};
export default config;
