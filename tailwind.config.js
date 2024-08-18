/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*html"],
  theme: {
    extend: {
      colors: {
        BrightRed: "hsl(12, 88%, 59%)",
        DarkBlue: "hsl(228, 39%, 23%)",
        DarkGrayishBlue: "hsl(227, 12%, 61%)",
        VeryDarkBlue: "hsl(233, 12%, 13%)",
        VeryPaleRed: "hsl(13, 100%, 96%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        fontFamily: ["Be Vietnam Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
