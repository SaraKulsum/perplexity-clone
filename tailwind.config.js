/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--pale-yellow-200)",
        "gray-dark": "var(--gray-text)",
        "theme-color": "var(--theme-color)",
        "theme-dark" : "var(--theme-color-dark)",
        "highlight" : "var(--highlight-gray)",
        "pale-white" : "var(--white-color)",
        "border-color" : "var(--border-color)", 
      },
    },
  },
  plugins: [],
}

