import { trilha } from '../data'

export default function Trilha() {
  const { id, titulo, intro, mapa } = trilha
  const src = `https://www.google.com/maps?q=${encodeURIComponent(mapa.consulta)}&output=embed`
  return (
    <section id={id} className="scroll-mt-16 border-b border-neutral-800">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <header className="mb-12">
          <h2 className="font-serif text-4xl font-semibold sm:text-6xl">{titulo}</h2>
          <p className="mt-5 max-w-2xl text-lg text-areia-suave">{intro}</p>
        </header>
        <figure>
          <iframe
            title={`Mapa: ${mapa.consulta}`}
            src={src}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[60vh] min-h-[320px] w-full rounded-lg border border-neutral-800"
          />
          <figcaption className="mt-3 text-sm text-areia-fosca">{mapa.legenda}</figcaption>
        </figure>
      </div>
    </section>
  )
}
