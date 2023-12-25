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
    },
    fontFamily: {
      oxanium: ["Oxanium", "Oxanium"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
