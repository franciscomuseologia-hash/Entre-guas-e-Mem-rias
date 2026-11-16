import { ArrowLeft, ArrowRight } from 'lucide-react'
import { circuito } from '../data'

// Faixa de navegação entre salas: anterior e próxima, no fim de cada sala.
export default function ProximaSala({ atual }) {
  const i = circuito.findIndex((c) => c.id === atual)
  const anterior = circuito[i - 1]
  const proxima = circuito[i + 1]

  const base =
    'inline-flex min-h-[44px] items-center gap-2 rounded-md border border-neutral-700 px-5 py-3 text-areia transition-colors hover:border-terracota-claro hover:text-terracota-claro'

  return (
    <nav
      aria-label="Navegação entre salas"
      className="border-b border-neutral-800 bg-ink px-6 py-8"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        {anterior ? (
          <a href={`#${anterior.id}`} className={base}>
            <ArrowLeft size={18} aria-hidden="true" />
            <span>
              <span className="block text-xs text-areia-fosca">Sala anterior</span>
              {anterior.rotulo}
            </span>
          </a>
        ) : (
          <span />
        )}
        {proxima && (
          <a href={`#${proxima.id}`} className={`${base} text-right`}>
            <span>
              <span className="block text-xs text-areia-fosca">Próxima sala</span>
              {proxima.rotulo}
            </span>
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        )}
      </div>
    </nav>
  )
}
