/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#121212',
        maré: '#0f1b25',
        terracota: { DEFAULT: '#C85A32', claro: '#E07A52' },
        sf: { DEFAULT: '#1B4965', claro: '#7FB3D5' },
        areia: { DEFAULT: '#E8E2D9', suave: '#C9C3BA', fosca: '#A8A39B' },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
