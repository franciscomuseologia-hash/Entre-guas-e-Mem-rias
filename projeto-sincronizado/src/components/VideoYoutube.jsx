import { useState } from 'react'
import { ExternalLink, Play } from 'lucide-react'

// Vídeo do YouTube só é carregado quando o visitante aperta o botão: a página abre mais leve
// e o YouTube não recebe dados de quem não assistir. Nada é baixado, só incorporado.
export default function VideoYoutube({ id, titulo, credito, fonte }) {
  const [tocando, setTocando] = useState(false)

  return (
    <figure>
      <div className="relative aspect-video w-full overflow-hidden border border-neutral-800 bg-terra">
        {tocando ? (
          <iframe
            title={titulo}
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setTocando(true)}
            aria-label={`Assistir ao vídeo: ${titulo}`}
            className="group absolute inset-0 flex h-full w-full items-center justify-center"
          >
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-90"
            />
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-areia bg-ink/70 text-areia transition-transform duration-300 ease-saida group-hover:scale-110 group-active:scale-95">
              <Play size={26} aria-hidden="true" className="ml-1" />
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-3 border-l-2 border-terracota/70 pl-3">
        <span className="block font-serif text-[1.05rem] font-semibold leading-snug text-areia">{titulo}</span>
        <span className="mt-0.5 block text-sm text-areia-fosca">
          Vídeo no YouTube{credito ? `, ${credito}` : ', canal a confirmar'}
        </span>
        <a
          href={fonte ?? `https://www.youtube.com/watch?v=${id}`}
          target="_blank"
          rel="noreferrer"
          className="mt-1 inline-flex min-h-[44px] items-center gap-2 text-sm text-terracota-claro underline underline-offset-4 hover:text-areia"
        >
          {fonte ? 'Ver página de origem' : 'Abrir no YouTube'}
          <ExternalLink size={14} aria-hidden="true" />
        </a>
      </figcaption>
    </figure>
  )
}
