/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "430px",
      md: "834px",
      lg: "1512px",
    },
    colors: {
      primary500: "#194659",
      bgvertical: "#E54A64",
      colorLogo: "#DBCFB4",
      bgcolor: "#194659",
      white: "#FFFFFF",
      black: "#000000",
    },
    extend: {
      width: {
        desktop: "1512px",
        tablet: "834px",
        mobile: "430px",
      },
      height: {
        desktop: "982px",
        tablet: "1194px",
        mobile: "932px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
