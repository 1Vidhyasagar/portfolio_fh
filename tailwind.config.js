/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./downloads/bg.jpg')",
      },
    },
    fontFamily: {
      sign: ["Great Vibes"],
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
