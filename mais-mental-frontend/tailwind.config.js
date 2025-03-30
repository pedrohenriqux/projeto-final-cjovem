/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#006986",
        secondary: "#29bce4",
        third: "#f7ba34",
        fourth: "#b5e2ea",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl" : "6rem",
        }
      },
      fontFamily: {
        teko: ["Teko", "sans-serif"]
      }
    },
  },
  plugins: [],
}

