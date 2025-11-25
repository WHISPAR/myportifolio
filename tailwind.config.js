// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // This enables class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'bounce': 'bounce 1s infinite',
      },
      backdropBlur: {
        'xs': '2px',
      },
      colors: {
        // Custom colors for dark mode
        dark: {
          100: '#1a1a1a',
          200: '#2d2d2d',
          300: '#404040',
          400: '#525252',
          500: '#666666',
          600: '#7a7a7a',
          700: '#8f8f8f',
          800: '#a3a3a3',
          900: '#b8b8b8',
        }
      }
    },
  },
  plugins: [],
}