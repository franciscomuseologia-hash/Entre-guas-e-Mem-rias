import { useEffect, useRef, useState } from 'react'

// O Leaflet é carregado do CDN quando a sala da Trilha abre. Assim o projeto não precisa de
// "npm install" extra e, se o CDN estiver fora do ar, só o mapa falha (o resto do site segue).
const LEAFLET_CSS = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
const LEAFLET_JS = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'

// Tiles do OpenStreetMap: gratuitos para uso leve, com crédito obrigatório. Para muito acesso, use um
// provedor com chave (MapTiler, Stadia...) e coloque o endereço em VITE_MAPA_TILES no .env.
const TILES_URL = import.meta.env.VITE_MAPA_TILES || 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
const TILES_CREDITO =
  import.meta.env.VITE_MAPA_CREDITO ||
  '&copy; contribuidores do <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'

let carregando = null
function carregarLeaflet() {
  if (window.L) return Promise.resolve(window.L)
  if (!carregando) {
    carregando = new Promise((ok, erro) => {
      const css = document.createElement('link')
      css.rel = 'stylesheet'
      css.href = LEAFLET_CSS
      document.head.appendChild(css)
      const js = document.createElement('script')
      js.src = LEAFLET_JS
      js.async = true
      js.onload = () => ok(window.L)
      js.onerror = () => {
        carregando = null
        erro(new Error('Não foi possível carregar o mapa.'))
      }
      document.head.appendChild(js)
    })
  }
  return carregando
}

// Mapa real do lago, com as sedes atuais das quatro cidades como portas de entrada das alas.
// Os tiles vêm do CARTO (dados do OpenStreetMap) e precisam de internet.
export default function MapaReal({ pontos, ordem, centro, zoom, googleUrl }) {
  const alvo = useRef(null)
  const [falha, setFalha] = useState(false)

  useEffect(() => {
    let mapa
    let cancelado = false

    carregarLeaflet()
      .then((L) => {
        if (cancelado || !alvo.current) return
        mapa = L.map(alvo.current, {
          center: centro,
          zoom,
          minZoom: 6,
          maxZoom: 12,
          scrollWheelZoom: false, // não prende a rolagem da página
          dragging: !L.Browser.mobile, // no celular, um dedo continua rolando a página
          tap: false,
        })

        L.tileLayer(TILES_URL, {
          maxZoom: 14,
          attribution: TILES_CREDITO,
        }).addTo(mapa)

        const porId = Object.fromEntries(pontos.map((p) => [p.id, p]))
        const caminho = ordem.map((id) => [porId[id].lat, porId[id].lng])
        L.polyline(caminho, { color: '#E9C38A', weight: 2.5, opacity: 0.9, dashArray: '2 9', lineCap: 'round' }).addTo(mapa)

        pontos.forEach((p) => {
          const icone = L.divIcon({
            className: 'mk-wrap',
            html: `<span class="mk mk--${p.lado ?? 'baixo'}"><span class="mk__pulse"></span><span class="mk__dot"></span><span class="mk__nome">${p.curto}</span></span>`,
            iconSize: [20, 20],
            iconAnchor: [10, 10],
          })
          L.marker([p.lat, p.lng], {
            icon: icone,
            keyboard: true,
            riseOnHover: true,
            title: `${p.curto}: ${p.pronta ? 'entrar na ala' : 'ala em preparação'}`,
          })
            .addTo(mapa)
            .on('click', () => {
              window.location.hash = `#${p.sala}`
            })
        })

        mapa.fitBounds(L.latLngBounds(caminho), { padding: [60, 60], maxZoom: 9 })
      })
      .catch(() => !cancelado && setFalha(true))

    return () => {
      cancelado = true
      if (mapa) mapa.remove()
    }
  }, [pontos, ordem, centro, zoom])

  if (falha)
    return (
      <div className="flex h-[26rem] flex-col items-center justify-center gap-3 border border-neutral-800 p-6 text-center text-areia-fosca sm:h-[34rem]">
        <p>O mapa não carregou. Confira a conexão e tente de novo.</p>
        {googleUrl && (
          <a href={googleUrl} target="_blank" rel="noreferrer" className="btn">
            Abrir no Google Maps
          </a>
        )}
      </div>
    )

  return (
    <div
      ref={alvo}
      role="application"
      aria-label="Mapa do lago de Sobradinho com as quatro cidades"
      className="mapa-real h-[26rem] w-full border border-neutral-800 sm:h-[34rem]"
    />
  )
}
