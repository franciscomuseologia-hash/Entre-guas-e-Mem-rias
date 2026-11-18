// Utilidades da ficha técnica: a string de créditos vira pares rótulo/valor.

const ABERTO = /\[a confirmar\]|a confirmar/i

export function lerFicha(creditos = '') {
  return creditos
    .split(' · ')
    .map((seg) => {
      const i = seg.indexOf(': ')
      return i > 0
        ? { rotulo: seg.slice(0, i), valor: seg.slice(i + 2) }
        : { rotulo: 'Nota', valor: seg }
    })
    .map((p) => ({ ...p, aberto: ABERTO.test(p.valor), valor: p.valor.replace(/\[|\]/g, '') }))
}

function formatarData(valor = '') {
  if (ABERTO.test(valor)) return ''
  if (/^\[?19--\]?$/.test(valor)) return 'século XX'
  return valor.replace(/\[|\]/g, '')
}

// Linha curta que fica sob a foto, como a etiqueta de parede de uma exposição.
export function rotuloCurto(creditos) {
  const itens = lerFicha(creditos)
  const data = formatarData(itens.find((i) => i.rotulo === 'Data')?.valor)
  const acervoBruto = itens.find((i) => i.rotulo === 'Acervo')?.valor ?? ''
  const acervo = acervoBruto.split(',')[0].replace(/\s*\(.*\)\s*$/, '').trim()
  return [data, acervo].filter(Boolean).join(', ')
}
