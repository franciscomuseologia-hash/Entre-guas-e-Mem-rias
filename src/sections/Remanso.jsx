import NucleoCabecalho from '../components/NucleoCabecalho'
import { AbasDaSala, BlocoTexto, GrupoFotos, LinhaDoTempo, ListaDeReferencias, Numeros } from '../components/partesDeSala'
import { remanso } from '../data'

const ABAS = [
  { id: 'apresentacao', rotulo: 'Apresentação' },
  { id: 'antiga', rotulo: 'A antiga Remanso' },
  { id: 'remocao', rotulo: 'A remoção' },
  { id: 'seca', rotulo: 'A seca e as ruínas' },
  { id: 'fontes', rotulo: 'Fontes' },
]

export default function Remanso({ onAbrir, aba }) {
  const { id, titulo, intro, audio, abertura, linhaDoTempo, antiga, remocao, seca, referencias } = remanso
  const atual = ABAS.find((a) => a.id === aba) ?? ABAS[0]

  return (
    <section id={id}>
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-14 sm:pt-20">
        <NucleoCabecalho titulo={titulo} intro={intro} audio={audio} />
      </div>

      <AbasDaSala salaId={id} rotulo={titulo} abas={ABAS} atualId={atual.id} />

      <div
        id={`painel-${id}`}
        role="tabpanel"
        aria-labelledby={`aba-${id}-${atual.id}`}
        className="mx-auto max-w-6xl px-6 pb-24 pt-14"
      >
        {atual.id === 'apresentacao' && (
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div className="space-y-5 text-lg text-areia-suave">
              {abertura.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div>
              <h3 className="mb-6 font-serif text-3xl font-semibold text-areia">Linha do tempo</h3>
              <LinhaDoTempo itens={linhaDoTempo} salaId={id} />
            </div>
          </div>
        )}

        {atual.id === 'antiga' && (
          <GrupoFotos grupo={antiga} fotosDaAba={antiga.fotos} deslocamento={0} onAbrir={onAbrir} />
        )}

        {atual.id === 'remocao' && (
          <>
            <BlocoTexto titulo={remocao.titulo} paragrafos={remocao.paragrafos} />
            <Numeros itens={remocao.numeros} />
            <GrupoFotos
              grupo={{ titulo: 'A nova Remanso', texto: 'Registros da cidade reconstruída.', fotos: remocao.fotos }}
              fotosDaAba={remocao.fotos}
              deslocamento={0}
              onAbrir={onAbrir}
            />
          </>
        )}

        {atual.id === 'seca' && (
          <>
            <BlocoTexto titulo={seca.titulo} paragrafos={seca.paragrafos} />
            <div className="mt-12">
              <GrupoFotos
                grupo={{ titulo: 'A igreja emerge', texto: 'A torre e a fachada da antiga igreja voltam a aparecer.', fotos: seca.fotos }}
                fotosDaAba={seca.fotos}
                deslocamento={0}
                onAbrir={onAbrir}
              />
            </div>
          </>
        )}

        {atual.id === 'fontes' && <ListaDeReferencias referencias={referencias} />}
      </div>
    </section>
  )
}
