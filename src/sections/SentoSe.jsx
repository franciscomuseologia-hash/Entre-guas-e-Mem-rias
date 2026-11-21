import Foto from '../components/Foto'
import NucleoCabecalho from '../components/NucleoCabecalho'
import {
  AbasDaSala,
  BlocoTexto,
  GrupoFotos,
  LinhaDoTempo,
  ListaDeReferencias,
  Numeros,
} from '../components/partesDeSala'
import { sentoSe } from '../data'

const ABAS = [
  { id: 'apresentacao', rotulo: 'Apresentação' },
  { id: 'antiga', rotulo: 'A antiga Sento Sé' },
  { id: 'barragem', rotulo: 'A barragem' },
  { id: 'nova', rotulo: 'A nova Sento Sé' },
  { id: 'fontes', rotulo: 'Fontes' },
]

export default function SentoSe({ onAbrir, aba }) {
  const { id, titulo, intro, audio, abertura, linhaDoTempo, foto, antiga, barragem, nova, referencias } = sentoSe
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
          <>
            <Foto foto={foto} onAbrir={() => onAbrir([foto], 0)} className="mb-16 max-w-4xl" />
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
          </>
        )}

        {atual.id === 'antiga' && (
          <>
            <BlocoTexto titulo={antiga.titulo} paragrafos={[antiga.texto]} />
            <Numeros itens={antiga.numeros} nota={antiga.notaNumeros} />
            <GrupoFotos
              grupo={{ titulo: 'Imagens da antiga cidade', texto: 'Registros do acervo da Prefeitura de Sento Sé.', fotos: antiga.fotos }}
              fotosDaAba={antiga.fotos}
              deslocamento={0}
              onAbrir={onAbrir}
            />
          </>
        )}

        {atual.id === 'barragem' && (
          <>
            <BlocoTexto titulo={barragem.titulo} paragrafos={barragem.paragrafos} />
            <Numeros itens={barragem.numeros} nota={barragem.notaNumeros} />
            <Foto foto={barragem.mapa} onAbrir={() => onAbrir([barragem.mapa], 0)} className="max-w-3xl" />
          </>
        )}

        {atual.id === 'nova' && (
          <>
            <BlocoTexto titulo={nova.titulo} paragrafos={nova.paragrafos} />
            <Numeros itens={nova.numeros} />
            <Foto foto={nova.fotos[0]} onAbrir={() => onAbrir(nova.fotos, 0)} className="max-w-3xl" />
          </>
        )}

        {atual.id === 'fontes' && <ListaDeReferencias referencias={referencias} />}
      </div>
    </section>
  )
}
