/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        100: "100px",
        110: "110px",
        120: "120px",
        130: "130px",

        250: "250px",

        300: "300px",
        350: "350px",
        400: "400px",
        450: "450px",
      },
      height: {
        100: "100px",
        110: "110px",
        120: "120px",
        130: "130px",

        250: "250px",

        300: "300px",
        350: "350px",

        500: "500px",
        600: "600px",
      },
      colors: {
        ccDark: "#181818",
        ccOffwhite: "#F2E6D9",
        darkOffwhite: "#a59d94",
      },
      fontFamily: {
        monts: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      translate: {
        1000: "1000px",
        2000: "2000px",
        4000: "4000px",
        5000: "5000px",
      },
      transitionDuration: {
        1500: "1500ms",
        2000: "2000ms",
      },
    },
  },
  plugins: [],
};
