import { Maximize2 } from 'lucide-react'
import { rotuloCurto } from '../ficha'

// Uma fotografia da galeria. Foto real (foto.src): mantém a proporção e leva uma etiqueta de
// parede embaixo (título, data e acervo). Painel ilustrativo (sem src): título sobre o degradê.
export default function Foto({ foto, onAbrir, altura, mostrarTitulo = true, rotulo, className = '' }) {
  const real = Boolean(foto.src)
  const meta = real && mostrarTitulo ? rotuloCurto(foto.creditos) : ''

  return (
    <figure className={`group ${className}`}>
      <button
        type="button"
        onClick={onAbrir}
        aria-label={`Ampliar fotografia: ${foto.titulo}`}
        className="relative block w-full overflow-hidden bg-terra text-left"
      >
        {real ? (
          <img
            src={foto.src}
            alt={foto.alt ?? foto.titulo}
            loading="lazy"
            decoding="async"
            className={`transition-transform duration-500 ease-saida group-hover:scale-[1.03] ${
              altura ? 'h-full w-full object-cover' : 'block h-auto w-full'
            }`}
            style={altura ? { height: altura } : undefined}
          />
        ) : (
          <div
            className="transition-transform duration-500 ease-saida group-hover:scale-[1.03]"
            style={{ height: altura ?? foto.altura, background: foto.fundo }}
          />
        )}
        <span aria-hidden="true" className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-areia/10" />
        {!real && <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />}
        <Maximize2
          size={18}
          aria-hidden="true"
          className="absolute right-3 top-3 text-areia opacity-0 drop-shadow transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
        />
        {!real && (mostrarTitulo || rotulo) && (
          <span className="absolute bottom-4 left-4 right-4 font-serif text-lg text-areia drop-shadow">
            {rotulo ?? foto.titulo}
          </span>
        )}
      </button>

      {real && mostrarTitulo && (
        <figcaption className="mt-3 border-l-2 border-terracota/70 pl-3">
          <span className="block font-serif text-[1.05rem] font-semibold leading-snug text-areia">
            {rotulo ?? foto.titulo}
          </span>
          {meta && <span className="mt-0.5 block text-sm text-areia-fosca">{meta}</span>}
          {foto.aviso && (
            <span className="mt-1.5 inline-block border border-terracota/60 px-2 py-0.5 text-xs text-terracota-claro">
              {foto.aviso}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  )
}
