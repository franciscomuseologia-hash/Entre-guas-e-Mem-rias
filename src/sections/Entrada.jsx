import { ArrowRight, Music, Volume2 } from 'lucide-react'
import { entrada } from '../data'
import { useSom } from '../som'

export default function Entrada() {
  const { ativo, bloqueado, tocando, ligar, desligar } = useSom()
  const somLigado = ativo && !bloqueado

  return (
    <section
      id="entrada"
      className="border-b border-neutral-800"
      style={{ background: 'radial-gradient(ellipse at 50% 120%, #1B4965 0%, #0f1d27 45%, #121212 80%)' }}
    >
      <div className="mx-auto max-w-5xl px-6 pb-24 pt-28 sm:pt-36">
        <h1 className="font-serif text-5xl font-semibold uppercase leading-none sm:text-7xl">{entrada.titulo}</h1>
        <p className="mt-6 max-w-3xl font-serif text-xl italic text-areia-suave sm:text-2xl">{entrada.subtitulo}</p>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          {somLigado ? (
            <button
              type="button"
              onClick={desligar}
              className="inline-flex min-h-[48px] items-center gap-3 rounded-md border border-sf/60 bg-sf/20 px-6 py-3 text-areia transition-colors hover:bg-sf/30"
            >
              <Music size={20} className="text-sf-claro" aria-hidden="true" />
              <span>
                Som ligado
                {tocando && <span className="block text-xs text-areia-fosca">{tocando.titulo}</span>}
              </span>
            </button>
          ) : (
            <button
              type="button"
              onClick={ligar}
              className="inline-flex min-h-[48px] items-center gap-3 rounded-md bg-terracota px-6 py-3 text-areia transition-colors hover:bg-terracota-claro"
            >
              <Volume2 size={20} aria-hidden="true" />
              {ativo && bloqueado ? 'Toque para ouvir' : 'Entrar com som'}
            </button>
          )}
          <a
            href="#curadoria"
            className="inline-flex min-h-[48px] items-center gap-2 rounded-md border border-neutral-600 px-6 py-3 text-areia transition-colors hover:border-terracota-claro hover:text-terracota-claro"
          >
            Começar a visita
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
        <p className="mt-4 max-w-xl text-sm text-areia-fosca">
          Cada sala tem a sua trilha sonora. O som é opcional e pode ser desligado a qualquer momento no menu.
        </p>

        <p className="mt-10 max-w-2xl text-base text-areia-fosca">{entrada.nota}</p>
      </div>
    </section>
  )
}
