/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    fontFamily: {
      sans: ['"Open Sans"'],
    },
    extend: {
      colors: {
        bodyBg: "#121213",
        darkendYellow: "#b59f3b",
        correctColor: "#538d4e",
        absentColor: "#3a3a3c",
      },

      gridTemplateColumns: {
        20: "repeat(20, minmax(0, 1.25em))",
      },

      gridAutoRows: {
        "3em": "3em",
      },
    },
  },
  plugins: [],
};
