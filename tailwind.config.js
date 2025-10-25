/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0f172a",      // slate-900-ish
        card: "#111827"     // gray-900-ish
      }
    }
  },
  plugins: []
};
