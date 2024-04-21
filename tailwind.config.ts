import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./animation/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "7rem",
        "2xl": "8rem",
      },
    },
    extend: {
      backgroundImage: {},
      gridTemplateColumns: {},
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
      },
      inset: {},
      padding: {
        header: "7rem",
      },
      height: {},
      margin: {},
      borderRadius: {},
      fontSize: {
        sm: "clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)",
        base: "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
        lg: "clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)",
        xl: "clamp(1.56rem, 1vw + 1.31rem, 2.11rem)",
        "2xl": "clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)",
        "3xl": "clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)",
        "4xl": "clamp(3.05rem, 3.54vw + 2.17rem, 5rem)",
        "5xl": "clamp(3.81rem, 5.18vw + 2.52rem, 6.66rem)",
        "6xl": "clamp(4.77rem, 7.48vw + 2.9rem, 8.88rem)",
      },
      colors: {
        primary: {
          "50": "#f6fee7",
          "100": "#eafccb",
          "200": "#d7f99d",
          "300": "#bef264",
          "400": "#a5e635",
          "500": "#89cc16",
          "600": "#6ca30d",
          "700": "#547c0f",
          "800": "#456212",
          "900": "#3c5314",
          "950": "#1f2e05",
        },
        secondary: {
          "50": "#ecfdf9",
          "100": "#d1faf0",
          "200": "#a7f3e1",
          "300": "#6ee7ca",
          "400": "#34d3ad",
          "500": "#10b991",
          "600": "#059673",
          "700": "#04785c",
          "800": "#065f4a",
          "900": "#064e3d",
          "950": "#022c22",
        },
      },
      width: {},
      gap: {},
    },
  },
  plugins: [],
};
export default config;
