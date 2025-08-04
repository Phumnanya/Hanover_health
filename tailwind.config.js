import { color } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        verdana: ['Verdana', 'Geneva', 'sans-serif'],
      },
      colors: {
          primary: "#FF347D", //vivid pink
          accent: "#39BEE5", //Azure
        },
      backgroundImage: {
        'hero-pattern': "url('/img/hero1.jpg')",
        'disease-photo': "url('/img/hero2.jpg')"
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    //require('@tailwindcss/forms'),
    // ...
  ],
}
