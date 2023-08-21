/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'night': '#11121E'
      },
      fontFamily: {
        'display': ['Inter'],
        'body': ['Inter'],
      }
    },
  },
  plugins: [],
}

