module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rokSMP: { DEFAULT: "#385197", bleached: "#6074AC" },
        rokSMA: "#268AC1",
        jeruk: "#F33D0F",
        AB: "#A61A17",
        matiLampu: "#17243C",
        white: { koran: "#EAEAEA", hvs: "#F5F5F5", cahaya: "#FAFAFA" },
      },
      screens: {
        425: "425px",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      height: {
        "80vh": "80vh",
      },
      borderRadius: {
        modal: "20px",
      },
      minHeight: {
        54: "14rem",
      },
      maxHeight: {
        "70vh": "70vh",
      },
      backgroundImage: {
        map: "url('./assets/map.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio"), require("ps-scrollbar-tailwind")],
};
