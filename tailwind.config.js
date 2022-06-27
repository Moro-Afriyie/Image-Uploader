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
        "dark-grey": "#F6F8FB",
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
        loading: "loading 2s linear infinite",
      },
      backgroundImage: {
        dashed:
          "url('data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e')",
      },
    },
  },
  plugins: [],
};
