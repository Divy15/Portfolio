/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Creates the utility class: font-serif or font-playfair
        playfair: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}