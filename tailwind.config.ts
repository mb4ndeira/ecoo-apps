import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#545F71",
        secondary: "#eef1f4",
        background: "#F7F7F7",
        "slate-blue": "#507080",
        "slate-gray": "#2F4A4D",
        "rain-forest": "#00735E",
        eucalyptus: "#43DBAB",
        caramel: "#FFDD92",
        "blanched-almoad": "#FFEDCC",
        platinum: "#EAE7E3",
        "ghost-white": {
          base: "#FAFCFF",
          100: "#FAFCFF",
          200: "#D8DADD", // this is intentional
          300: "#D8DADD",
          400: "#B7B8BA",
          500: "#959698",
          600: "#737475",
          700: "#515253",
          800: "#303030",
          900: "#0E0E0E",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans"],
        inter: ["Inter", "sans"]
      }
    },
  },
};

export default config;
