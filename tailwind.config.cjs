/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        shlop: ["Shlop", "sans-serif"],
        alegreya: ["Alegreya", "sans-serif"],
        alegreyablack: ["AlegreyaBlack", "sans-serif"],
      },
    },
  },
  plugins: [],
};
