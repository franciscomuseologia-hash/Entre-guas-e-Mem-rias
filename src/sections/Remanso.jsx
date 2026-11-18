import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import NucleoCabecalho from '../components/NucleoCabecalho'
import { remanso } from '../data'

export default function Remanso({ onAbrir }) {
  const { id, titulo, intro, audio, fotos, relatos } = remanso
  const [atual, setAtual] = useState(0)
  const ir = (n) => setAtual((n + fotos.length) % fotos.length)
  const foto = fotos[atual]

  return (
    <section id={id} className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <NucleoCabecalho titulo={titulo} intro={intro} audio={audio} />

        <div role="group" aria-roledescription="carrossel" aria-label="Fotografias de Remanso">
          <button
            type="button"
            onClick={() => onAbrir(fotos, atual)}
            aria-label={`Ampliar: ${foto.titulo}`}
            className="relative block w-full overflow-hidden rounded-xl text-left"
          >
            <div
              className="flex min-h-[420px] items-end p-6 sm:min-h-[520px] sm:p-12"
              style={{ background: foto.src ? undefined : foto.fundo }}
            >
              {foto.src && <img src={foto.src} alt={foto.titulo} className="absolute inset-0 h-full w-full object-cover" />}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="relative max-w-xl" aria-live="polite">
                <p className="text-sm text-areia-suave">
                  {atual + 1} de {fotos.length}
                </p>
                <p className="mt-2 font-serif text-3xl leading-tight sm:text-5xl">{foto.titulo}</p>
                <p className="mt-3 text-lg text-areia">{foto.legenda}</p>
              </div>
            </div>
          </button>

          <div className="mt-5 flex items-center justify-between">
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => ir(atual - 1)}
                aria-label="Foto anterior"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-sf-claro/40 hover:bg-sf/40"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => ir(atual + 1)}
                aria-label="Próxima foto"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-sf-claro/40 hover:bg-sf/40"
              >
                <ChevronRight size={22} aria-hidden="true" />
              </button>
            </div>
            <div className="flex">
              {fotos.map((f, i) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => ir(i)}
                  aria-label={`Ir para a foto ${i + 1}`}
                  aria-current={i === atual ? 'true' : undefined}
                  className="flex h-11 w-11 items-center justify-center"
                >
                  <span
                    className={`block h-2 rounded-full transition-all ${
                      i === atual ? 'w-8 bg-terracota-claro' : 'w-3 bg-sf-claro/50'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <h3 className="mb-6 mt-20 font-serif text-3xl text-terracota-claro">Relatos orais</h3>
        <div className="grid gap-5 md:grid-cols-3">
          {relatos.map((r) => (
            <figure key={r.texto} className="rounded-lg border border-sf/60 bg-sf/20 p-6">
              <blockquote className="mb-4 font-serif text-xl italic text-areia-suave">{r.texto}</blockquote>
              <figcaption className="text-sm text-areia-fosca">{r.autor}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
