/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", "serif"],
        "inter": ["Inter", "serif"],
      },
      colors: {
        "primary": "#ffffff",
        "primary1": "#363738",
        "secondary": "#f5f5f5",
        "secondary1": "#fefaf1",
        "secondary2": "#db4444",
        "text": "#fafafa",
        "text1": "#7d8184",
        'text2': "#000000",
        'button': "#000000",
        'button1': "#00ff66",
        'button2': "#db4444",
        'buttonHover': "#e07575",
        'buttonHover1': "#a0bce0",

      }
    },
  },
  plugins: [],
}
