/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'sans': ['"Times New Roman"', 'Times', 'serif'],
      },
      screens: {
        'xs': '475px',
      },
      animation: {
        'shape-rotate': 'shapeRotate 8s ease-in-out infinite',
        'shape-pulse': 'shapePulse 3s ease-in-out infinite',
        'shape-float': 'shapeFloat 6s ease-in-out infinite',
      },
      keyframes: {
        shapeRotate: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        shapePulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.7' },
          '50%': { transform: 'scale(1.2)', opacity: '1' },
        },
        shapeFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(120deg)' },
          '66%': { transform: 'translateY(5px) rotate(240deg)' },
        },
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
