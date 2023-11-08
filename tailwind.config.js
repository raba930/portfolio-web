/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        "night-background": "#11121E",
        "night-text": "#C6ACA8",
        "night-heading-text-green": "#68EA5D"
      },
      fontFamily: {
        display: ["Inter"],
        body: ["Inter"],
      },
      backgroundImage: {
        avatar: "url('/images/avatar.jpeg')",
        "banner-day-sm":"url('/images/banner-day-sm.jpg')",
        "banner-night-sm":"url('/images/banner-night-sm.jpg')",
        "banner-day-md":"url('/images/banner-day-md.jpg')",
        "banner-night-md":"url('/images/banner-night-md.jpg')",
        "banner-day-lg":"url('/images/banner-day-lg.jpg')",
        "banner-night-lg":"url('/images/banner-night-lg.jpg')",
      }
    },
  },
  plugins: [],
}

