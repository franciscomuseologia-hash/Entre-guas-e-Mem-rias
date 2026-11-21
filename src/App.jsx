import { useCallback, useEffect, useRef, useState } from 'react'
import Acessibilidade from './components/Acessibilidade'
import ErroDeSala from './components/ErroDeSala'
import Nav from './components/Nav'
import Lightbox from './components/Lightbox'
import ProximaSala from './components/ProximaSala'
import Entrada from './sections/Entrada'
import Curadoria from './sections/Curadoria'
import CasaNova from './sections/CasaNova'
import Remanso from './sections/Remanso'
import PilaoArcado from './sections/PilaoArcado'
import SentoSe from './sections/SentoSe'
import Trilha from './sections/Trilha'
import MaterialAdicional from './sections/MaterialAdicional'
import Fechamento from './sections/Fechamento'
import { circuito } from './data'
import { useRota } from './useRota'
import { SomProvider } from './som'

// Camadas de fundo: curvas de nível, chão (barro ou concreto), brilho e grão.
// As texturas de cada sala ficam no index.css, escolhidas por data-sala.
function Fundo() {
  return (
    <div className="fundo" aria-hidden="true">
      <div className="fundo__a" />
      <div className="fundo__b" />
      <div className="fundo__brilho" />
      <div className="fundo__grao" />
    </div>
  )
}

export default function App() {
  // estado do lightbox: { itens: [...fotos do grupo], indice }
  const [lightbox, setLightbox] = useState(null)
  const { sala, aba } = useRota()
  const principal = useRef(null)

  const abrir = useCallback((itens, indice) => setLightbox({ itens, indice }), [])
  const fechar = useCallback(() => setLightbox(null), [])
  const navegar = useCallback(
    (delta) =>
      setLightbox((s) =>
        s ? { ...s, indice: (s.indice + delta + s.itens.length) % s.itens.length } : s
      ),
    []
  )

  // Ao trocar de sala: fecha o lightbox, atualiza o título e move o foco.
  useEffect(() => {
    setLightbox(null)
    const rotulo = circuito.find((c) => c.id === sala)?.rotulo
    document.title = `${rotulo} · Entre Águas e Memórias`
    principal.current?.focus({ preventScroll: true })
  }, [sala])

  const salas = {
    entrada: <Entrada />,
    curadoria: <Curadoria />,
    'casa-nova': <CasaNova onAbrir={abrir} aba={aba} />,
    remanso: <Remanso onAbrir={abrir} aba={aba} />,
    'pilao-arcado': <PilaoArcado onAbrir={abrir} aba={aba} />,
    'sento-se': <SentoSe onAbrir={abrir} aba={aba} />,
    fechamento: <Fechamento />,
    trilha: <Trilha />,
    'material-adicional': <MaterialAdicional />,
  }

  return (
    <SomProvider sala={sala}>
      <div className="app relative min-h-[100svh]" data-sala={sala}>
        <Fundo />
        <a
          href="#conteudo"
          className="fixed left-3 top-3 z-[70] -translate-y-24 bg-areia px-4 py-3 font-display text-lg font-semibold text-ink transition-transform focus:translate-y-0"
          onClick={(e) => {
            e.preventDefault()
            principal.current?.focus()
          }}
        >
          Ir para o conteúdo
        </a>
        <p className="sr-only" role="status" aria-live="polite">
          {`Sala: ${circuito.find((c) => c.id === sala)?.rotulo}`}
        </p>
        <Acessibilidade />
        <div className="relative z-10">
          <Nav atual={sala} />
          <main id="conteudo" ref={principal} tabIndex={-1} className="outline-none">
            <ErroDeSala key={sala}>{salas[sala]}</ErroDeSala>
            <ProximaSala atual={sala} />
          </main>
        </div>
        <Lightbox estado={lightbox} onFechar={fechar} onNavegar={navegar} />
      </div>
    </SomProvider>
  )
}
