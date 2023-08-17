/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#082E4E",
        dark: "#0E273C",
        info: "#D4EAE9",
        highlight: "#EAB41E",
        muted: "#A0A7A5",
        light: "#FFFFFF"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
