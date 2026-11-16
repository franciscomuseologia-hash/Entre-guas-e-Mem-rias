import { entrada } from '../data'

export default function Curadoria() {
  return (
    <section id="curadoria" className="scroll-mt-16 border-b border-neutral-800">
      <div className="mx-auto max-w-5xl space-y-24 px-6 py-24">
        <h2 className="font-serif text-4xl font-semibold sm:text-6xl">Curadoria</h2>
        {entrada.textos.map((t) => (
          <article key={t.id} className="flex flex-col gap-8 lg:flex-row">
            <header className="lg:w-1/4">
              <h3 className="font-serif text-3xl text-terracota-claro">{t.titulo}</h3>
              <p className="mt-2 text-areia-fosca">por {t.autoria}</p>
            </header>
            <div className="space-y-5 text-lg text-areia-suave lg:w-3/4">
              {t.paragrafos.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
