/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#007bff',
          dark: '#0056b3',
        },
        secondary: {
          DEFAULT: '#6c757d',
          dark: '#545b62',
        },
        background: {
          DEFAULT: '#f8f9fa',
          dark: '#212529',
        }
      },
      spacing: {
        sidebar: '16rem',
      },
    },
  },
  plugins: [],
}

