import type { Config } from "tailwindcss";
import { colors } from "./app/theme/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
      },
      colors: colors,
      gap: {
        sm: "32px",
        md: "56px",
        lg: "80px",
        xl: "128px",
      },
    },
  },
  plugins: [],
};
export default config;
