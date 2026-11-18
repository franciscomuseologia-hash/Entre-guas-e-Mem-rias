import Foto from '../components/Foto'
import NucleoCabecalho from '../components/NucleoCabecalho'
import { sentoSe } from '../data'

export default function SentoSe({ onAbrir }) {
  const { id, titulo, intro, audio, pares } = sentoSe
  return (
    <section id={id} className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <NucleoCabecalho titulo={titulo} intro={intro} audio={audio} />
        <div className="space-y-12">
          {pares.map((p) => (
            <div key={p.id}>
              <h3 className="mb-4 font-serif text-2xl">{p.titulo}</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <Foto foto={p.antes} rotulo="Antes" onAbrir={() => onAbrir([p.antes, p.depois], 0)} />
                <Foto foto={p.depois} rotulo="Ruínas na seca" onAbrir={() => onAbrir([p.antes, p.depois], 1)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
