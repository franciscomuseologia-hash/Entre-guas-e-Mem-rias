// Todo o conteúdo da exposição fica aqui. Para usar fotos reais, preencha `src`
// (ex.: '/fotos/casa-nova-01.jpg', com o arquivo em public/fotos) e `creditos`.
// Para os áudios, coloque os arquivos em public/audio e ajuste `audio.src`.

export const FUNDOS = {
  rio: 'linear-gradient(160deg,#2a6f97 0%,#1B4965 55%,#0c1a23 100%)',
  terra: 'linear-gradient(160deg,#C85A32 0%,#6b2c14 55%,#1d0e08 100%)',
  entardecer: 'linear-gradient(200deg,#d28a5f 0%,#1B4965 60%,#121212 100%)',
  barro: 'linear-gradient(170deg,#8a5a35 0%,#3b2415 70%,#150d08 100%)',
  seca: 'linear-gradient(180deg,#d9b88a 0%,#8a5a35 55%,#2a1a0f 100%)',
  noite: 'linear-gradient(180deg,#24506b 0%,#10222e 70%,#0a0f13 100%)',
}

const CREDITOS = '[AUTORIA · ANO · ACERVO · TÉCNICA]'

const foto = (cidade, id, titulo, legenda, fundo, altura = 280) => ({
  id: `${cidade}-${id}`,
  cidade,
  titulo,
  legenda,
  fundo,
  altura,
  src: null,
  creditos: CREDITOS,
})

export const entrada = {
  titulo: 'Entre Águas e Memórias',
  subtitulo: 'Remanso, Casa Nova, Sento Sé e Pilão Arcado: histórias de vidas e pertencimentos.',
  audio: { src: '/audio/sobradinho.mp3', titulo: 'Canção “Sobradinho”' },
  textos: [
    {
      id: 'curatorial-1',
      titulo: 'Texto curatorial',
      autoria: 'Sheila Pita',
      paragrafos: [
        'Uma cidade não é constituída apenas por suas construções, ruas e paisagens. Ela é formada, sobretudo, pelas pessoas que a habitam, pelas relações que estabelecem entre si, pelas experiências compartilhadas e pelas memórias que constroem ao longo do tempo.',
        'Às margens do rio São Francisco, as antigas cidades de Remanso, Casa Nova, Sento Sé e Pilão Arcado desenvolveram suas próprias histórias, identidades e modos de vida. Seus territórios abrigavam espaços de convivência, práticas culturais, atividades econômicas, relações familiares e manifestações de pertencimento que constituíam a identidade de suas populações.',
        'Na década de 1970, a construção da barragem de Sobradinho promoveu profundas transformações na região. Associada a um projeto de desenvolvimento energético, a obra modificou a paisagem e provocou a inundação das antigas sedes municipais, exigindo o deslocamento de milhares de pessoas de forma compulsória e a reconstrução de suas vidas em novos territórios.',
        'Entretanto, o desaparecimento físico de ruas, casas e espaços de convivência não representou o fim das histórias construídas nesses lugares. Permaneceram as lembranças, os vínculos afetivos, as referências culturais e as narrativas daqueles que vivenciaram a transformação de seus territórios.',
        'Entre Águas e Memórias propõe um percurso visual e audiovisual pelas histórias dessas quatro cidades, utilizando fotografias e vídeos como testemunhos de um passado que permanece presente nas lembranças de seus antigos habitantes e nas gerações que herdaram essas memórias.',
        'Mais do que apresentar os efeitos da construção da barragem, esta exposição busca reconhecer as experiências humanas envolvidas nesse processo, evidenciando as relações entre território, identidade, deslocamento e pertencimento. As imagens tornam-se caminhos para revisitar lugares, reconhecer histórias e compreender as dimensões sociais e culturais de uma transformação que ultrapassou os limites da paisagem.',
        'Ao reunir diferentes registros e narrativas, a exposição convida o visitante a refletir sobre o que significa perder um território, reconstruir uma vida e preservar a memória de um lugar que já não existe fisicamente da mesma maneira.',
        'Porque territórios não são apenas espaços geográficos: são lugares de vida, de identidade e de memória. E, mesmo quando transformados pelas águas, continuam existindo na história daqueles que os construíram.',
      ],
    },
    {
      id: 'curatorial-2',
      titulo: 'Proposta museológica',
      autoria: 'Francisco Oliveira',
      paragrafos: [
        'Esta proposta fundamenta-se nos princípios da Museologia Social e da Ecomuseologia, compreendendo o território como o principal objeto museológico e a comunidade como protagonista da construção do discurso expositivo.',
        'Desenvolvemos esta pesquisa por meio de levantamento bibliográfico e fotográfico, além do patrimônio existente nas áreas remanescentes das antigas cidades. Desejamos futuramente que os moradores participem como colaboradores na seleção de fotografias, objetos, narrativas e percursos, fortalecendo o caráter coletivo da exposição.',
        'Outro objetivo, para além da exposição, foi gerar um percurso expositivo, que será organizado de maneira sequencial, permitindo que o visitante caminhe pelas ruínas enquanto diferentes dispositivos interpretativos revelam as camadas históricas da paisagem. Ao longo do trajeto, recursos sonoros, audiovisuais e instalações artísticas complementarão a experiência, favorecendo uma leitura sensível do território.',
        'Durante os períodos de seca, a maior parte das ruínas se torna visível, o que aponta um duplo sentido por trás da elaboração do espaço: uma exposição com os núcleos expográficos detalhados neste projeto, além de uma trilha expográfica pensada na mediação entre visitante e território, na qual as ruínas da região contam a história da tensionalidade de renda, desenvolvimento, vida e pertencimento.',
        'A trilha expográfica foi projetada de forma fracionada para facilitar o acesso e adaptada para garantir acessibilidade e acesso à cultura, além da sazonalidade da região, que em períodos de seca revela maiores trechos das ruínas, pensando em como podemos explicitar os impactos da seca na vida cotidiana do trabalho.',
      ],
    },
  ],
  nota: 'As imagens desta versão são ilustrativas, com espaços reservados para o acervo fotográfico, os créditos e os relatos orais.',
}

export const casaNova = {
  id: 'casa-nova',
  titulo: 'Casa Nova',
  intro:
    'Beira de rio, quintal aberto, rua de chão batido. Aqui a memória é feita de gestos pequenos: a rede armada, o barco na margem, o largo em dia de festa.',
  audio: { src: '/audio/casa-nova.mp3', titulo: 'Paisagem sonora de Casa Nova' },
  fotos: [
    foto('Casa Nova', 1, 'Margem ao entardecer', 'O rio ensinou a casa a esperar a cheia; a barragem ensinou a casa a viver debaixo dela.', FUNDOS.entardecer, 340),
    foto('Casa Nova', 2, 'Mãos que ainda tecem', 'Um ofício que atravessa a água: o gesto permanece quando o chão muda de lugar.', FUNDOS.terra, 240),
    foto('Casa Nova', 3, 'Rua de chão batido', 'Registro do traçado urbano antigo, hoje conhecido apenas pela memória de quem andou nele.', FUNDOS.barro, 300),
    foto('Casa Nova', 4, 'Barco na margem', 'O barco esperava o rio; o rio virou lago e a espera mudou de natureza.', FUNDOS.rio, 380),
    foto('Casa Nova', 5, 'Quintal e cerca', 'Fronteira simples de varas e arame, última linha entre a casa e o caminho.', FUNDOS.seca, 230),
    foto('Casa Nova', 6, 'Festa de largo', 'O largo era sala comum da cidade; reunir-se ali era também uma forma de pertencer.', FUNDOS.noite, 300),
  ],
}

export const remanso = {
  id: 'remanso',
  titulo: 'Remanso',
  intro:
    'Cidade de beira de rio, voltada para a água. Os relatos abaixo ocupam o espaço onde ficarão as vozes de quem fez a travessia.',
  audio: { src: '/audio/remanso.mp3', titulo: 'Paisagem sonora de Remanso' },
  fotos: [
    foto('Remanso', 1, 'O rio como estrada', 'Antes do lago, o São Francisco era caminho, mercado e conversa entre as margens.', FUNDOS.rio),
    foto('Remanso', 2, 'Casario à beira d’água', 'Fachadas voltadas para o rio, como quem sempre soube de onde vinha o futuro.', FUNDOS.entardecer),
    foto('Remanso', 3, 'A mudança', 'Carregar a casa nas costas, em carros e canoas: o êxodo como paisagem.', FUNDOS.terra),
    foto('Remanso', 4, 'Nova margem', 'Uma cidade refeita mais acima, olhando para o lugar onde esteve.', FUNDOS.noite),
  ],
  relatos: [
    { texto: '[Espaço reservado para a transcrição de um relato oral sobre a travessia.]', autor: 'Depoente · idade · data da gravação' },
    { texto: '[Espaço reservado para um relato sobre a casa, a rua e os vizinhos.]', autor: 'Depoente · idade · data da gravação' },
    { texto: '[Espaço reservado para um relato sobre o dia da mudança.]', autor: 'Depoente · idade · data da gravação' },
  ],
}

export const pilaoArcado = {
  id: 'pilao-arcado',
  titulo: 'Pilão Arcado',
  intro:
    'Selecione uma fotografia para ampliá-la e ler a legenda. Cada imagem abre um fragmento da cidade que ficou sob o lago.',
  audio: { src: '/audio/pilao-arcado.mp3', titulo: 'Paisagem sonora de Pilão Arcado' },
  fotos: [
    foto('Pilão Arcado', 1, 'A igreja e o largo', 'Torre e adro de uma cidade que hoje só se alcança pelo relato.', FUNDOS.seca),
    foto('Pilão Arcado', 2, 'Feira de sábado', 'Balaios, panos e vozes: o comércio como forma de encontro.', FUNDOS.terra),
    foto('Pilão Arcado', 3, 'Casa de farinha', 'Memória técnica do trabalho coletivo: raspar, prensar, torrar.', FUNDOS.barro),
    foto('Pilão Arcado', 4, 'Caminho da água', 'A rua que descia ao rio, e o rio que subiu à rua.', FUNDOS.rio),
    foto('Pilão Arcado', 5, 'Cemitério antigo', 'Lugar de despedida que também foi deslocado, ou deixado para trás.', FUNDOS.noite),
    foto('Pilão Arcado', 6, 'Último verão', 'O retrato de quem soube que era a última estação ali.', FUNDOS.entardecer),
  ],
}

const par = (id, titulo, antes, depois) => ({
  id,
  titulo,
  antes: foto('Sento Sé', `${id}-antes`, `${titulo}: antes`, antes, FUNDOS.rio, 300),
  depois: foto('Sento Sé', `${id}-depois`, `${titulo}: ruínas na seca`, depois, FUNDOS.seca, 300),
})

export const sentoSe = {
  id: 'sento-se',
  titulo: 'Sento Sé',
  intro:
    'Quando o lago recua em anos de seca, os alicerces voltam. Em cada par, à esquerda a cidade como era; à direita, a ruína que emerge.',
  audio: { src: '/audio/sento-se.mp3', titulo: 'Paisagem sonora de Sento Sé' },
  pares: [
    par('praca', 'A praça', 'A praça cheia, com a vida da cidade acontecendo ao ar livre.', 'Alicerces de pedra emergem do barro rachado quando o lago recua.'),
    par('igreja', 'A igreja', 'A matriz como ponto de referência visível de longe.', 'Paredes baixas e marcas de piso reaparecem em meio à seca.'),
    par('rua', 'A rua das casas', 'Calçadas, portas abertas e o ritmo das conversas de fim de tarde.', 'Fileiras de fundações desenham de novo o traçado da rua.'),
  ],
}

export const trilha = {
  id: 'trilha',
  titulo: 'Trilha expográfica',
  intro:
    'Um percurso sequencial pelas áreas remanescentes das antigas cidades, pensado para ser feito em trechos. Na seca, as ruínas emergem e a trilha ganha novos pontos de leitura.',
  mapa: {
    // Mapa incorporado do Google. Troque `consulta` por um link de "Meu Mapa" com a rota
    // quando ela estiver desenhada (Google > Meus Mapas > Compartilhar > Incorporar).
    consulta: 'Lago de Sobradinho, Bahia',
    legenda: '[Rota expográfica: pontos e trechos a definir entre Casa Nova, Remanso, Pilão Arcado e Sento Sé]',
  },
}

export const fechamento = {
  id: 'fechamento',
  titulo: 'Ecomuseologia',
  texto:
    'Pensar Sobradinho como ecomuseu é entender o território inteiro como acervo: o lago, as ruínas, os caminhos de mudança e as pessoas que carregam a cidade antiga na fala. O museu, aqui, não tem paredes; tem margem.',
  citacao: 'A água cobriu o chão, mas nunca alcançou a memória.',
  autoria: 'Epígrafe curatorial desta exposição',
  rodape: 'Protótipo de exposição virtual · imagens ilustrativas · [CRÉDITOS DO ACERVO]',
}

export const circuito = [
  { id: 'entrada', rotulo: 'Entrada' },
  { id: 'curadoria', rotulo: 'Curadoria' },
  { id: 'casa-nova', rotulo: 'Casa Nova' },
  { id: 'remanso', rotulo: 'Remanso' },
  { id: 'pilao-arcado', rotulo: 'Pilão Arcado' },
  { id: 'sento-se', rotulo: 'Sento Sé' },
  { id: 'trilha', rotulo: 'Trilha' },
  { id: 'fechamento', rotulo: 'Fechamento' },
]
