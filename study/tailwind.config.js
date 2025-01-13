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
      keyframes: {
        // https://pagedone.io/docs/animation
        'fade-in-down': {
          '0%': {
            opacity: 0,
            transform: 'translate3d(0, -25%, 0)',
          },
          '100%': {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
          },
        },
        'fade-out-up': {
          '0%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
            transform: 'translate3d(0, -25%, 0)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        'fade-out': {
          '0%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: 0,
            transform: 'translate3d(100%, 0, 0)',
          },
          '100%': {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
          },
        },
        'fade-out-right': {
          '0%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
            transform: 'translate3d(100%, 0, 0)',
          },
        },
      },
      animation: {
        fadeindown: 'fade-in-down 0.5s ease-in 0s 1',
        fadeoutup: 'fade-out-up 0.5s ease-in-out 0s 1',
        fadein: 'fade-in 0.5s ease-in 0s 1',
        fadeout: 'fade-out 0.5s ease-in-out 0s 1',
        fadeinright: 'fade-in-right 0.5s ease-in-out 0.0s 1',
        fadeoutright: 'fade-out-right 0.5s ease-in-out 0.0s 1',
      },
    },
  },
  important: true,
  plugins: [],
};
