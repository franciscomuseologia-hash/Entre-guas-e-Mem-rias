import { Suspense, lazy, useState } from 'react'
import { ArrowRight, ExternalLink } from 'lucide-react'
import TrilhaSonora from '../components/TrilhaSonora'
import { ListaDeReferencias } from '../components/partesDeSala'
import { trilha } from '../data'

// O mapa real usa Leaflet; só é carregado quando a sala da Trilha abre.
const MapaReal = lazy(() => import('../components/MapaReal'))

export default function Trilha() {
  const { id, titulo, intro, ecomuseu, camadas, distancias, real, mapa, audio, referencias } = trilha
  const [vista, setVista] = useState('real')

  return (
    <section id={id}>
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-14 sm:pt-20">
        <header className="mb-12">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl">{titulo}</h2>
          <span className="fio mt-6" aria-hidden="true" />
          <p className="mt-6 max-w-2xl font-serif text-xl italic text-areia-suave sm:text-2xl">{intro}</p>
          <TrilhaSonora audio={audio} className="mt-6" />
        </header>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_1fr] lg:gap-16">
          <div>
            <div role="tablist" aria-label="Tipo de mapa" className="mb-4 flex gap-1 border-b border-neutral-800">
              {[
                ['real', 'Mapa real'],
                ['ilustracao', 'Ilustração'],
              ].map(([v, rotulo]) => (
                <button
                  key={v}
                  type="button"
                  role="tab"
                  aria-selected={vista === v}
                  onClick={() => setVista(v)}
                  className={`min-h-[48px] border-b-2 px-4 text-[1.1rem] transition-colors ${
                    vista === v ? 'border-terracota text-areia' : 'border-transparent text-areia-fosca hover:text-areia'
                  }`}
                >
                  {rotulo}
                </button>
              ))}
            </div>

            {vista === 'real' ? (
              <figure>
                <Suspense
                  fallback={
                    <div className="flex h-[26rem] items-center justify-center border border-neutral-800 text-areia-fosca sm:h-[34rem]">
                      Carregando o mapa
                    </div>
                  }
                >
                  <MapaReal pontos={mapa.pontos} ordem={real.ordem} centro={real.centro} zoom={real.zoom} googleUrl={mapa.google} />
                </Suspense>
                <figcaption className="mt-3 text-sm text-areia-fosca">{real.legenda}</figcaption>
              </figure>
            ) : (
              <figure className="mx-auto w-full max-w-md lg:mx-0">
                <div className="relative overflow-hidden border border-neutral-800">
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
                        className="pointer-events-none absolute bottom-full z-20 mb-2 w-max max-w-[11rem] border border-neutral-700 bg-ink/95 px-3 py-2 text-center text-xs text-areia opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                      >
                        <span className="block font-medium">{p.nome}</span>
                        <span className="block text-areia-fosca">{p.pronta ? 'Entrar na ala' : 'Ala em preparação'}</span>
                      </span>
                    </a>
                  ))}
                </div>
                <figcaption className="mt-3 text-sm text-areia-fosca">{mapa.legenda}</figcaption>
              </figure>
            )}

            <p className="mt-5 text-sm text-areia-fosca">{distancias.texto}</p>
            <p className="mt-1 text-sm text-areia-fosca/80">{distancias.nota}</p>
            <p className="mt-4">
              <a
                href={mapa.google}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 text-sm text-areia-fosca underline underline-offset-2 hover:text-areia"
              >
                Ver a região no Google Maps
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-serif text-3xl font-semibold text-terracota-claro">{ecomuseu.titulo}</h3>
            <div className="mt-4 max-w-2xl space-y-4 text-lg text-areia-suave">
              {ecomuseu.texto.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>

            <h3 className="mt-12 font-serif text-2xl font-semibold text-areia">Alas do percurso</h3>
            <ul className="mt-4 divide-y divide-neutral-800 border-y border-neutral-800">
              {mapa.pontos.map((p) => (
                <li key={p.id}>
                  <a
                    href={`#${p.sala}`}
                    className="group flex min-h-[56px] items-center justify-between gap-4 py-4 transition-colors active:bg-terracota/10"
                  >
                    <span>
                      <span className="block font-display text-2xl font-bold uppercase leading-none text-areia transition-colors group-hover:text-terracota-claro">
                        {p.curto}
                      </span>
                      <span className="mt-1 block text-sm text-areia-fosca">{p.resumo}</span>
                    </span>
                    <ArrowRight
                      size={20}
                      aria-hidden="true"
                      className="shrink-0 text-terracota-claro transition-transform duration-300 ease-saida group-hover:translate-x-1"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="font-serif text-3xl font-semibold text-areia sm:text-4xl">{camadas.titulo}</h3>
          <p className="mt-3 max-w-3xl text-lg text-areia-suave">{camadas.texto}</p>
          <ol className="mt-8 grid gap-px border border-neutral-800 bg-neutral-800 md:grid-cols-3">
            {camadas.itens.map((c, i) => (
              <li key={c.titulo} className="bg-ink/90 p-6">
                <p className="font-display text-3xl font-bold leading-none text-terracota-claro">{i + 1}</p>
                <h4 className="mt-3 font-serif text-xl font-semibold text-areia">{c.titulo}</h4>
                <p className="mt-2 text-areia-suave">{c.texto}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-20">
          <ListaDeReferencias referencias={referencias} />
        </div>
      </div>
    </section>
  )
}
