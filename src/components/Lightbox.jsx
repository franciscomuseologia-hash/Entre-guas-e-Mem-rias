import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function Lightbox({ estado, onFechar, onNavegar }) {
  const botaoFechar = useRef(null)
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

  if (!estado) return null
  const { itens, indice } = estado
  const foto = itens[indice]
  const varias = itens.length > 1

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/95 p-4 sm:p-8"
      onClick={onFechar}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={foto.titulo}
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={botaoFechar}
          type="button"
          onClick={onFechar}
          aria-label="Fechar"
          className="absolute -right-1 -top-1 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-600 bg-ink text-areia hover:border-terracota-claro"
        >
          <X size={22} aria-hidden="true" />
        </button>

        <div
          className="relative h-[55vh] min-h-[260px] overflow-hidden rounded-lg"
          style={{ background: foto.src ? undefined : foto.fundo }}
        >
          {foto.src && <img src={foto.src} alt={foto.alt ?? foto.titulo} className="h-full w-full object-contain" />}
          {varias && (
            <>
              <button
                type="button"
                onClick={() => onNavegar(-1)}
                aria-label="Foto anterior"
                className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-areia hover:bg-black/80"
              >
                <ChevronLeft size={24} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavegar(1)}
                aria-label="Próxima foto"
                className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-areia hover:bg-black/80"
              >
                <ChevronRight size={24} aria-hidden="true" />
              </button>
            </>
          )}
        </div>

        <div className="mt-5 max-w-2xl">
          <p className="text-sm text-terracota-claro">{foto.cidade}</p>
          <h3 className="mt-1 font-serif text-3xl leading-tight text-areia">{foto.titulo}</h3>
          <p className="mt-3 text-lg text-areia-suave">{foto.legenda}</p>
          <p className="mt-3 text-sm text-areia-fosca">Ficha técnica: {foto.creditos}</p>
          {foto.fonte && (
            <p className="mt-2 text-sm">
              <a
                href={foto.fonte}
                target="_blank"
                rel="noreferrer"
                className="text-terracota-claro underline underline-offset-2 hover:text-areia"
              >
                Ver página de origem
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
