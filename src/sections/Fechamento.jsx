import TrilhaSonora from '../components/TrilhaSonora'
import { fechamento } from '../data'

export default function Fechamento() {
  return (
    <section id={fechamento.id}>
      <div className="mx-auto max-w-3xl px-6 pb-20 pt-20 text-center sm:pt-28">
        <h2 className="text-5xl sm:text-7xl">{fechamento.titulo}</h2>
        <span className="fio mx-auto mt-6" aria-hidden="true" />
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
