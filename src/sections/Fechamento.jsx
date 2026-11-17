import TrilhaSonora from '../components/TrilhaSonora'
import { fechamento } from '../data'

export default function Fechamento() {
  return (
    <section
      id={fechamento.id}
      className="scroll-mt-16"
      style={{ background: 'radial-gradient(ellipse at 50% -20%, #1B4965 0%, #121212 70%)' }}
    >
      <div className="mx-auto max-w-3xl px-6 pb-16 pt-28 text-center">
        <h2 className="font-serif text-4xl font-semibold sm:text-6xl">{fechamento.titulo}</h2>
        <p className="mt-6 text-lg text-areia-suave">{fechamento.texto}</p>
        <blockquote className="mt-16 font-serif text-3xl italic leading-snug sm:text-5xl">
          “{fechamento.citacao}”
        </blockquote>
        <p className="mt-4 text-sm text-areia-fosca">{fechamento.autoria}</p>
        <div className="mt-16 flex justify-center">
          <TrilhaSonora audio={fechamento.audio} />
        </div>
        <p className="mt-24 text-sm text-neutral-500">{fechamento.rodape}</p>
      </div>
    </section>
  )
}
