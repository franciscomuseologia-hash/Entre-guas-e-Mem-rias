import { ExternalLink } from 'lucide-react'
import GruposDeVideos from '../components/GruposDeVideos'
import NucleoCabecalho from '../components/NucleoCabecalho'
import { AbasDaSala, BlocoTexto, GrupoFotos, LinhaDoTempo, ListaDeReferencias } from '../components/partesDeSala'
import { pilaoArcado, referenciasVideosPilao, videosPilao } from '../data'

const ABAS = [
  { id: 'apresentacao', rotulo: 'Apresentação' },
  { id: 'imagens', rotulo: 'Imagens' },
  { id: 'ruinas', rotulo: 'Ruínas e memória' },
  { id: 'videos', rotulo: 'Vídeos' },
  { id: 'fontes', rotulo: 'Fontes' },
]

export default function PilaoArcado({ onAbrir, aba }) {
  const { id, titulo, intro, audio, abertura, linhaDoTempo, imagens, ruinas, referencias } = pilaoArcado
  const atual = ABAS.find((a) => a.id === aba) ?? ABAS[0]
  const todasAsFotos = imagens.grupos.flatMap((g) => g.fotos)
  let deslocamento = 0

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

        {atual.id === 'imagens' && (
          <>
            <BlocoTexto titulo={imagens.titulo} paragrafos={[imagens.texto]} />
            <div className="mt-12">
              {imagens.grupos.map((g) => {
                const inicio = deslocamento
                deslocamento += g.fotos.length
                return <GrupoFotos key={g.id} grupo={g} fotosDaAba={todasAsFotos} deslocamento={inicio} onAbrir={onAbrir} />
              })}
            </div>
          </>
        )}

        {atual.id === 'ruinas' && (
          <>
            <BlocoTexto titulo={ruinas.titulo} paragrafos={ruinas.paragrafos} />
            <div className="mt-14 max-w-3xl border-l-2 border-terracota pl-6">
              <h3 className="font-serif text-2xl font-semibold text-areia">{ruinas.tombamento.titulo}</h3>
              <p className="mt-2 text-lg text-areia-suave">{ruinas.tombamento.texto}</p>
              <a
                href={ruinas.tombamento.url}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex min-h-[44px] items-center gap-2 text-terracota-claro underline underline-offset-4 hover:text-areia"
              >
                Ver a reportagem na Univasf
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>
          </>
        )}

        {atual.id === 'videos' && <GruposDeVideos dados={videosPilao} />}

        {atual.id === 'fontes' && <ListaDeReferencias referencias={[...referencias, ...referenciasVideosPilao]} />}
      </div>
    </section>
  )
}
