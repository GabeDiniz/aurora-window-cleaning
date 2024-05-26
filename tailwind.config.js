export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      subtitle: "Helvetica, Arial, sans-serif"
    },
    extend: {
      colors: {
        laceWhite: "#F5F5EF",
        offLaceWhite: "#fcfcfa",
        classicBlue: "#013A81",
      },
    },
  },
  plugins: [require("tailwind-animatecss")],
};
