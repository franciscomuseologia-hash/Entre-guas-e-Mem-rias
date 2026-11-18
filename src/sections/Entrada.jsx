import { useState } from 'react'
import { ArrowRight, Music, Volume2 } from 'lucide-react'
import { entrada } from '../data'
import { useSom } from '../som'

// A entrada do herói só se anima na primeira visita; depois a troca de sala já carrega o movimento.
let jaEntrou = false

export default function Entrada() {
  const { ativo, bloqueado, tocando, ligar, desligar } = useSom()
  const somLigado = ativo && !bloqueado
  const [primeira] = useState(() => {
    const p = !jaEntrou
    jaEntrou = true
    return p
  })
  const ent = (ms) => ({
    className: primeira ? 'entra' : '',
    style: primeira ? { animationDelay: `${ms}ms` } : undefined,
  })

  return (
    <section id="entrada" className="relative flex min-h-[calc(100svh-var(--nav-h))] flex-col overflow-hidden">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-44 pt-12 sm:pt-16">
        <h1
          className={`titulo-agua text-[clamp(3.6rem,13vw,11rem)] ${ent(0).className}`}
          style={ent(0).style}
        >
          {entrada.titulo}
          <span aria-hidden="true" className="titulo-agua__sub">
            {entrada.titulo}
          </span>
        </h1>

        <p
          className={`mt-8 max-w-3xl font-serif text-xl italic text-areia-suave sm:text-2xl ${ent(140).className}`}
          style={ent(140).style}
        >
          {entrada.subtitulo}
        </p>

        <div className={`mt-12 flex flex-wrap items-center gap-4 ${ent(240).className}`} style={ent(240).style}>
          {somLigado ? (
            <button type="button" onClick={desligar} className="btn btn-cheio">
              <span className="eq" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span className="text-left">
                Som ligado
                {tocando && <span className="block text-xs font-normal opacity-80">{tocando.titulo}</span>}
              </span>
            </button>
          ) : (
            <button type="button" onClick={ligar} className="btn btn-cheio">
              <Volume2 size={20} aria-hidden="true" />
              {ativo && bloqueado ? 'Toque para ouvir' : 'Entrar com som'}
            </button>
          )}
          <a href="#curadoria" className="btn">
            Começar a visita
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>

        <p className={`mt-5 max-w-xl text-sm text-areia-fosca ${ent(320).className}`} style={ent(320).style}>
          Cada sala tem a sua trilha sonora. O som é opcional e pode ser desligado a qualquer momento no menu.
        </p>
      </div>

      <p className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-8 text-sm text-areia-fosca">{entrada.nota}</p>
      <div className="ondas" aria-hidden="true" />
    </section>
  )
}
