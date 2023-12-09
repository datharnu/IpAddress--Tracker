/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': { 'min': '310px', 'max': '764px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }
      'md': { 'min': '768px', 'max': '1023px' },
      'lg': { 'min': '1024px', 'max': '2560px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

    },
    extend: {
      backgroundImage: {
        bgImgB: 'url(./assets/images/pattern-bg-desktop.png)',
        bgImg: 'url(./assets/images/pattern-bg-mobile.png)'
      },
      colors: {
        vDarkGrey: "hsl(0, 0%, 17%)",
        darkGrey: "hsl(0, 0%, 59%)"
      }
    },
  },
  plugins: [],
}

