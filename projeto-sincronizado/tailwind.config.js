const cor = (v) => `rgb(var(${v}) / <alpha-value>)`

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  // :hover só onde existe mouse; no toque não "gruda" depois do clique
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      colors: {
        // Barro (sertão), água (São Francisco) e concreto (barragem). Os valores vivem em index.css.
        ink: cor('--fundo'),
        terra: cor('--terra'),
        maré: '#0f1b25',
        // o acento muda de sala para sala (data-sala no index.css)
        terracota: { DEFAULT: cor('--acento'), claro: cor('--acento-claro') },
        sf: { DEFAULT: cor('--sf'), claro: cor('--sf-claro') },
        areia: { DEFAULT: cor('--areia'), suave: cor('--areia-suave'), fosca: cor('--areia-fosca') },
        concreto: { DEFAULT: cor('--concreto'), claro: cor('--concreto-claro') },
        rio: { verde: cor('--rio-verde'), azul: cor('--rio-azul') },
        ocre: cor('--ocre'),
        telha: cor('--telha'),
        // cinzas quentes (concreto com poeira de sertão) no lugar do cinza frio padrão
        neutral: {
          50: '#F6F3EC',
          100: '#E9E5DA',
          200: '#D3CEC1',
          300: '#B7B1A2',
          400: '#9A9485',
          500: '#7A7466',
          600: '#5E5A4F',
          700: '#47443B',
          800: '#36322B',
          900: '#25211B',
          950: '#171310',
        },
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', '"Arial Narrow"', 'Impact', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Newsreader', 'Georgia', 'serif'],
      },
      transitionTimingFunction: {
        saida: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
}
