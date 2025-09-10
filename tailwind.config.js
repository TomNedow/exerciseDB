/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Define Inter
      },
    },
  },
  safelist: [
    "font-inter", // Ensure Tailwind keeps the class
  ],
  plugins: [],
};
