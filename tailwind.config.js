/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#93c5fd',
        'secondary' : '#111827',
      }
    },
  },
  plugins: [],
}

