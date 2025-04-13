// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF7E00', // Vibrant orange
          dark: '#E06D00',
          light: '#FF9933'
        },
        secondary: {
          DEFAULT: '#2E8B57', // Green (Sea Green)
          dark: '#1D6E45',
          light: '#3CAB6E'
        },
        luxury: {
          DEFAULT: '#272727',
          dark: '#1a1a1a',
          light: '#3a3a3a',
          accent: '#f5f5f5',
          gold: '#FF9933' // Changed to orange-gold to match theme
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/src/assets/images/hero-bg.jpg')"
      },
      boxShadow: {
        'elegant': '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
        'elegant-lg': '0 20px 40px -15px rgba(0, 0, 0, 0.15)'
      }
    },
  },
  plugins: [],
}