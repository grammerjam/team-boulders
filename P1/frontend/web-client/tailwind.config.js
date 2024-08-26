/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'red': '#FC4747',
      'black': '#10141E',
      'gray': '#5A698F',
      'dark-blue': '#161D2F',
      'white': '#FFFFFF',
    },
    fontSize: {
      'sm': ['1.08rem', {
        lineHeight: '1.3rem',
        fontWeight: '400',
      }],
      'base': ['1.25rem', {
        lineHeight: '1.57rem',
        fontWeight: '400',
      }],
      'lg': ['1.5rem', {
        lineHeight: '1.89rem',
        fontWeight: '400',
      }],
      'xl': ['2rem', {
        lineHeight: '2.52rem',
        fontWeight: '400',
      }],
    },
    extend: {
      fontSize: {
        '2xl': ['2.6rem', {
          lineHeight: '3.36rem',
          letterSpacing: '-0.04em',
          fontWeight: '400',
        }],
      },
    },
  },
  plugins: [],
};
