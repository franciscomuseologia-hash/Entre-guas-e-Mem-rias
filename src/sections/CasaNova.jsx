import { useRef } from 'react'
import Foto from '../components/Foto'
import NucleoCabecalho from '../components/NucleoCabecalho'
import { casaNova } from '../data'

// Renderiza **negrito** e transforma URLs em links (formato das referências ABNT).
function Referencia({ texto }) {
  return texto.split(/(\*\*[^*]+\*\*|https?:\/\/[^\s)]+)/g).map((parte, i) => {
    if (parte.startsWith('**')) return <strong key={i}>{parte.slice(2, -2)}</strong>
    if (parte.startsWith('http'))
      return (
        <a key={i} href={parte} target="_blank" rel="noreferrer" className="break-all underline hover:text-terracota-claro">
          {parte}
        </a>
      )
    return parte
  })
}

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

function GrupoFotos({ grupo, fotosDaAba, deslocamento, onAbrir }) {
  return (
    <div className="mb-16">
      <h3 className="font-serif text-2xl text-terracota-claro sm:text-3xl">{grupo.titulo}</h3>
      <p className="mt-3 max-w-2xl text-areia-suave">{grupo.texto}</p>
      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {grupo.fotos.map((foto, i) => (
          <Foto
            key={foto.id}
            foto={foto}
            onAbrir={() => onAbrir(fotosDaAba, deslocamento + i)}
            className="mb-4 break-inside-avoid"
          />
        ))}
      </div>
    </div>
  )
}

export default function CasaNova({ onAbrir, aba }) {
  const { id, titulo, intro, audio, abertura, mapa, grupos, morador, referencias } = casaNova
  const atual = ABAS.find((a) => a.id === aba) ?? ABAS[0]
  const barra = useRef(null)

  const irPara = (abaId) => {
    window.location.hash = `${id}/${abaId}`
    barra.current?.scrollIntoView({ block: 'start', behavior: 'instant' })
  }

  const aoTeclar = (e, i) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const prox = (i + (e.key === 'ArrowRight' ? 1 : -1) + ABAS.length) % ABAS.length
    irPara(ABAS[prox].id)
    document.getElementById(`aba-${ABAS[prox].id}`)?.focus()
  }

  const gruposDaAba = (atual.grupos ?? []).map((gid) => grupos.find((g) => g.id === gid))
  const fotosDaAba = gruposDaAba.flatMap((g) => g.fotos)
  let deslocamento = 0

  return (
    <section id={id}>
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-20">
        <NucleoCabecalho titulo={titulo} intro={intro} audio={audio} />

        <div
          ref={barra}
          role="tablist"
          aria-label="Seções da sala Casa Nova"
          className="mb-12 flex scroll-mt-16 gap-2 overflow-x-auto border-b border-neutral-800 pb-3"
        >
          {ABAS.map((a, i) => (
            <button
              key={a.id}
              id={`aba-${a.id}`}
              type="button"
              role="tab"
              aria-selected={atual.id === a.id}
              aria-controls="painel-casa-nova"
              tabIndex={atual.id === a.id ? 0 : -1}
              onClick={() => irPara(a.id)}
              onKeyDown={(e) => aoTeclar(e, i)}
              className={`min-h-[44px] shrink-0 rounded-md px-4 py-2 text-sm transition-colors ${
                atual.id === a.id
                  ? 'bg-sf text-areia'
                  : 'border border-neutral-700 text-areia-suave hover:border-terracota-claro hover:text-areia'
              }`}
            >
              {a.rotulo}
            </button>
          ))}
        </div>

        <div id="painel-casa-nova" role="tabpanel" aria-labelledby={`aba-${atual.id}`}>
          {atual.id === 'apresentacao' && (
            <>
              <div className="mb-20 max-w-3xl space-y-5 text-lg text-areia-suave">
                {abertura.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div>
                <h3 className="font-serif text-2xl text-terracota-claro sm:text-3xl">{mapa.titulo}</h3>
                <p className="mt-3 max-w-2xl text-areia-suave">{mapa.texto}</p>
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

          {gruposDaAba.map((g) => {
            const inicio = deslocamento
            deslocamento += g.fotos.length
            return <GrupoFotos key={g.id} grupo={g} fotosDaAba={fotosDaAba} deslocamento={inicio} onAbrir={onAbrir} />
          })}

          {atual.id === 'morador' && (
            <div>
              <h3 className="font-serif text-2xl text-terracota-claro sm:text-3xl">{morador.titulo}</h3>
              <p className="mt-2 text-areia-fosca">{morador.subtitulo}</p>
              <div className="mt-6 max-w-3xl space-y-4 text-lg text-areia-suave">
                {morador.texto.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="mt-10 columns-2 gap-4 lg:columns-4">
                {morador.fotos.map((foto, i) => (
                  <Foto
                    key={foto.id}
                    foto={foto}
                    onAbrir={() => onAbrir(morador.fotos, i)}
                    className="mb-4 break-inside-avoid"
                  />
                ))}
              </div>
            </div>
          )}

          {atual.id === 'fontes' && (
            <div>
              <h3 className="font-serif text-2xl text-areia sm:text-3xl">Fontes e referências</h3>
              <ul className="mt-6 max-w-4xl space-y-3 text-sm text-areia-fosca">
                {referencias.map((r) => (
                  <li key={r.texto}>
                    <Referencia texto={r.texto} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
