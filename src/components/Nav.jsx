import { Waves } from 'lucide-react'
import { circuito } from '../data'

export default function Nav({ atual }) {
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
              aria-current={atual === id ? 'page' : undefined}
              className={`block rounded px-3 py-2.5 transition-colors ${
                atual === id ? 'bg-sf text-areia' : 'text-areia-suave hover:text-areia'
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
