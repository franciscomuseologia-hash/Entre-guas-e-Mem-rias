import { useEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { circuito } from './data'

const ids = circuito.map((c) => c.id)

// Rota pelo hash da URL: #sala ou #sala/aba (ex.: #casa-nova/ruinas).
function ler() {
  const [sala, aba] = window.location.hash.replace('#', '').split('/')
  return { sala: ids.includes(sala) ? sala : ids[0], aba: aba || null }
}

export function useRota() {
  const [rota, setRota] = useState(ler)
  const atual = useRef(rota)
  atual.current = rota

  useEffect(() => {
    const aoMudar = () => {
      const nova = ler()
      const velha = atual.current
      if (nova.sala === velha.sala && nova.aba === velha.aba) return

      const mesmaSala = nova.sala === velha.sala
      // Para a frente a sala nova entra pela direita; para trás, pela esquerda.
      const dir = ids.indexOf(nova.sala) >= ids.indexOf(velha.sala) ? 1 : -1

      // Sem View Transitions (navegadores antigos): troca direto.
      if (!document.startViewTransition) {
        setRota(nova)
        return
      }

      const raiz = document.documentElement
      raiz.dataset.transicao = mesmaSala ? 'aba' : 'sala'
      raiz.style.setProperty('--dir', String(dir))

      const transicao = document.startViewTransition(() => {
        flushSync(() => setRota(nova))
        if (!mesmaSala) window.scrollTo({ top: 0, behavior: 'instant' })
      })
      transicao.finished.finally(() => {
        delete raiz.dataset.transicao
      })
    }
    window.addEventListener('hashchange', aoMudar)
    return () => window.removeEventListener('hashchange', aoMudar)
  }, [])

  return rota
}
