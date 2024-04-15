export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      thin: ["monospace"],
    },
    extend: {
      colors: {
        classicBlue: "#013A81",
      },
    },
  },
  plugins: [require("tailwind-animatecss")],
};
