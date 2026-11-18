import { useLayoutEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
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

// Linha do tempo: o curso do rio que desce pela página, um marco por acontecimento.
function LinhaDoTempo({ itens }) {
  return (
    <ol className="relative ml-2 border-l border-terracota/50">
      {itens.map((m) => (
        <li key={m.ano} className="relative pb-9 pl-7 last:pb-0">
          <span
            aria-hidden="true"
            className="absolute -left-[5px] top-[0.55rem] h-[9px] w-[9px] rotate-45 bg-terracota"
          />
          <p className="font-display text-3xl font-bold leading-none text-terracota-claro">{m.ano}</p>
          <p className="mt-2 text-areia-suave">{m.texto}</p>
          {m.aba && (
            <a
              href={`#casa-nova/${m.aba}`}
              className="group mt-2 inline-flex min-h-[44px] items-center gap-2 text-sm text-areia-fosca transition-colors hover:text-terracota-claro"
            >
              Ver fotografias
              <ArrowRight size={14} aria-hidden="true" className="transition-transform duration-300 ease-saida group-hover:translate-x-1" />
            </a>
          )}
        </li>
      ))}
    </ol>
  )
}

function GrupoFotos({ grupo, fotosDaAba, deslocamento, onAbrir }) {
  const [destaque, ...resto] = grupo.fotos
  return (
    <section className="mb-20" aria-label={grupo.titulo}>
      <header className="mb-8 max-w-2xl">
        <h3 className="font-serif text-3xl font-semibold text-areia sm:text-4xl">{grupo.titulo}</h3>
        <p className="mt-3 text-lg text-areia-suave">{grupo.texto}</p>
      </header>
      <Foto
        foto={destaque}
        onAbrir={() => onAbrir(fotosDaAba, deslocamento)}
        className="max-w-3xl"
      />
      {resto.length > 0 && (
        <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {resto.map((foto, i) => (
            <Foto
              key={foto.id}
              foto={foto}
              onAbrir={() => onAbrir(fotosDaAba, deslocamento + i + 1)}
              className="mb-8 break-inside-avoid"
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default function CasaNova({ onAbrir, aba }) {
  const { id, titulo, intro, audio, abertura, linhaDoTempo, diptico, mapa, grupos, morador, fotos, referencias } = casaNova
  const atual = ABAS.find((a) => a.id === aba) ?? ABAS[0]
  const barra = useRef(null)
  const primeira = useRef(true)

  // Ao trocar de aba, se a barra de abas já saiu da tela, volta a ela. Roda junto com a transição.
  useLayoutEffect(() => {
    if (primeira.current) {
      primeira.current = false
      return
    }
    const el = barra.current
    if (el && el.getBoundingClientRect().top < 0) el.scrollIntoView({ block: 'start', behavior: 'instant' })
  }, [atual.id])

  const irPara = (abaId) => {
    window.location.hash = `${id}/${abaId}`
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

  const porId = (fid) => fotos.find((f) => f.id === fid)
  const par = [porId(diptico.esquerda), porId(diptico.direita)]

  return (
    <section id={id}>
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-14 sm:pt-20">
        <NucleoCabecalho titulo={titulo} intro={intro} audio={audio} />
      </div>

      {/* Abas: ficam coladas sob o menu enquanto a página rola */}
      <div
        ref={barra}
        className="sticky z-30 border-y border-neutral-800 bg-ink/85 backdrop-blur-md"
        style={{ top: 'var(--nav-h)', scrollMarginTop: 'var(--nav-h)' }}
      >
        <div
          role="tablist"
          aria-label="Seções da sala Casa Nova"
          className="mx-auto flex max-w-6xl snap-x gap-1 overflow-x-auto px-4 [scrollbar-width:none] sm:px-6 [&::-webkit-scrollbar]:hidden"
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
              className={`min-h-[52px] shrink-0 snap-start border-b-2 px-4 text-[1.1rem] transition-colors active:bg-terracota/10 ${
                atual.id === a.id
                  ? 'border-terracota text-areia'
                  : 'border-transparent text-areia-fosca hover:text-areia'
              }`}
            >
              {a.rotulo}
            </button>
          ))}
        </div>
      </div>

      <div
        id="painel-casa-nova"
        role="tabpanel"
        aria-labelledby={`aba-${atual.id}`}
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
                <LinhaDoTempo itens={linhaDoTempo} />
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

        {atual.id === 'fontes' && (
          <div>
            <h3 className="font-serif text-3xl font-semibold text-areia sm:text-4xl">Fontes e referências</h3>
            <ul className="mt-6 max-w-4xl space-y-4 text-sm text-areia-fosca">
              {referencias.map((r) => (
                <li key={r.texto} className="border-l border-neutral-700 pl-4">
                  <Referencia texto={r.texto} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
