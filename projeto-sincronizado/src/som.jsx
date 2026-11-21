import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { casaNova, entrada, fechamento, pilaoArcado, remanso, sentoSe, trilha } from './data'

// Trilha sonora ambiente: uma faixa por sala (a que estiver em `audio` de cada sala).
// Sala sem faixa, ou com arquivo ainda ausente, fica em silêncio.
const FAIXAS = {
  entrada: entrada.audio,
  curadoria: entrada.audio, // mesma faixa da Entrada: segue tocando, sem reiniciar
  'casa-nova': casaNova.audio,
  remanso: remanso.audio,
  'pilao-arcado': pilaoArcado.audio,
  'sento-se': sentoSe.audio,
  fechamento: fechamento.audio,
  trilha: trilha.audio,
}

const VOLUME = 0.45
const FADE_MS = 1400
const CHAVE = 'som-ambiente'

const lerPreferencia = () => {
  try {
    return localStorage.getItem(CHAVE) === 'on'
  } catch {
    return false
  }
}
const gravarPreferencia = (ligado) => {
  try {
    localStorage.setItem(CHAVE, ligado ? 'on' : 'off')
  } catch {
    /* sem armazenamento: segue sem lembrar */
  }
}

function rampa(audio, alvo, ms, aoTerminar) {
  clearInterval(audio._fade)
  const inicio = audio.volume
  const t0 = performance.now()
  audio._fade = setInterval(() => {
    const p = Math.min(1, (performance.now() - t0) / ms)
    audio.volume = Math.max(0, Math.min(1, inicio + (alvo - inicio) * p))
    if (p >= 1) {
      clearInterval(audio._fade)
      aoTerminar?.()
    }
  }, 50)
}

// Motor com dois elementos de áudio reutilizados: um sai (fade out) e outro entra (fade in).
// Reutilizar os elementos mantém a permissão de áudio dada pelo primeiro clique do visitante.
class Motor {
  constructor() {
    this.slots = [new Audio(), new Audio()]
    this.slots.forEach((a) => {
      a.loop = true
      a.preload = 'auto'
    })
    this.atual = 0
    this.alvo = null // src pretendido (marcado de forma síncrona)
    this.promessa = null
  }

  tocar(faixa) {
    if (!faixa) {
      this.parar()
      return Promise.resolve(null)
    }
    if (this.alvo === faixa.src && this.promessa) return this.promessa

    this.alvo = faixa.src
    const velho = this.slots[this.atual]
    const novo = this.slots[1 - this.atual]
    clearInterval(novo._fade)
    novo.pause()
    novo.src = faixa.src
    novo.currentTime = 0
    novo.volume = 0

    this.promessa = novo
      .play()
      .then(() => {
        this.atual = 1 - this.atual
        rampa(novo, VOLUME, FADE_MS)
        if (!velho.paused) rampa(velho, 0, FADE_MS, () => velho.pause())
        return faixa
      })
      .catch((erro) => {
        this.alvo = null
        this.promessa = null
        throw erro
      })
    return this.promessa
  }

  parar() {
    this.alvo = null
    this.promessa = null
    this.slots.forEach((a) => {
      if (!a.paused) rampa(a, 0, FADE_MS, () => a.pause())
    })
  }

  encerrar() {
    this.alvo = null
    this.promessa = null
    this.slots.forEach((a) => {
      clearInterval(a._fade)
      a.pause()
      a.removeAttribute('src')
    })
  }
}

const SomContexto = createContext(null)
export const useSom = () => useContext(SomContexto)

export function SomProvider({ sala, children }) {
  const motor = useRef(null)
  if (!motor.current) motor.current = new Motor()

  const [ativo, setAtivo] = useState(lerPreferencia)
  const [bloqueado, setBloqueado] = useState(false) // o navegador exige um toque antes de tocar
  const [tocando, setTocando] = useState(null) // faixa em execução
  const [midia, setMidia] = useState(false) // há outro áudio/vídeo da página tocando
  const faixa = FAIXAS[sala]

  const iniciar = useCallback(() => {
    motor.current
      .tocar(faixa)
      .then((f) => {
        setBloqueado(false)
        setTocando(f)
      })
      .catch((erro) => {
        if (erro?.name === 'NotAllowedError') setBloqueado(true)
        else setTocando(null) // arquivo ausente ou formato não suportado
      })
  }, [faixa])

  // Sala, ligado/desligado ou mídia falada mudaram: troca de faixa ou silencia.
  useEffect(() => {
    if (ativo && !midia && faixa) iniciar()
    else {
      motor.current.parar()
      setTocando(null)
    }
  }, [ativo, midia, faixa, iniciar])

  // Se o navegador bloqueou o som, o primeiro toque em qualquer lugar da página libera.
  useEffect(() => {
    if (!(ativo && bloqueado)) return undefined
    const liberar = () => iniciar()
    const eventos = ['pointerdown', 'keydown', 'touchstart']
    eventos.forEach((e) => window.addEventListener(e, liberar, { once: true }))
    return () => eventos.forEach((e) => window.removeEventListener(e, liberar))
  }, [ativo, bloqueado, iniciar])

  // Quando um player de fala (ex.: Material adicional) toca, a música ambiente dá lugar a ele.
  useEffect(() => {
    const emExecucao = new Set()
    const aoTocar = (e) => {
      emExecucao.add(e.target)
      setMidia(true)
    }
    const aoParar = (e) => {
      emExecucao.delete(e.target)
      if (emExecucao.size === 0) setMidia(false)
    }
    document.addEventListener('play', aoTocar, true)
    document.addEventListener('pause', aoParar, true)
    document.addEventListener('ended', aoParar, true)
    return () => {
      document.removeEventListener('play', aoTocar, true)
      document.removeEventListener('pause', aoParar, true)
      document.removeEventListener('ended', aoParar, true)
    }
  }, [])

  useEffect(() => () => motor.current?.encerrar(), [])

  // Chamado direto do clique do visitante (é o gesto que libera o áudio no navegador).
  const ligar = useCallback(() => {
    setAtivo(true)
    gravarPreferencia(true)
    iniciar()
  }, [iniciar])

  const desligar = useCallback(() => {
    setAtivo(false)
    gravarPreferencia(false)
    motor.current.parar()
    setTocando(null)
  }, [])

  const valor = useMemo(
    () => ({ ativo, bloqueado, tocando, ligar, desligar, alternar: () => (ativo ? desligar() : ligar()) }),
    [ativo, bloqueado, tocando, ligar, desligar]
  )

  return <SomContexto.Provider value={valor}>{children}</SomContexto.Provider>
}
