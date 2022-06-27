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
        greybg: "#f2f2f2",
        "primary-blue": "#2F80ED",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        loading: {
          "0%": { left: "0" },
          "50%": { left: "calc(100% - 6.25rem)" },
          "100%": { left: "0" },
        },
      },
      animation: {
        loading: "loading 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};
