import { ArrowLeft, ArrowRight } from 'lucide-react'
import { circuito } from '../data'

// Fim de cada sala: onde o visitante estava e para onde segue o percurso.
export default function ProximaSala({ atual }) {
  const i = circuito.findIndex((c) => c.id === atual)
  const anterior = circuito[i - 1]
  const proxima = circuito[i + 1]

  const nome =
    'flex items-center gap-3 font-display text-3xl font-extrabold uppercase leading-none text-areia transition-colors group-hover:text-terracota-claro sm:text-5xl'

  return (
    <nav
      aria-label="Navegação entre salas"
      className="relative border-t border-neutral-800 bg-ink/70 backdrop-blur-sm"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="mx-auto grid max-w-7xl sm:grid-cols-2">
        {anterior ? (
          <a
            href={`#${anterior.id}`}
            className="group flex min-h-[44px] flex-col gap-2 border-b border-neutral-800 px-6 py-8 transition-colors active:bg-terracota/10 sm:border-b-0 sm:border-r sm:px-10 sm:py-12"
          >
            <span className="text-sm text-areia-fosca">Sala anterior</span>
            <span className={nome}>
              <ArrowLeft
                size={28}
                aria-hidden="true"
                className="shrink-0 transition-transform duration-300 ease-saida group-hover:-translate-x-1"
              />
              {anterior.rotulo}
            </span>
          </a>
        ) : (
          <span className="hidden sm:block sm:border-r sm:border-neutral-800" />
        )}
        {proxima ? (
          <a
            href={`#${proxima.id}`}
            className="group flex min-h-[44px] flex-col gap-2 px-6 py-8 transition-colors active:bg-terracota/10 sm:items-end sm:px-10 sm:py-12 sm:text-right"
          >
            <span className="text-sm text-areia-fosca">Próxima sala</span>
            <span className={nome}>
              {proxima.rotulo}
              <ArrowRight
                size={28}
                aria-hidden="true"
                className="shrink-0 transition-transform duration-300 ease-saida group-hover:translate-x-1"
              />
            </span>
          </a>
        ) : (
          <span />
        )}
      </div>
    </nav>
  )
}
