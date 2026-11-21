import { useEffect } from 'react'

// Widgets de acessibilidade de terceiros. Eles COMPLEMENTAM a acessibilidade do próprio site
// (texto alternativo, teclado, contraste, legendas e transcrições); não a substituem.
//
// Configuração (arquivo .env na raiz do projeto, veja .env.example):
//   VITE_AIOA_TOKEN       licença do All in One Accessibility (vazio = versão gratuita)
//   VITE_HANDTALK_TOKEN   token da Hand Talk para este domínio (sem ele, a Hand Talk não carrega)

const AIOA_SRC = 'https://www.skynettechnologies.com/accessibility/js/all-in-one-accessibility-js-widget-minify.js'
const HANDTALK_SRC = 'https://plugin.handtalk.me/web/latest/handtalk.min.js'

export default function Acessibilidade() {
  useEffect(() => {
    // Carrega depois que a página já está pronta, para não atrasar a abertura da exposição.
    const espera = setTimeout(() => {
      if (!document.getElementById('aioa-adawidget')) {
        const token = import.meta.env.VITE_AIOA_TOKEN ?? ''
        const script = document.createElement('script')
        script.id = 'aioa-adawidget'
        script.async = true
        // O formato da URL segue a instalação indicada pelo fabricante.
        script.src = `${AIOA_SRC}?colorcode=#C46A3C&token=${token}&position=bottom_left`
        document.head.appendChild(script)
      }

      const tokenHandTalk = import.meta.env.VITE_HANDTALK_TOKEN
      if (tokenHandTalk && !document.getElementById('handtalk-plugin')) {
        const script = document.createElement('script')
        script.id = 'handtalk-plugin'
        script.async = true
        script.src = HANDTALK_SRC
        script.onload = () => {
          try {
            // eslint-disable-next-line no-new
            new window.HT({ token: tokenHandTalk })
          } catch {
            /* o widget não iniciou: o site segue funcionando */
          }
        }
        document.head.appendChild(script)
      }
    }, 2500)
    return () => clearTimeout(espera)
  }, [])

  return null
}
