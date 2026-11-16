import AudioPlayer from './AudioPlayer'

export default function NucleoCabecalho({ titulo, intro, audio }) {
  return (
    <header className="mb-12">
      <h2 className="font-serif text-4xl font-semibold sm:text-6xl">{titulo}</h2>
      <p className="mt-5 max-w-2xl text-lg text-areia-suave">{intro}</p>
      <div className="mt-8">
        <AudioPlayer {...audio} />
      </div>
    </header>
  )
}
