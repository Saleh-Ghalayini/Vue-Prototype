/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      primary: '#F97316',
      background: '#FFFBF7',
      textPrimary: '#1F2937',
      muted: '#9CA3AF',
      error: '#DC2626',
      success: '#22C55E',
    },
    fontFamily: {
      sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui'],
    },
  },
},
  plugins: [],
}
