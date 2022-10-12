/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      bgColor: "#C5E4E7",
      dark: "#00474B",
      light: "#26C2AE",
      input: "#F3F9FA",
      error: "#E17457",
      common: "#5E7A7D",
      white: "#FFFFFF",
    },
    fontSize: {
      sm: ["13px", "24px"],
      mobSm: ["13px", "19px"],
      base: ["16px", "24px"],
      btn: ["20px", "30px"],
      lg: ["24px", "36px"],
      xl: ["48px", "71px"],
      mobXl: ["32px", "47px"],
    },
    borderRadius: {
      DEFAULT: "5px",
      md: "15px",
      lg: "25px",
      full: "9999px",
    },
  },
  plugins: [],
};
