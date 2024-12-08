/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        vibrantOrange: '#FF5000',
        deepTeal: '#004F59',
        mutedBlue: '#0074A2',
        warmWhite: '#FFF6F1',
        lightGray: '#E5E5E5',
        charcoalGrey: '#2C2C2C',
        goldenYellow: '#FFA834',
        coralPink: '#FF745A',
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'], // Add the Quicksand font
      },
    },
  },
  important: true,
  plugins: [],
};
