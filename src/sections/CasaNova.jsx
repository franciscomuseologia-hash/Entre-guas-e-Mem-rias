import Foto from '../components/Foto'
import NucleoCabecalho from '../components/NucleoCabecalho'
import { casaNova } from '../data'

// Grade masonry com colunas CSS: as fotos fluem por colunas com alturas diferentes.
export default function CasaNova({ onAbrir }) {
  const { id, titulo, intro, audio, fotos } = casaNova
  return (
    <section id={id} className="scroll-mt-16 border-b border-neutral-800">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <NucleoCabecalho titulo={titulo} intro={intro} audio={audio} />
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {fotos.map((foto, i) => (
            <Foto
              key={foto.id}
              foto={foto}
              onAbrir={() => onAbrir(fotos, i)}
              className="mb-4 break-inside-avoid"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
