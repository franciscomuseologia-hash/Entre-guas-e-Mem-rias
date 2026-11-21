import { ExternalLink } from 'lucide-react'
import VideoYoutube from './VideoYoutube'

// Lista de vídeos em grupos, com o link do canal de origem.
export default function GruposDeVideos({ dados }) {
  return (
    <div>
      {dados.grupos.map((g) => (
        <section key={g.id} className="mb-16" aria-label={g.titulo}>
          <h3 className="font-serif text-3xl font-semibold text-areia sm:text-4xl">{g.titulo}</h3>
          <p className="mt-3 max-w-2xl text-lg text-areia-suave">{g.texto}</p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {g.videos.map((v) => (
              <VideoYoutube key={v.id} {...v} />
            ))}
          </div>
        </section>
      ))}
      <p>
        <a
          href={dados.canal.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-[44px] items-center gap-2 text-areia-suave underline underline-offset-4 hover:text-terracota-claro"
        >
          Ver mais vídeos no {dados.canal.rotulo}
          <ExternalLink size={14} aria-hidden="true" />
        </a>
      </p>
    </div>
  )
}
