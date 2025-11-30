/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        // Rose
        accent: {
          50: '#fef1f7',
          100: '#fee5f0',
          200: '#ffcce3',
          300: '#ffa3ce',
          400: '#ff6bb0',
          500: '#f9408f',
          600: '#e91e78',
          700: '#ca1262',
          800: '#a71353',
          900: '#8b1649',
        },
        // Lavander
        lavender: {
          50: '#faf7ff',
          100: '#f5f0ff',
          200: '#ebe5ff',
          300: '#ddd4ff',
          400: '#c9b8ff',
          500: '#b39dff',
          600: '#9b7fff',
          700: '#8461ff',
          800: '#6d43ff',
          900: '#5625ff',
        },
        // blue
        sky: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // green
        mint: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        // yellow
        honey: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        // orange
        coral: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      backgroundImage: {
        'gradient-main':
          'linear-gradient(180deg, #fef1f7 0%, #f3e8ff 50%, #e0f2fe 100%)',
        'gradient-pink-purple':
          'linear-gradient(135deg, #fef1f7 0%, #e9d5ff 100%)',
        'gradient-purple-blue':
          'linear-gradient(135deg, #e9d5ff 0%, #bae6fd 100%)',
        'gradient-card':
          'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
        'gradient-button': 'linear-gradient(135deg, #f9408f 0%, #9333ea 100%)',
        'gradient-button-hover':
          'linear-gradient(135deg, #e91e78 0%, #7e22ce 100%)',
        'gradient-orb-pink':
          'linear-gradient(135deg, #ffa3ce 0%, #c084fc 100%)',
        'gradient-orb-purple':
          'linear-gradient(135deg, #d8b4fe 0%, #bae6fd 100%)',
        'gradient-tech': 'linear-gradient(135deg, #4ade80 0%, #0ea5e9 100%)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(217, 70, 239, 0.08)',
        card: '0 10px 40px rgba(217, 70, 239, 0.12)',
        'card-hover': '0 20px 60px rgba(217, 70, 239, 0.2)',
        button: '0 4px 20px rgba(249, 64, 143, 0.3)',
        glow: '0 0 30px rgba(217, 70, 239, 0.4)',
        'glow-pink': '0 0 30px rgba(249, 64, 143, 0.5)',
        'glow-green': '0 0 30px rgba(34, 197, 94, 0.5)',
        'inner-light': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.5)',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
