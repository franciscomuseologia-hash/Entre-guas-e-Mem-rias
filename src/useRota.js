import { useEffect, useState } from 'react'
import { circuito } from './data'

const ids = circuito.map((c) => c.id)

// Rota pelo hash da URL: #sala ou #sala/aba (ex.: #casa-nova/ruinas).
function ler() {
  const [sala, aba] = window.location.hash.replace('#', '').split('/')
  return { sala: ids.includes(sala) ? sala : ids[0], aba: aba || null }
}

export function useRota() {
  const [rota, setRota] = useState(ler)
  useEffect(() => {
    const aoMudar = () => setRota(ler())
    window.addEventListener('hashchange', aoMudar)
    return () => window.removeEventListener('hashchange', aoMudar)
  }, [])
  return rota
}
