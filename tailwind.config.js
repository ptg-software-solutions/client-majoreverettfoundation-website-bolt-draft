/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50:  '#f0f3f8',
          100: '#d9e2ef',
          200: '#b3c5df',
          300: '#7fa0c8',
          400: '#4f7aaf',
          500: '#2d5d96',
          600: '#1e4278',
          700: '#152f5c',
          800: '#0e2044',
          900: '#091530',
          950: '#050d1e',
        },
        gold: {
          50:  '#fdf8ec',
          100: '#faefc9',
          200: '#f5dc8f',
          300: '#efc34e',
          400: '#e8ab25',
          500: '#c9900f',
          600: '#a0700a',
          700: '#7a520b',
          800: '#623f10',
          900: '#523411',
          950: '#2f1c05',
        },
        steel: {
          50:  '#f6f7f9',
          100: '#eceef2',
          200: '#d5dae3',
          300: '#b1baca',
          400: '#8795aa',
          500: '#677790',
          600: '#536076',
          700: '#444f61',
          800: '#3b4452',
          900: '#343b47',
          950: '#22262f',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #091530 0%, #152f5c 60%, #1e4278 100%)',
      },
    },
  },
  plugins: [],
};
