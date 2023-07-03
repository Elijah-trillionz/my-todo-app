/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0c161f',
        secondary: '#f4f4f4',
      },
    },
  },
  plugins: [],
};
