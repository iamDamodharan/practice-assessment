/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      fogg: "#FAFAFA",
      black: {
        300: "#E6E6E6",
        600: "#7A7A7A",
        900: "#212121",
      },
      red: "#D86161",
      primary: "#1597E4",
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
