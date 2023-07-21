/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        primary: "#FABE4C",
        secondary: "#3E3E3E",
        clifford: "#FEF3C7",
      },
      backgroundColor: {
        "linear-gradient": "linear-gradient(180deg, #A4BC46 0%, #85A019 100%)",
      },
    },
  },
  plugins: [],
};
