export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      thin: ["monospace"],
    },
    extend: {
      colors: {
        laceWhite: "#F5F5EF",
        classicBlue: "#013A81",
      },
    },
  },
  plugins: [require("tailwind-animatecss")],
};
