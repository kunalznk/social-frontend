/** @type {import('tailwindcss').Config} */
// color F05161 4D4D4F
// 24 32 56
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'ig-blue': '#405DE6',
        'ig-gradient-start': '#833AB4',
        'ig-gradient-end': '#FD1D1D',
        'ig-purple': '#C13584',
        'ig-yellow': '#FBBF24',
        'ig-dark-blue': '#003569',
        'ig-light-blue': '#8EA6CB',
        'ig-gray': '#E4E4E4',
        'ig-light-gray': '#F4F5F7',
        'ig-white': '#FFFFFF',
      }
    },
  },
  plugins: [],
};
