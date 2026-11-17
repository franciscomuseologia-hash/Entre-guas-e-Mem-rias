import { ArrowRight, ExternalLink } from 'lucide-react'
import TrilhaSonora from '../components/TrilhaSonora'
import { trilha } from '../data'

export default function Trilha() {
  const { id, titulo, intro, ecomuseu, mapa, audio } = trilha

  return (
    <section id={id}>
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-20">
        <header className="mb-12">
          <h2 className="font-serif text-4xl font-semibold sm:text-6xl">{titulo}</h2>
          <p className="mt-5 max-w-2xl text-lg text-areia-suave">{intro}</p>
          <TrilhaSonora audio={audio} className="mt-6" />
        </header>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,28rem)_1fr] lg:gap-16">
          <figure className="mx-auto w-full max-w-md lg:mx-0">
            <div className="relative overflow-hidden rounded-lg border border-neutral-800">
              <img src={mapa.imagem} alt={mapa.alt} className="block h-auto w-full" />
              {mapa.pontos.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.sala}`}
                  aria-label={`${p.nome}: entrar na ala${p.pronta ? '' : ' (em preparação)'}`}
                  className="group absolute z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inline-flex h-full w-full animate-ping rounded-full bg-areia/25 motion-reduce:animate-none"
                  />
                  <span
                    aria-hidden="true"
                    className="relative h-7 w-7 rounded-full border-2 border-areia bg-terracota/30 transition-transform group-hover:scale-125 group-focus-visible:scale-125"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-full z-20 mb-2 w-max max-w-[11rem] rounded-md border border-neutral-700 bg-ink/95 px-3 py-2 text-center text-xs text-areia opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                  >
                    <span className="block font-medium">{p.nome}</span>
                    <span className="block text-areia-fosca">{p.pronta ? 'Entrar na ala' : 'Ala em preparação'}</span>
                  </span>
                </a>
              ))}
            </div>
            <figcaption className="mt-3 text-sm text-areia-fosca">{mapa.legenda}</figcaption>
          </figure>

          <div>
            <h3 className="font-serif text-2xl text-terracota-claro sm:text-3xl">{ecomuseu.titulo}</h3>
            <div className="mt-4 max-w-2xl space-y-4 text-lg text-areia-suave">
              {ecomuseu.texto.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>

            <h3 className="mt-12 font-serif text-xl text-areia">Alas do percurso</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {mapa.pontos.map((p) => (
                <li key={p.id}>
                  <a
                    href={`#${p.sala}`}
                    className="flex h-full min-h-[44px] flex-col justify-between rounded-md border border-neutral-700 p-4 transition-colors hover:border-terracota-claro"
                  >
                    <span>
                      <span className="block font-serif text-lg text-areia">{p.nome}</span>
                      <span className="mt-1 block text-sm text-areia-fosca">{p.resumo}</span>
                    </span>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm text-terracota-claro">
                      {p.pronta ? 'Entrar na ala' : 'Ver a ala'}
                      <ArrowRight size={16} aria-hidden="true" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-8">
              <a
                href={mapa.google}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-areia-fosca underline underline-offset-2 hover:text-areia"
              >
                Ver a região no Google Maps
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
