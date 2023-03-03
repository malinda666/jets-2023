/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/views/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        dark: '#14213d',
        third: '#fca311',
        light: '#e5e5e5',
        white: '#ffffff',
        accent: '#1bb0ce',
      },
      fontFamily: {
        title: ['AG', 'sans-serif'],
        title2: ['Bellina', 'serif'],
        body: ['Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
