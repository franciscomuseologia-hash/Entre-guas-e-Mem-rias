import { useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export default function AudioPlayer({ src, titulo }) {
  const [falhou, setFalhou] = useState(false)

  return (
    <div className="max-w-xl rounded-lg border border-sf/60 bg-sf/20 p-5">
      <p className="mb-3 flex items-center gap-2 text-sm text-sf-claro">
        {falhou ? <VolumeX size={18} aria-hidden="true" /> : <Volume2 size={18} aria-hidden="true" />}
        {titulo}
      </p>
      <audio
        controls
        preload="none"
        src={src}
        aria-label={titulo}
        className="w-full"
        onError={() => setFalhou(true)}
      />
      {falhou && (
        <p className="mt-3 text-sm text-areia-fosca">
          Arquivo de áudio não encontrado. Coloque o arquivo em <code>public{src}</code>.
        </p>
      )}
    </div>
  )
}
