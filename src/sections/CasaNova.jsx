import Foto from '../components/Foto'
import NucleoCabecalho from '../components/NucleoCabecalho'
import { casaNova } from '../data'

// Renderiza **negrito** e transforma URLs em links (formato das referências ABNT).
function Referencia({ texto }) {
  return texto.split(/(\*\*[^*]+\*\*|https?:\/\/[^\s)]+)/g).map((parte, i) => {
    if (parte.startsWith('**')) return <strong key={i}>{parte.slice(2, -2)}</strong>
    if (parte.startsWith('http'))
      return (
        <a key={i} href={parte} target="_blank" rel="noreferrer" className="break-all underline hover:text-terracota-claro">
          {parte}
        </a>
      )
    return parte
  })
}

export default function CasaNova({ onAbrir }) {
  const { id, titulo, intro, audio, abertura, mapa, grupos, morador, fotos, referencias } = casaNova
  let deslocamento = 0

  return (
    <section id={id} className="scroll-mt-16 border-b border-neutral-800">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <NucleoCabecalho titulo={titulo} intro={intro} audio={audio} />

        <div className="mb-20 max-w-3xl space-y-5 text-lg text-areia-suave">
          {abertura.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="mb-20">
          <h3 className="font-serif text-2xl text-terracota-claro sm:text-3xl">{mapa.titulo}</h3>
          <p className="mt-3 max-w-2xl text-areia-suave">{mapa.texto}</p>
          <Foto
            foto={mapa.foto}
            mostrarTitulo={false}
            onAbrir={() => onAbrir([mapa.foto], 0)}
            className="mt-8"
          />
          <p className="mt-3 text-sm text-areia-fosca">{mapa.foto.legenda}</p>
        </div>

        {grupos.map((g) => {
          const inicio = deslocamento
          deslocamento += g.fotos.length
          return (
            <div key={g.id} className="mb-20">
              <h3 className="font-serif text-2xl text-terracota-claro sm:text-3xl">{g.titulo}</h3>
              <p className="mt-3 max-w-2xl text-areia-suave">{g.texto}</p>
              <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
                {g.fotos.map((foto, i) => (
                  <Foto
                    key={foto.id}
                    foto={foto}
                    onAbrir={() => onAbrir(fotos, inicio + i)}
                    className="mb-4 break-inside-avoid"
                  />
                ))}
              </div>
            </div>
          )
        })}

        <div className="mb-20 rounded-lg border border-neutral-800 bg-neutral-900/40 p-6 sm:p-10">
          <h3 className="font-serif text-2xl text-terracota-claro sm:text-3xl">{morador.titulo}</h3>
          <p className="mt-2 text-areia-fosca">{morador.subtitulo}</p>
          <div className="mt-6 max-w-3xl space-y-4 text-areia-suave">
            {morador.texto.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-8 columns-2 gap-4 lg:columns-4">
            {morador.fotos.map((foto, i) => (
              <Foto
                key={foto.id}
                foto={foto}
                onAbrir={() => onAbrir(morador.fotos, i)}
                className="mb-4 break-inside-avoid"
              />
            ))}
          </div>
        </div>

        <aside aria-label="Fontes e referências" className="mt-8 border-t border-neutral-800 pt-8">
          <h3 className="font-serif text-xl text-areia">Fontes e referências</h3>
          <ul className="mt-4 space-y-3 text-sm text-areia-fosca">
            {referencias.map((r) => (
              <li key={r.texto}>
                <Referencia texto={r.texto} />
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
