import { useEffect, useState } from 'react'
import { Waves } from 'lucide-react'
import { circuito } from '../data'

function useSecaoAtiva(ids) {
  const [ativa, setAtiva] = useState(ids[0])
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entradas) => entradas.forEach((e) => e.isIntersecting && setAtiva(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [ids])
  return ativa
}

const ids = circuito.map((c) => c.id)

export default function Nav() {
  const ativa = useSecaoAtiva(ids)

  return (
    <nav
      aria-label="Circuito expositivo"
      className="sticky top-0 z-40 flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-b border-neutral-800 bg-ink/95 px-4 py-2 backdrop-blur sm:px-8"
    >
      <a href="#entrada" className="flex items-center gap-2 font-serif text-lg text-areia">
        <Waves size={22} className="text-terracota-claro" aria-hidden="true" />
        Entre Águas e Memórias
      </a>
      <ul className="flex flex-wrap gap-1 text-sm">
        {circuito.map(({ id, rotulo }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={ativa === id ? 'true' : undefined}
              className={`block rounded px-3 py-2.5 transition-colors ${
                ativa === id ? 'bg-sf text-areia' : 'text-areia-suave hover:text-areia'
              }`}
            >
              {rotulo}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
