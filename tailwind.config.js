module.exports = {
  content: [
    './src/**/*.{js,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0EB',
        warm: {
          50: '#fdf8f5',
          100: '#f9ede5',
          200: '#f2d9c6',
          300: '#e8bf9e',
          400: '#dc9e72',
          500: '#d0814c',
          600: '#c06a3a',
          700: '#a05431',
          800: '#83452c',
          900: '#6b3a27',
        },
        gold: {
          50: '#fdfaef',
          100: '#faf0d7',
          200: '#f4dfaa',
          300: '#ecc974',
          400: '#e3b04b',
          500: '#d4972e',
          600: '#b87a24',
          700: '#935d20',
          800: '#794b20',
          900: '#653e1d',
        },
        dark: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#0f0f0f',
          950: '#0a0a0a',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};