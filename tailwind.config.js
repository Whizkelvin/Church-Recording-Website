/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
     screens: {
      'sm': '640px',
     // => @media (min-width: 640px) { ... }

     'lg': '1024px',
     // => @media (min-width: 1024px) { ... }

     'desktop': '1280px',
     // => @media (min-width: 1280px) { ... }
   },
  },
  plugins: [],
}