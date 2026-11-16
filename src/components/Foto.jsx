import { Maximize2 } from 'lucide-react'

// Uma fotografia da galeria: imagem real quando `foto.src` existe,
// painel em degradê (ilustrativo) quando não existe.
export default function Foto({ foto, onAbrir, altura, mostrarTitulo = true, rotulo, className = '' }) {
  return (
    <button
      type="button"
      onClick={onAbrir}
      aria-label={`Ampliar fotografia: ${foto.titulo}`}
      className={`group relative block w-full overflow-hidden rounded-md text-left ${className}`}
    >
      <div
        className="flex items-end p-4 transition-transform duration-500 group-hover:scale-[1.02]"
        style={{ height: altura ?? foto.altura, background: foto.src ? undefined : foto.fundo }}
      >
        {foto.src && (
          <img src={foto.src} alt={foto.titulo} className="absolute inset-0 h-full w-full object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <Maximize2
          size={18}
          aria-hidden="true"
          className="absolute right-4 top-4 text-areia opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
        />
        {(mostrarTitulo || rotulo) && (
          <span className="relative font-serif text-lg text-areia drop-shadow">
            {rotulo ?? foto.titulo}
          </span>
        )}
      </div>
    </button>
  )
}
