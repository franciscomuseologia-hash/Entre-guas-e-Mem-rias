import Foto from '../components/Foto'
import NucleoCabecalho from '../components/NucleoCabecalho'
import { AbasDaSala, GrupoFotos, LinhaDoTempo, ListaDeReferencias } from '../components/partesDeSala'
import { casaNova } from '../data'

// Abas da sala: cada uma reúne um ou mais grupos de fotografias.
const ABAS = [
  { id: 'apresentacao', rotulo: 'Apresentação' },
  { id: 'antes', rotulo: 'Antes da barragem', grupos: ['travessia', 'passado', 'cotidiano'] },
  { id: 'barragem', rotulo: 'A barragem', grupos: ['barragem'] },
  { id: 'nova-cidade', rotulo: 'A nova cidade', grupos: ['nova-cidade'] },
  { id: 'ruinas', rotulo: 'As ruínas', grupos: ['ruinas'] },
  { id: 'morador', rotulo: 'Morador ilustre' },
  { id: 'fontes', rotulo: 'Fontes' },
]

export default function CasaNova({ onAbrir, aba }) {
  const { id, titulo, intro, audio, abertura, linhaDoTempo, diptico, mapa, grupos, morador, fotos, referencias } = casaNova
  const atual = ABAS.find((a) => a.id === aba) ?? ABAS[0]
  const gruposDaAba = (atual.grupos ?? []).map((gid) => grupos.find((g) => g.id === gid))
  const fotosDaAba = gruposDaAba.flatMap((g) => g.fotos)
  let deslocamento = 0

  const porId = (fid) => fotos.find((f) => f.id === fid)
  const par = [porId(diptico.esquerda), porId(diptico.direita)]

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

            <div className="mt-24">
              <h3 className="font-serif text-3xl font-semibold text-areia sm:text-4xl">{mapa.titulo}</h3>
              <p className="mt-3 max-w-2xl text-lg text-areia-suave">{mapa.texto}</p>
              <Foto
                foto={mapa.foto}
                mostrarTitulo={false}
                onAbrir={() => onAbrir([mapa.foto], 0)}
                className="mt-8"
              />
              <p className="mt-3 text-sm text-areia-fosca">{mapa.foto.legenda}</p>
            </div>
          </>
        )}

        {atual.id === 'nova-cidade' && par[0] && par[1] && (
          <section className="mb-24" aria-label={diptico.titulo}>
            <header className="mb-8 max-w-2xl">
              <h3 className="font-serif text-3xl font-semibold text-areia sm:text-4xl">{diptico.titulo}</h3>
              <p className="mt-3 text-lg text-areia-suave">{diptico.texto}</p>
            </header>
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
              {par.map((f, k) => (
                <Foto key={f.id} foto={f} onAbrir={() => onAbrir(par, k)} />
              ))}
            </div>
          </section>
        )}

        {gruposDaAba.map((g) => {
          const inicio = deslocamento
          deslocamento += g.fotos.length
          return <GrupoFotos key={g.id} grupo={g} fotosDaAba={fotosDaAba} deslocamento={inicio} onAbrir={onAbrir} />
        })}

        {atual.id === 'morador' && (
          <div>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
              <Foto foto={morador.fotos[0]} onAbrir={() => onAbrir(morador.fotos, 0)} />
              <div>
                <h3 className="font-serif text-3xl font-semibold leading-tight text-areia sm:text-4xl">{morador.titulo}</h3>
                <p className="mt-2 text-areia-fosca">{morador.subtitulo}</p>
                <span className="fio my-6" aria-hidden="true" />
                <div className="max-w-2xl space-y-4 text-lg text-areia-suave">
                  {morador.texto.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {morador.fotos.slice(1).map((foto, i) => (
                <Foto key={foto.id} foto={foto} onAbrir={() => onAbrir(morador.fotos, i + 1)} />
              ))}
            </div>
          </div>
        )}

        {atual.id === 'fontes' && <ListaDeReferencias referencias={referencias} />}
      </div>
    </section>
  )
}
