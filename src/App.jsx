import { useCallback, useState } from 'react'
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

export default function App() {
  // estado do lightbox: { itens: [...fotos do grupo], indice }
  const [lightbox, setLightbox] = useState(null)

  const abrir = useCallback((itens, indice) => setLightbox({ itens, indice }), [])
  const fechar = useCallback(() => setLightbox(null), [])
  const navegar = useCallback(
    (delta) =>
      setLightbox((s) =>
        s ? { ...s, indice: (s.indice + delta + s.itens.length) % s.itens.length } : s
      ),
    []
  )

  return (
    <>
      <Nav />
      <main>
        <Entrada />
        <ProximaSala atual="entrada" />
        <Curadoria />
        <ProximaSala atual="curadoria" />
        <CasaNova onAbrir={abrir} />
        <ProximaSala atual="casa-nova" />
        <Remanso onAbrir={abrir} />
        <ProximaSala atual="remanso" />
        <PilaoArcado onAbrir={abrir} />
        <ProximaSala atual="pilao-arcado" />
        <SentoSe onAbrir={abrir} />
        <ProximaSala atual="sento-se" />
        <Trilha />
        <ProximaSala atual="trilha" />
        <Fechamento />
      </main>
      <Lightbox estado={lightbox} onFechar={fechar} onNavegar={navegar} />
    </>
  )
}
