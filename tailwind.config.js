/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e293b", // Slate 800
        secondary: "#475569", // Slate 600
        accent: "#3b82f6", // Stronger blue for contrast against darker background
        "accent-dark": "#2563eb",
        background: "#e0f2fe", // Distinct Pastel Blue (Sky 100)
        surface: "#ffffff",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        signature: ['"Brush Script MT"', '"Kaushan Script"', 'cursive'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
    },
  },
  plugins: [],
}
