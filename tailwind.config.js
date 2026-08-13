/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  '#f0f7f3', 100: '#d9ede2', 200: '#b4dbc7', 300: '#82c1a3',
          400: '#4da07a', 500: '#2e8b57', 600: '#1a5c38', 700: '#154a2d',
          800: '#113c24', 900: '#0c2e1b',
        },
        gold: {
          50:  '#fff9ed', 100: '#fef1d0', 200: '#fde09a', 300: '#fcc75a',
          400: '#fbaa28', 500: '#f5a623', 600: '#d4891a', 700: '#b06d12',
        },
        cream: {
          50: '#fdfaf4', 100: '#fdf8ee', 200: '#faf0d8', 300: '#f5e4b8',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans:    ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up':    'fadeUp 0.75s cubic-bezier(0.16,1,0.3,1) both',
        'fade-left':  'fadeLeft 0.75s cubic-bezier(0.16,1,0.3,1) both',
        'fade-right': 'fadeRight 0.75s cubic-bezier(0.16,1,0.3,1) both',
        'scale-in':   'scaleIn 0.6s cubic-bezier(0.16,1,0.3,1) both',
        'ticker':     'ticker 30s linear infinite',
        'spin-slow':  'spin 14s linear infinite',
        'pulse-dot':  'pulseDot 1.8s ease-in-out infinite',
        'float':      'float 3s ease-in-out infinite',
        'line-grow':  'lineGrow 0.6s cubic-bezier(0.16,1,0.3,1) both',
      },
      keyframes: {
        fadeUp:    { from: { opacity:'0', transform:'translateY(36px)' }, to: { opacity:'1', transform:'translateY(0)' } },
        fadeLeft:  { from: { opacity:'0', transform:'translateX(36px)' }, to: { opacity:'1', transform:'translateX(0)' } },
        fadeRight: { from: { opacity:'0', transform:'translateX(-36px)' }, to: { opacity:'1', transform:'translateX(0)' } },
        scaleIn:   { from: { opacity:'0', transform:'scale(0.88)' }, to: { opacity:'1', transform:'scale(1)' } },
        ticker:    { from: { transform:'translateX(0)' }, to: { transform:'translateX(-50%)' } },
        pulseDot:  { '0%,100%': { boxShadow:'0 0 0 0 rgba(76,160,122,0.6)' }, '50%': { boxShadow:'0 0 0 8px rgba(76,160,122,0)' } },
        float:     { '0%,100%': { transform:'translateY(0)' }, '50%': { transform:'translateY(-8px)' } },
        lineGrow:  { from: { transform:'scaleX(0)' }, to: { transform:'scaleX(1)' } },
      },
      boxShadow: {
        card:       '0 4px 24px rgba(26,92,56,0.08)',
        'card-lg':  '0 16px 48px rgba(26,92,56,0.14)',
        amber:      '0 8px 28px rgba(245,166,35,0.38)',
        green:      '0 8px 28px rgba(26,92,56,0.28)',
      },
    },
  },
  plugins: [],
};
