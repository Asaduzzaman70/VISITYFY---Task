/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "playfair": "Playfair Display, serif",
        "poppins": "Poppins, serif"
      },
      colors: {
        dark: {
          black: "#000000",
          emperor: "#4f4f4f",
          mine_shaft: "#333333",
        },
        light: {
          white: "#FFFFFF",
          mercury: "#e5e5e5",
          gallery: "#f0f0f0"
        }
      }
    },
  },
  plugins: [],
}

