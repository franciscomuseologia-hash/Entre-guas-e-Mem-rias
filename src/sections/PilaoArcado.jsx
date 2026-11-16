import Foto from '../components/Foto'
import NucleoCabecalho from '../components/NucleoCabecalho'
import { pilaoArcado } from '../data'

export default function PilaoArcado({ onAbrir }) {
  const { id, titulo, intro, audio, fotos } = pilaoArcado
  return (
    <section id={id} className="scroll-mt-16 border-b border-neutral-800">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <NucleoCabecalho titulo={titulo} intro={intro} audio={audio} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fotos.map((foto, i) => (
            <Foto key={foto.id} foto={foto} altura={280} onAbrir={() => onAbrir(fotos, i)} />
          ))}
        </div>
      </div>
    </section>
  )
}
