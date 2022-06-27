/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        small: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        primary: "#fafafb",
      },
    },
  },
  plugins: [],
};
