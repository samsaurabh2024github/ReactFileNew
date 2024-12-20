/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      animation: {
        'slide-in': 'slideIn 1s ease-out',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Adding Montserrat font
        proxima: ['Proxima Nova', 'sans-serif'],
        avenir: ['Avenir', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

