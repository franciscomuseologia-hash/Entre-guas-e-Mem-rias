import TrilhaSonora from './TrilhaSonora'

export default function NucleoCabecalho({ titulo, intro, audio }) {
  return (
    <header className="mb-10 sm:mb-14">
      <h2 className="text-5xl sm:text-7xl lg:text-8xl">{titulo}</h2>
      <span className="fio mt-6" aria-hidden="true" />
      <p className="mt-6 max-w-2xl font-serif text-xl italic text-areia-suave sm:text-2xl">{intro}</p>
      <TrilhaSonora audio={audio} className="mt-6" />
    </header>
  )
}
