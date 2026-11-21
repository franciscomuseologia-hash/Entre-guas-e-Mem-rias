import { Music } from 'lucide-react'
import { useSom } from '../som'

// Aviso discreto da música da sala: mostra o que está tocando ou convida a ativar o som.
export default function TrilhaSonora({ audio, className = '' }) {
  const { ativo, tocando, ligar } = useSom()
  if (!audio) return null

  if (tocando?.src === audio.src)
    return (
      <p className={`flex items-center gap-3 text-sm text-areia-fosca ${className}`}>
        <span className="eq text-terracota-claro" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span>
          Tocando agora: <span className="text-areia-suave">{audio.titulo}</span>
        </span>
      </p>
    )

  if (!ativo)
    return (
      <button type="button" onClick={ligar} className={`btn text-base ${className}`}>
        <Music size={16} aria-hidden="true" />
        Ativar a trilha sonora
      </button>
    )

  return null
}
