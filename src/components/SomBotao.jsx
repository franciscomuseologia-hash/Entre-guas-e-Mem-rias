import { Volume2, VolumeX } from 'lucide-react'
import { useSom } from '../som'

// Controle global de som, sempre visível no menu.
export default function SomBotao() {
  const { ativo, bloqueado, tocando, alternar } = useSom()
  const rotulo = !ativo ? 'Som desligado' : bloqueado ? 'Toque para ouvir' : 'Som ligado'

  return (
    <button
      type="button"
      onClick={alternar}
      aria-pressed={ativo}
      title={tocando ? `Tocando: ${tocando.titulo}` : 'Ativar ou desativar a trilha sonora'}
      className={`flex min-h-[44px] items-center gap-2 rounded px-3 py-2.5 text-sm transition-colors ${
        ativo ? 'bg-sf/40 text-areia' : 'border border-neutral-700 text-areia-suave hover:text-areia'
      }`}
    >
      {ativo ? <Volume2 size={18} aria-hidden="true" /> : <VolumeX size={18} aria-hidden="true" />}
      <span>{rotulo}</span>
    </button>
  )
}
