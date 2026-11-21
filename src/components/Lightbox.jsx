import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { lerFicha } from '../ficha'

export default function Lightbox({ estado, onFechar, onNavegar }) {
  const botaoFechar = useRef(null)
  const toque = useRef(null)
  const aberto = Boolean(estado)

  useEffect(() => {
    if (!aberto) return undefined
    const anterior = document.activeElement
    const teclas = (e) => {
      if (e.key === 'Escape') onFechar()
      if (e.key === 'ArrowRight') onNavegar(1)
      if (e.key === 'ArrowLeft') onNavegar(-1)
    }
    window.addEventListener('keydown', teclas)
    document.body.style.overflow = 'hidden'
    botaoFechar.current?.focus()
    return () => {
      window.removeEventListener('keydown', teclas)
      document.body.style.overflow = ''
      anterior?.focus?.()
    }
  }, [aberto, onFechar, onNavegar])

  // carrega as fotos vizinhas para a troca não piscar
  useEffect(() => {
    if (!estado) return
    const { itens, indice } = estado
    ;[1, -1].forEach((d) => {
      const f = itens[(indice + d + itens.length) % itens.length]
      if (f?.src) new Image().src = f.src
    })
  }, [estado])

  if (!estado) return null
  const { itens, indice } = estado
  const foto = itens[indice]
  const varias = itens.length > 1
  const ficha = lerFicha(foto.creditos)

  // deslize horizontal troca a foto (o vertical continua rolando a página)
  const aoPressionar = (e) => {
    toque.current = { x: e.clientX, y: e.clientY }
  }
  const aoSoltar = (e) => {
    const t = toque.current
    toque.current = null
    if (!t || !varias) return
    const dx = e.clientX - t.x
    const dy = e.clientY - t.y
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) onNavegar(dx < 0 ? 1 : -1)
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={foto.titulo}
      className="lightbox fixed inset-0 z-[60] flex flex-col bg-ink/95 backdrop-blur-sm lg:flex-row"
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)', paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <button
        ref={botaoFechar}
        type="button"
        onClick={onFechar}
        aria-label="Fechar"
        className="absolute right-3 top-3 z-10 flex h-12 w-12 items-center justify-center border border-neutral-600 bg-ink/80 text-areia hover:border-terracota active:bg-terracota/20"
        style={{ marginTop: 'env(safe-area-inset-top, 0px)' }}
      >
        <X size={22} aria-hidden="true" />
      </button>

      <div
        className="relative flex h-[52svh] min-h-0 shrink-0 items-center justify-center p-4 sm:p-8 lg:h-auto lg:flex-1"
        style={{ touchAction: 'pan-y' }}
        onPointerDown={aoPressionar}
        onPointerUp={aoSoltar}
        onClick={(e) => e.target === e.currentTarget && onFechar()}
      >
        {foto.src ? (
          <img
            key={foto.id}
            src={foto.src}
            alt={foto.alt ?? foto.titulo}
            draggable={false}
            className="lightbox__img max-h-full max-w-full object-contain shadow-2xl"
          />
        ) : (
          <div className="h-full w-full max-w-3xl" style={{ background: foto.fundo }} />
        )}
        {varias && (
          <>
            <button
              type="button"
              onClick={() => onNavegar(-1)}
              aria-label="Foto anterior"
              className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-ink/70 text-areia hover:bg-ink active:bg-terracota/30 sm:left-4"
            >
              <ChevronLeft size={26} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => onNavegar(1)}
              aria-label="Próxima foto"
              className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-ink/70 text-areia hover:bg-ink active:bg-terracota/30 sm:right-4"
            >
              <ChevronRight size={26} aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      <aside className="min-h-0 flex-1 overflow-y-auto overscroll-contain border-t border-neutral-800 p-6 sm:p-8 lg:w-[27rem] lg:flex-none lg:border-l lg:border-t-0">
        <p className="flex items-baseline justify-between text-sm text-terracota-claro">
          <span>{foto.cidade}</span>
          {varias && (
            <span className="font-display tabular-nums text-areia-fosca">
              {indice + 1} / {itens.length}
            </span>
          )}
        </p>
        <h3 className="mt-2 font-serif text-3xl font-semibold leading-tight text-areia">{foto.titulo}</h3>
        <p className="mt-4 text-lg text-areia-suave">{foto.legenda}</p>
        {foto.aviso && (
          <p className="mt-3 inline-block border border-terracota/60 px-2 py-1 text-sm text-terracota-claro">{foto.aviso}</p>
        )}

        <dl className="mt-8 grid grid-cols-[6.5rem_1fr] gap-x-4 gap-y-3 border-t border-neutral-800 pt-6 text-sm">
          {ficha.map((f, k) => (
            <div key={k} className="contents">
              <dt className="text-areia-fosca">{f.rotulo}</dt>
              <dd className={f.aberto ? 'italic text-areia-fosca' : 'text-areia-suave'}>{f.valor}</dd>
            </div>
          ))}
        </dl>

        {foto.fonte && (
          <p className="mt-6 text-sm">
            <a
              href={foto.fonte}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center text-terracota-claro underline underline-offset-4 hover:text-areia"
            >
              Ver página de origem
            </a>
          </p>
        )}
      </aside>
    </div>
  )
}
