/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'night-background': '#11121E',
        'night-text': '#C6ACA8',
        "night-heading-text-green": '#68EA5D'
      },
      fontFamily: {
        'display': ['Inter'],
        'body': ['Inter'],
      }
    },
  },
  plugins: [],
}

