import AudioPlayer from '../components/AudioPlayer'
import { entrada } from '../data'

export default function Entrada() {
  return (
    <section
      id="entrada"
      className="scroll-mt-16 border-b border-neutral-800"
      style={{ background: 'radial-gradient(ellipse at 50% 120%, #1B4965 0%, #0f1d27 45%, #121212 80%)' }}
    >
      <div className="mx-auto max-w-5xl px-6 pb-24 pt-28 sm:pt-36">
        <h1 className="font-serif text-5xl font-semibold uppercase leading-none sm:text-7xl">{entrada.titulo}</h1>
        <p className="mt-6 max-w-3xl font-serif text-xl italic text-areia-suave sm:text-2xl">{entrada.subtitulo}</p>

        <div className="mt-12">
          <AudioPlayer {...entrada.audio} />
        </div>

        <p className="mt-10 max-w-2xl text-base text-areia-fosca">{entrada.nota}</p>
      </div>
    </section>
  )
}
