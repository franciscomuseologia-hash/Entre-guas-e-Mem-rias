import AudioPlayer from '../components/AudioPlayer'
import GruposDeVideos from '../components/GruposDeVideos'
import { materialAdicional, referenciasVideosPilao, videosPilao } from '../data'

// Renderiza **negrito** e transforma URLs em links (formato das referências ABNT).
function Referencia({ texto }) {
  return texto.split(/(\*\*[^*]+\*\*|https?:\/\/[^\s)]+?(?=\.\s|\s|$))/g).map((parte, i) => {
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

export default function MaterialAdicional() {
  const { id, titulo, intro, serie, capitulos, ficha, referencias } = materialAdicional

  return (
    <section id={id}>
      <div className="mx-auto max-w-5xl px-6 pb-24 pt-20">
        <header className="mb-14">
          <h2 className="font-serif text-4xl font-semibold sm:text-6xl">{titulo}</h2>
          <p className="mt-5 max-w-2xl text-lg text-areia-suave">{intro}</p>
        </header>

        <div className="mb-16 max-w-3xl">
          <h3 className="font-serif text-2xl text-terracota-claro sm:text-3xl">{serie.titulo}</h3>
          <p className="mt-2 text-areia-fosca">{serie.programa}</p>
          <p className="mt-5 text-lg text-areia-suave">{serie.texto}</p>
        </div>

        <div className="space-y-14">
          {capitulos.map((c) => (
            <article key={c.id} className="flex flex-col gap-6 lg:flex-row lg:gap-10">
              <header className="lg:w-1/4">
                <h4 className="font-serif text-2xl text-areia">{c.titulo}</h4>
                <p className="mt-2 text-sm text-areia-fosca">
                  {c.data} · {c.duracao}
                </p>
              </header>
              <div className="space-y-4 lg:w-3/4">
                <AudioPlayer {...c.audio} />
                <p className="text-lg text-areia-suave">{c.resumo}</p>
                <p className="text-sm text-areia-fosca">
                  <span className="text-areia-suave">Entrevistados: </span>
                  {c.entrevistas}
                </p>
                <p className="text-sm">
                  <a
                    href={c.fonte}
                    target="_blank"
                    rel="noreferrer"
                    className="text-terracota-claro underline underline-offset-2 hover:text-areia"
                  >
                    Ver página de origem na Rádio Câmara
                  </a>
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-14 text-sm text-areia-fosca">Ficha técnica: {ficha}</p>

        <div className="mt-24">
          <h3 className="font-serif text-3xl font-semibold text-areia sm:text-4xl">Pilão Arcado Velho, em vídeo</h3>
          <p className="mb-10 mt-3 max-w-2xl text-lg text-areia-suave">
            Vídeos de terceiros, incorporados do YouTube: o território antes da inundação, o que as águas transformaram e a proposta de tombamento.
          </p>
          <GruposDeVideos dados={videosPilao} />
        </div>

        <aside aria-label="Fontes e referências" className="mt-10 border-t border-neutral-800 pt-8">
          <h3 className="font-serif text-xl text-areia">Fontes e referências</h3>
          <ul className="mt-4 space-y-3 text-sm text-areia-fosca">
            {[...referencias, ...referenciasVideosPilao].map((r) => (
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
