/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        ink: '#05070d',
        panel: '#0a0f1b',
        line: '#1d293b',
        electric: '#6d7cff',
        violet: '#a855f7',
      },
    },
  },
  plugins: [],
}
