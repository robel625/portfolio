module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        preahvihear: ["Preahvihear", "sans-serif"],
        jakartaSans: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        primary: "#1A0B2E",
        primaryLight: "#7127BA",
        primaryLight2: "#A362FF",
        primaryDark: "#11071F",
      },
      container: {
        center: true,
        padding: "0.75rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [],
};
