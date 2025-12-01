/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#064064",
        secondary: "#FFC1BE",
        secondary10: "#FFACA8",
        secondary20: "#FF8C86",
        background: "#FAF6FF"
      }
    },
  },
  plugins: [],
}

