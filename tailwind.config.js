/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#AEEA00', // Pistachio base, para fondos principales y botones
          light: '#E9FCD4',   // Para fondos suaves y cards
          dark: '#689F38',    // Para texto destacado y bordes
        },
        secondary: {
          DEFAULT: '#B2FF59', // Pistachio pastel, para acentos y gradientes
          dark: '#8BC34A',    // Para hover y detalles secundarios
        },
        accent: {
          DEFAULT: '#FFD700', // Dorado, para partículas mágicas y detalles
          cream: '#FFF8DC',   // Dorado claro
        },
        neutral: {
          light: '#f5f5f5',
          dark: '#1a1a1a',
        },
        text: {
          DEFAULT: '#33691E', // Verde pistacho profundo para textos principales
          light: '#689F38',   // Para textos secundarios
        },
      },
      fontFamily: {
        sans: ['Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
