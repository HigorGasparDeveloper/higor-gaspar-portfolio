/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arcade: ['"Press Start 2P"', 'cursive'],
        pixel: ['"VT323"', 'monospace'],
      },
      colors: {
        game: {
          bg: '#0f0f1b',
          panel: '#1a1a2e',
          border: '#4a4e69',
          text: '#f2e9e4',
          accent: '#e63946',
          primary: '#457b9d',
          secondary: '#1d3557',
          success: '#2a9d8f'
        }
      }
    },
  },
  plugins: [],
}
