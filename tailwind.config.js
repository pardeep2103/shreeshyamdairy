/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dairy: {
          blue: '#2563eb',
          light: '#eff6ff',
          green: '#16a34a'
        }
      }
    },
  },
  plugins: [],
}
