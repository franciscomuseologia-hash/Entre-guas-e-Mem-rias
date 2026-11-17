import { Maximize2 } from 'lucide-react'

// Uma fotografia da galeria: imagem real quando `foto.src` existe (mantém a proporção original),
// painel em degradê (ilustrativo) quando não existe.
export default function Foto({ foto, onAbrir, altura, mostrarTitulo = true, rotulo, className = '' }) {
  const real = Boolean(foto.src)
  return (
    <button
      type="button"
      onClick={onAbrir}
      aria-label={`Ampliar fotografia: ${foto.titulo}`}
      className={`group relative block w-full overflow-hidden rounded-md text-left ${className}`}
    >
      <div
        className={`relative transition-transform duration-500 group-hover:scale-[1.02] ${real && !altura ? '' : 'flex items-end p-4'}`}
        style={real && !altura ? undefined : { height: altura ?? foto.altura, background: real ? undefined : foto.fundo }}
      >
        {real && (
          <img
            src={foto.src}
            alt={foto.alt ?? foto.titulo}
            loading="lazy"
            className={altura ? 'absolute inset-0 h-full w-full object-cover' : 'block h-auto w-full'}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <Maximize2
          size={18}
          aria-hidden="true"
          className="absolute right-4 top-4 text-areia opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
        />
        {(mostrarTitulo || rotulo) && (
          <span
            className={`font-serif text-lg text-areia drop-shadow ${real && !altura ? 'absolute bottom-4 left-4 right-4' : 'relative'}`}
          >
            {rotulo ?? foto.titulo}
          </span>
        )}
      </div>
    </button>
  )
}
