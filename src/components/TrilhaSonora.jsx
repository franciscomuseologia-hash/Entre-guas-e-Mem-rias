import { Music } from 'lucide-react'
import { useSom } from '../som'

// Aviso discreto da música da sala: mostra o que está tocando ou convida a ativar o som.
export default function TrilhaSonora({ audio, className = '' }) {
  const { ativo, tocando, ligar } = useSom()
  if (!audio) return null

  if (tocando?.src === audio.src)
    return (
      <p className={`flex items-center gap-2 text-sm text-sf-claro ${className}`}>
        <Music size={16} aria-hidden="true" />
        <span>
          Tocando agora: <span className="text-areia-suave">{audio.titulo}</span>
        </span>
      </p>
    )

  if (!ativo)
    return (
      <button
        type="button"
        onClick={ligar}
        className={`inline-flex min-h-[44px] items-center gap-2 rounded-md border border-sf/60 px-4 py-2 text-sm text-sf-claro transition-colors hover:bg-sf/20 ${className}`}
      >
        <Music size={16} aria-hidden="true" />
        Ativar a trilha sonora
      </button>
    )

  return null
}
