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
        avatar: "url('/images/avatar.webp')",
        "banner-day-sm":"url('/images/banner-day-sm.webp')",
        "banner-night-sm":"url('/images/banner-night-sm.webp')",
        "banner-day-md":"url('/images/banner-day-md.webp')",
        "banner-night-md":"url('/images/banner-night-md.webp')",
        "banner-day-lg":"url('/images/banner-day-lg.webp')",
        "banner-night-lg":"url('/images/banner-night-lg.webp')",
      }
    },
  },
  plugins: [],
}

