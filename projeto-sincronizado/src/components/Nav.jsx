import { useEffect, useState } from 'react'
import { Menu, Waves, X } from 'lucide-react'
import { circuito } from '../data'
import SomBotao from './SomBotao'

const dois = (n) => String(n).padStart(2, '0')

export default function Nav({ atual }) {
  const [aberto, setAberto] = useState(false)
  const i = Math.max(0, circuito.findIndex((c) => c.id === atual))

  // trocar de sala fecha o menu
  useEffect(() => setAberto(false), [atual])

  useEffect(() => {
    if (!aberto) return undefined
    const teclas = (e) => e.key === 'Escape' && setAberto(false)
    window.addEventListener('keydown', teclas)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', teclas)
      document.body.style.overflow = ''
    }
  }, [aberto])

  return (
    <>
      <header
        className="nav sticky top-0 z-40 border-b border-neutral-800/80 bg-ink/80 backdrop-blur-md"
        style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
          <a href="#entrada" className="flex min-w-0 items-center gap-2 text-areia">
            <Waves size={22} className="shrink-0 text-terracota-claro" aria-hidden="true" />
            <span className="truncate font-display text-lg font-bold uppercase tracking-wide">
              Entre Águas e Memórias
            </span>
          </a>

          <div className="flex items-center gap-2">
            <p className="mr-2 hidden items-baseline gap-3 md:flex" aria-hidden="true">
              <span className="font-display text-sm tabular-nums text-areia-fosca">
                {dois(i + 1)}/{dois(circuito.length)}
              </span>
              <span className="font-display text-base text-areia-suave">{circuito[i].rotulo}</span>
            </p>
            <SomBotao />
            <button
              type="button"
              onClick={() => setAberto(true)}
              aria-expanded={aberto}
              aria-controls="menu-salas"
              className="flex min-h-[44px] items-center gap-2 border border-neutral-700 px-3 text-areia-suave transition-colors hover:text-areia active:bg-terracota/20"
            >
              <Menu size={18} aria-hidden="true" />
              <span className="hidden sm:inline">Salas</span>
            </button>
          </div>
        </div>
        <div className="nav-curso" style={{ '--p': (i + 1) / circuito.length }} aria-hidden="true" />
      </header>

      {aberto && (
        <div
          id="menu-salas"
          role="dialog"
          aria-modal="true"
          aria-label="Salas da exposição"
          className="menu-salas fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-ink/95 backdrop-blur-xl"
          style={{ paddingTop: 'env(safe-area-inset-top, 0px)', paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
        >
          <div className="mx-auto flex min-h-full max-w-5xl flex-col px-6 pb-10 pt-4">
            <div className="flex h-14 items-center justify-between">
              <span className="font-display text-lg font-bold uppercase tracking-wide text-areia">Salas</span>
              <button
                type="button"
                onClick={() => setAberto(false)}
                aria-label="Fechar menu"
                className="flex h-12 w-12 items-center justify-center border border-neutral-700 text-areia hover:border-terracota"
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>

            <ol className="mt-4 grid flex-1 content-center gap-x-12 md:grid-cols-2">
              {circuito.map(({ id, rotulo }, n) => (
                <li key={id} className="border-b border-neutral-800">
                  <a
                    href={`#${id}`}
                    aria-current={atual === id ? 'page' : undefined}
                    className="group flex min-h-[56px] items-baseline gap-4 py-3 transition-colors"
                  >
                    <span className="w-8 font-display text-base tabular-nums text-terracota-claro">{dois(n + 1)}</span>
                    <span
                      className={`font-display text-4xl font-extrabold uppercase leading-none transition-transform duration-300 ease-saida group-hover:translate-x-2 sm:text-5xl ${
                        atual === id ? 'text-terracota-claro' : 'text-areia'
                      }`}
                    >
                      {rotulo}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </>
  )
}
