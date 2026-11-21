import { useLayoutEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Foto from './Foto'

// Peças compartilhadas pelas salas que têm abas (Casa Nova, Sento Sé...).

// Renderiza **negrito** e transforma URLs em links (formato das referências ABNT).
export function Referencia({ texto }) {
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

export function ListaDeReferencias({ referencias }) {
  return (
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
  )
}

// Barra de abas colada sob o menu. Troca de aba pelo hash (#sala/aba), com setas do teclado.
export function AbasDaSala({ salaId, rotulo, abas, atualId }) {
  const barra = useRef(null)
  const primeira = useRef(true)

  // Ao trocar de aba, se a barra já saiu da tela, volta a ela. Roda junto com a transição.
  useLayoutEffect(() => {
    if (primeira.current) {
      primeira.current = false
      return
    }
    const el = barra.current
    if (el && el.getBoundingClientRect().top < 0) el.scrollIntoView({ block: 'start', behavior: 'instant' })
  }, [atualId])

  const irPara = (abaId) => {
    window.location.hash = `${salaId}/${abaId}`
  }
  const aoTeclar = (e, i) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const prox = (i + (e.key === 'ArrowRight' ? 1 : -1) + abas.length) % abas.length
    irPara(abas[prox].id)
    document.getElementById(`aba-${salaId}-${abas[prox].id}`)?.focus()
  }

  return (
    <div
      ref={barra}
      className="sticky z-30 border-y border-neutral-800 bg-ink/85 backdrop-blur-md"
      style={{ top: 'var(--nav-h)', scrollMarginTop: 'var(--nav-h)' }}
    >
      <div
        role="tablist"
        aria-label={`Seções da sala ${rotulo}`}
        className="mx-auto flex max-w-6xl snap-x gap-1 overflow-x-auto px-4 [scrollbar-width:none] sm:px-6 [&::-webkit-scrollbar]:hidden"
      >
        {abas.map((a, i) => (
          <button
            key={a.id}
            id={`aba-${salaId}-${a.id}`}
            type="button"
            role="tab"
            aria-selected={atualId === a.id}
            aria-controls={`painel-${salaId}`}
            tabIndex={atualId === a.id ? 0 : -1}
            onClick={() => irPara(a.id)}
            onKeyDown={(e) => aoTeclar(e, i)}
            className={`min-h-[52px] shrink-0 snap-start border-b-2 px-4 text-[1.1rem] transition-colors active:bg-terracota/10 ${
              atualId === a.id ? 'border-terracota text-areia' : 'border-transparent text-areia-fosca hover:text-areia'
            }`}
          >
            {a.rotulo}
          </button>
        ))}
      </div>
    </div>
  )
}

// Linha do tempo: o curso do rio que desce pela página, um marco por acontecimento.
export function LinhaDoTempo({ itens, salaId }) {
  return (
    <ol className="relative ml-2 border-l border-terracota/50">
      {itens.map((m) => (
        <li key={m.ano} className="relative pb-9 pl-7 last:pb-0">
          <span aria-hidden="true" className="absolute -left-[5px] top-[0.55rem] h-[9px] w-[9px] rotate-45 bg-terracota" />
          <p className="font-display text-3xl font-bold leading-none text-terracota-claro">{m.ano}</p>
          <p className="mt-2 text-areia-suave">{m.texto}</p>
          {m.nota && <p className="mt-1 text-sm italic text-areia-fosca">{m.nota}</p>}
          {m.aba && (
            <a
              href={`#${salaId}/${m.aba}`}
              className="group mt-2 inline-flex min-h-[44px] items-center gap-2 text-sm text-areia-fosca transition-colors hover:text-terracota-claro"
            >
              Ver mais
              <ArrowRight size={14} aria-hidden="true" className="transition-transform duration-300 ease-saida group-hover:translate-x-1" />
            </a>
          )}
        </li>
      ))}
    </ol>
  )
}

// Números em destaque (dados do núcleo).
export function Numeros({ itens, nota }) {
  return (
    <div className="my-10">
      <dl className="grid gap-x-10 gap-y-8 border-y border-neutral-800 py-8 sm:grid-cols-2 lg:grid-cols-3">
        {itens.map((n) => (
          <div key={n.valor}>
            <dt className="font-display text-5xl font-extrabold leading-none text-terracota-claro sm:text-6xl">{n.valor}</dt>
            <dd className="mt-2 max-w-[16rem] text-areia-suave">{n.texto}</dd>
          </div>
        ))}
      </dl>
      {nota && <p className="mt-3 text-sm text-areia-fosca">{nota}</p>}
    </div>
  )
}

// Bloco de texto corrido com título.
export function BlocoTexto({ titulo, paragrafos }) {
  return (
    <div className="max-w-3xl">
      {titulo && <h3 className="mb-5 font-serif text-3xl font-semibold text-areia sm:text-4xl">{titulo}</h3>}
      <div className="space-y-5 text-lg text-areia-suave">
        {paragrafos.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </div>
  )
}

// Grupo de fotografias: a primeira em destaque, as outras em colunas.
export function GrupoFotos({ grupo, fotosDaAba, deslocamento, onAbrir }) {
  const [destaque, ...resto] = grupo.fotos
  return (
    <section className="mb-20" aria-label={grupo.titulo}>
      <header className="mb-8 max-w-2xl">
        <h3 className="font-serif text-3xl font-semibold text-areia sm:text-4xl">{grupo.titulo}</h3>
        <p className="mt-3 text-lg text-areia-suave">{grupo.texto}</p>
      </header>
      <Foto foto={destaque} onAbrir={() => onAbrir(fotosDaAba, deslocamento)} className="max-w-3xl" />
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
