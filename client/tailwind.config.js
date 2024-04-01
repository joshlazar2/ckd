/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ckdGreen': '#058D82',
        'ckdGreenDarker' : '#06746B'
      },
    },
  },
  plugins: [],
}

