/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ckdGreen': '#2E9891',
        'ckdGreenDarker' : '#06746B'
      },
    },
  },
  plugins: [],
}

