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
      aria-label={rotulo}
      title={tocando ? `Tocando: ${tocando.titulo}` : 'Ativar ou desativar a trilha sonora'}
      className={`flex min-h-[44px] items-center gap-2 border px-3 transition-colors active:bg-terracota/20 ${
        ativo
          ? 'border-terracota/60 bg-terracota/15 text-areia'
          : 'border-neutral-700 text-areia-suave hover:text-areia'
      }`}
    >
      {ativo && tocando ? (
        <span className="eq text-terracota-claro" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      ) : ativo ? (
        <Volume2 size={18} aria-hidden="true" />
      ) : (
        <VolumeX size={18} aria-hidden="true" />
      )}
      <span className="hidden sm:inline">{rotulo}</span>
    </button>
  )
}
