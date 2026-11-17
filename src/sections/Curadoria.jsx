import { entrada } from '../data'

export default function Curadoria() {
  const equipe = [
    {
      nome: "Sheila Pita",
      papel: "Curadoria geral, coordenação, pesquisa",
      foto: "/fotos/sheila.jpg",
    },
    {
      nome: "Muana Dandara Simões de Sousa",
      papel: "Curadoria e pesquisa",
      foto: "/fotos/dandara.jpg",
    },
    {
      nome: "Winny Sousa",
      papel: "Curadoria e pesquisa",
      foto: "/fotos/winny.jpg",
    },
    {
      nome: "Francisco Antonio de Oliveira Junior",
      papel: "Curadoria, design, pesquisa, programação e webdesign",
      foto: "/fotos/francisco.jpg",
    },
  ]

  return (
    <section id="curadoria" className="scroll-mt-16 border-b border-neutral-800">
      <div className="mx-auto max-w-5xl space-y-24 px-6 py-24">
        
        {/* Cabeçalho e Epígrafe */}
        <div className="space-y-8">
          <h2 className="font-serif text-4xl font-semibold sm:text-6xl">Curadoria</h2>
          
          <blockquote className="border-l-2 border-terracota-claro pl-6 italic text-areia-suave/90 font-serif text-xl sm:text-2xl leading-relaxed">
            "O que as águas cobriram, a escuta resgatou; porque a história de um povo não se afoga, transforma-se em maré de lembranças."
          </blockquote>
        </div>

        {entrada.textos.map((t) => (
          <article key={t.id} className="flex flex-col gap-8 lg:flex-row">
            <header className="lg:w-1/4">
              <h3 className="font-serif text-3xl text-terracota-claro">{t.titulo}</h3>
              <p className="mt-2 text-areia-fosca">por {t.autoria}</p>
            </header>
            <div className="space-y-5 text-lg text-areia-suave lg:w-3/4">
              {t.paragrafos.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </article>
        ))}

        {/* Ficha Técnica com Balões de Fotos */}
        <div className="space-y-12 border-t border-neutral-800 pt-16">
          <h3 className="font-serif text-3xl text-terracota-claro">Ficha Técnica</h3>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {equipe.map((membro, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-4">
                {/* Balão circular da foto */}
                <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-terracota-claro/50 bg-neutral-900 shadow-md transition-transform duration-300 hover:scale-105">
                  <img
                    src={membro.foto}
                    alt={`Foto de ${membro.nome}`}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Informações */}
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-medium text-areia-suave">{membro.nome}</h4>
                  <p className="text-sm text-areia-fosca">{membro.papel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}