import { Component } from 'react'

// Se uma sala quebrar, o resto do site continua de pé e a mensagem do erro aparece aqui.
export default class ErroDeSala extends Component {
  state = { erro: null }

  static getDerivedStateFromError(erro) {
    return { erro }
  }

  componentDidCatch(erro, info) {
    console.error('Erro na sala:', erro, info?.componentStack)
  }

  render() {
    if (!this.state.erro) return this.props.children
    return (
      <section className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="text-4xl sm:text-6xl">Esta sala não carregou</h2>
        <p className="mt-6 text-lg text-areia-suave">
          Houve um erro ao montar a sala. As outras salas continuam funcionando. Se for você quem mantém o site, copie a mensagem abaixo.
        </p>
        <pre className="mt-6 overflow-x-auto whitespace-pre-wrap border border-neutral-700 bg-terra p-4 text-sm text-areia-suave">
          {String(this.state.erro?.stack ?? this.state.erro).split('\n').slice(0, 6).join('\n')}
        </pre>
        <a href="#entrada" className="btn mt-8">
          Voltar à entrada
        </a>
      </section>
    )
  }
}
