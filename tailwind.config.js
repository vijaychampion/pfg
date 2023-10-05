/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      writingMode: {
        "vertical-lr": "vertical-lr",
      },

      colors: {
        brand: "#F2EFE9",
        gold: "#DBCCAF",
        gray: "#D9D9D9",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
        gothic: ["Trade Gothic LT Bold"],
        blacker: ["Blacker Sans Text"],
      },
    },
  },
  variants: {},
  plugins: [],
};
