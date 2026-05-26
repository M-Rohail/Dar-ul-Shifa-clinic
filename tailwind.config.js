/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#f0f4ff',
          100: '#dce6ff',
          200: '#b9ccff',
          300: '#849fff',
          400: '#4d6dff',
          500: '#2541f5',
          600: '#1323e8',
          700: '#0f1ab5',
          800: '#111a8e',
          900: '#121a6e',
          950: '#080f3a',
        },
        gold: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        arabic:  ['Amiri', 'serif'],
      },
      backgroundImage: {
        /* Used as className="bg-hero-grid" etc — defined in @layer utilities instead */
      },
      animation: {
        'float':      'float 7s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'spin-slow':  'spin 12s linear infinite',
        'fade-up':    'fadeUp 0.7s ease-out',
      },
      keyframes: {
        float:     { '0%,100%':{ transform:'translateY(0)' }, '50%':{ transform:'translateY(-18px)' } },
        pulseSoft: { '0%,100%':{ opacity:'0.6' }, '50%':{ opacity:'1' } },
        fadeUp:    { '0%':{ opacity:'0', transform:'translateY(28px)' }, '100%':{ opacity:'1', transform:'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
