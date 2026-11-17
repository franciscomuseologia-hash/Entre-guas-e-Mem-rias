import { useCallback, useEffect, useRef, useState } from 'react'
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
import Fechamento from './sections/Fechamento'
import { circuito } from './data'
import { useRota } from './useRota'

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

  // Ao trocar de sala: volta ao topo, fecha o lightbox, atualiza o título e move o foco.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    setLightbox(null)
    const rotulo = circuito.find((c) => c.id === sala)?.rotulo
    document.title = `${rotulo} · Entre Águas e Memórias`
    principal.current?.focus({ preventScroll: true })
  }, [sala])

  const salas = {
    entrada: <Entrada />,
    curadoria: <Curadoria />,
    'casa-nova': <CasaNova onAbrir={abrir} aba={aba} />,
    remanso: <Remanso onAbrir={abrir} />,
    'pilao-arcado': <PilaoArcado onAbrir={abrir} />,
    'sento-se': <SentoSe onAbrir={abrir} />,
    trilha: <Trilha />,
    fechamento: <Fechamento />,
  }

  return (
    <>
      <Nav atual={sala} />
      <main ref={principal} tabIndex={-1} className="outline-none">
        {salas[sala]}
        {sala !== 'fechamento' && <ProximaSala atual={sala} />}
      </main>
      <Lightbox estado={lightbox} onFechar={fechar} onNavegar={navegar} />
    </>
  )
}
