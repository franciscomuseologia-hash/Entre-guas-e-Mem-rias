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
  audio: { src: '/audio/passeando-pelo-nordeste.mp3', titulo: '“Passeando pelo Nordeste”, Edmilson do Pífano' },
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

// Fotografia real: o arquivo fica em public/fotos/casa-nova/. `creditos` é a ficha iconográfica;
// campos entre colchetes ainda precisam ser confirmados na página de origem (`fonte`).
const AC = '[a confirmar]'
const real = ({ id, arquivo, titulo, legenda, alt, creditos, fonte }) => ({
  id: `casa-nova-${id}`,
  cidade: 'Casa Nova',
  titulo,
  legenda,
  alt: alt ?? titulo,
  src: `/fotos/casa-nova/${arquivo}`,
  creditos,
  fonte,
})

const IBGE = (id, ano, tipo = 'fotografia em preto e branco', nota) =>
  `Autoria: ${AC} · Data: ${ano} · Acervo: IBGE, Biblioteca, Acervo dos municípios brasileiros (ID ${id}) · Técnica: ${tipo}${nota ? ` · ${nota}` : ''}`
const LOC = 'Localização na sala: [a confirmar]'
const MEM_ELET = (extra) => `Autoria: ${AC} · Data: ${AC} · Acervo: Memória da Eletricidade · Técnica: fotografia colorida${extra ? ` · ${extra}` : ''}`
const URL_IBGE = (id) => `https://biblioteca.ibge.gov.br/index.php/biblioteca-catalogo?view=detalhes&id=${id}`

const FICHA_NV = `Autoria: ${AC} · Data: ${AC} · Acervo: Notícias do Vale (Instagram) · Técnica: fotografia colorida (possível restauração ou colorização digital, a confirmar)`
const URL_NV = 'https://www.instagram.com/p/Dc1oQkolNeV/'

const grupos = [
  {
    id: 'travessia',
    titulo: 'A travessia do São Francisco',
    texto:
      'Durante boa parte do século XX, ir de Casa Nova a Juazeiro era questão de barco, vapor ou caminhão. O rio era estrada, e a travessia, parte do cotidiano.',
    fotos: [
      real({
        id: 'travessia',
        arquivo: 'travessia.jpg',
        titulo: 'Barca do Rio de S. Francisco',
        legenda: 'Barca com cobertura de palha e figura esculpida na proa, atracada à margem do São Francisco. No cartão-suporte, a inscrição manuscrita “Barca do Rio de S. Francisco”.',
        alt: 'Fotografia antiga em preto e branco de uma barca de madeira com cobertura de palha, atracada à margem de um rio; a imagem está colada em um cartão com a legenda manuscrita Barca do Rio de S. Francisco.',
        creditos: 'Autoria: Reginald Gorham · Data: [ca. 1927] · Acervo: Biblioteca Nacional (Brasil), Brasiliana Fotográfica · Técnica: cópia fotográfica em gelatina e prata, preto e branco, 8 x 13,6 cm (cartão-suporte 15,8 x 22,5 cm) · Localidade: Rio São Francisco, Bahia, Brasil',
        fonte: 'https://brasilianafotografica.bn.gov.br/brasiliana/handle/20.500.12156.1/2863',
      }),
    ],
  },
  {
    id: 'passado',
    titulo: 'Antes da barragem: o passado',
    texto:
      'A cidade de ruas largas e casario baixo, com a torre da matriz como referência visível de longe. Segundo a prefeitura, a localidade surgiu no século XIX a partir do sal.',
    fotos: [
      real({
        id: 'rua-igreja',
        arquivo: 'passado-rua-igreja.jpg',
        titulo: 'Rua calçada e a torre da igreja',
        legenda: 'Rua com árvores, postes e pessoas a pé; ao fundo, a torre da igreja.',
        alt: 'Rua calçada com árvores à esquerda, postes, casario à direita e a torre de uma igreja ao fundo.',
        creditos: IBGE('28427', '[19--]', undefined, 'título no catálogo: a confirmar'),
        fonte: URL_IBGE(428427),
      }),
      real({
        id: 'rua-caminhao',
        arquivo: 'passado-rua-caminhao.jpg',
        titulo: 'Rua Hermógenes Viana',
        legenda: 'Rua Hermógenes Viana, no Bairro do Tabuleiro: rua de terra batida, com um caminhão à frente e a torre da igreja ao fundo.',
        alt: 'Rua larga de terra com um caminhão ao fundo, árvores e uma torre de igreja.',
        creditos: IBGE('28431', '[19--]'),
        fonte: URL_IBGE(428431),
      }),
      real({
        id: 'panorama',
        arquivo: 'passado-panorama.jpg',
        titulo: 'Vista parcial da cidade',
        legenda: 'Vista panorâmica do casario e da torre da igreja, com a escarpa ao fundo e a vegetação em primeiro plano.',
        alt: 'Panorama distante da cidade com casas baixas, uma torre de igreja e um paredão rochoso ao fundo.',
        creditos: IBGE('28434', '[19--]'),
        fonte: URL_IBGE(428434),
      }),
      real({
        id: 'hospital',
        arquivo: 'passado-hospital.jpg',
        titulo: 'Hospital Regional',
        legenda: 'Edifício do Hospital Regional, de três corpos com telhados em quatro águas, cercado de mato.',
        alt: 'Edifício branco de três corpos com a inscrição Hospital Regional na fachada e vegetação rasteira à frente.',
        creditos: IBGE('28436', '1957'),
        fonte: URL_IBGE(428436),
      }),
      real({
        id: 'rua-arcos',
        arquivo: 'passado-rua-arcos.jpg',
        titulo: 'Rua dos arcos',
        legenda: 'Rua de terra com muro de varas, edificações com arcos e a torre da igreja ao longe.',
        alt: 'Rua de terra com um caminhão à esquerda, cercas de varas, um edifício com arcos e a torre da igreja ao fundo.',
        creditos: IBGE('28437', '[a confirmar]', undefined, 'sem título no catálogo'),
        fonte: URL_IBGE(428437),
      }),
      real({
        id: 'matriz-rua',
        arquivo: 'passado-matriz-rua.jpg',
        titulo: 'Igreja Matriz',
        legenda:
          'A igreja matriz ao fundo de uma rua larga, entre postes e casas. Segundo relato publicado pela Agência Brasil, a antiga matriz foi implodida porque a altura da torre poderia oferecer risco à navegação.',
        alt: 'Rua larga de terra com postes de energia e, ao fundo, uma igreja branca com torre.',
        creditos: IBGE('28429', '[19--]'),
        fonte: URL_IBGE(428429),
      }),
      real({
        id: 'matriz-fachada',
        arquivo: 'passado-matriz-fachada.jpg',
        titulo: 'Igreja Matriz, fachada',
        legenda: 'Fachada frontal da matriz, com torre sineira e frontão ornamentado; duas pessoas atravessam o largo.',
        alt: 'Fachada branca de igreja com torre sineira, frontão decorado e duas pessoas em frente.',
        creditos: IBGE('28435', '1957'),
        fonte: URL_IBGE(428435),
      }),
    ],
  },
  {
    id: 'cotidiano',
    titulo: 'Cenas do cotidiano',
    texto:
      'O rio, a feira, o campo de bola e a rua calçada: cenas do dia a dia reunidas pelo acervo digital do Notícias do Vale.',
    fotos: [
      real({
        id: 'nv-porto',
        arquivo: 'acervo-nv-1.jpg',
        titulo: 'Embarcações na margem do rio',
        legenda: 'Barcos de madeira atracados na margem arenosa, com pessoas caminhando entre as embarcações e arbustos floridos em primeiro plano.',
        alt: 'Margem arenosa de um rio com barcos de madeira e mastros, pessoas caminhando e arbustos com flores rosadas em primeiro plano.',
        creditos: FICHA_NV,
        fonte: URL_NV,
      }),
      real({
        id: 'nv-jumentos',
        arquivo: 'acervo-nv-2.jpg',
        titulo: 'Jumentos junto ao muro de pedra',
        legenda: 'Um homem conduz jumentos ao lado de um muro de pedra; ao fundo, construções baixas e brancas.',
        alt: 'Dois jumentos com um cavaleiro em uma estrada de terra ao lado de um muro de pedra, com edificações brancas ao fundo.',
        creditos: FICHA_NV,
        fonte: URL_NV,
      }),
      real({
        id: 'nv-rua',
        arquivo: 'acervo-nv-3.jpg',
        titulo: 'Rua calçada e casario',
        legenda: 'Rua de paralelepípedos entre casas coloridas; um homem de chapéu na porta e um caminhão estacionado à direita.',
        alt: 'Rua calçada com casario baixo e colorido, um homem de chapéu à porta de uma casa e um caminhão de carroceria de madeira à direita.',
        creditos: FICHA_NV,
        fonte: URL_NV,
      }),
      real({
        id: 'nv-futebol',
        arquivo: 'acervo-nv-4.jpg',
        titulo: 'Jogo no campo de terra',
        legenda: 'Partida em campo de terra batida, com a plateia reunida em toda a borda e o casario ao fundo.',
        alt: 'Jogadores em um campo de terra, uma multidão alinhada ao fundo e casas brancas na colina.',
        creditos: FICHA_NV,
        fonte: URL_NV,
      }),
      real({
        id: 'nv-feira',
        arquivo: 'acervo-nv-5.jpg',
        titulo: 'Dia de feira',
        legenda: 'Feira com cestos, frutas e verduras, rodeada de pessoas conversando sob toldos.',
        alt: 'Cena de feira ao ar livre, com um cesto de palha em primeiro plano, bancas de frutas e verduras e muitas pessoas.',
        creditos: FICHA_NV,
        fonte: URL_NV,
      }),
      real({
        id: 'nv-igreja',
        arquivo: 'acervo-nv-6.jpg',
        titulo: 'A igreja e a rua',
        legenda: 'Igreja de torre sineira com cúpula ao fim de uma rua larga; pedestres, crianças e um automóvel ao longe.',
        alt: 'Igreja branca com torre sineira ao fundo de uma rua larga, com pessoas na calçada e um carro pequeno.',
        creditos: FICHA_NV,
        fonte: URL_NV,
      }),
    ],
  },
  {
    id: 'barragem',
    titulo: 'A barragem',
    texto:
      'A barragem de Sobradinho formou o lago que cobriu a sede original de Casa Nova, além de Remanso, Pilão Arcado e Sento Sé.',
    fotos: [
      real({
        id: 'barragem',
        arquivo: 'barragem.jpg',
        titulo: 'Sobradinho: a barragem e o lago',
        legenda:
          'Vista aérea da barragem de Sobradinho, descrita na própria fotografia como garantia de vazão para as usinas da Chesf e elo da interligação dos sistemas elétricos Norte e Nordeste.',
        alt: 'Vista aérea da barragem de Sobradinho, com o lago à esquerda e a subestação e o canal à direita.',
        creditos: MEM_ELET('título no acervo: “Lago de Sobradinho”'),
        fonte: 'https://memoriadaeletricidade.com.br/acervo/118085/lago-de-sobradinho',
      }),
    ],
  },
  {
    id: 'nova-cidade',
    titulo: 'A nova cidade e a realocação',
    texto:
      'Entre 1975 e 1977, quase 12 mil famílias de Casa Nova, Remanso, Pilão Arcado e Sento Sé foram obrigadas a deixar suas casas. As novas sedes foram construídas pela Chesf, e Casa Nova passou a ficar à beira da BR-235.',
    fotos: [
      real({
        id: 'nova-aerea',
        arquivo: 'nova-vista-aerea.jpg',
        titulo: 'Vista aérea da nova Casa Nova',
        legenda: 'Vista aérea da nova cidade, “relocada para a formação do lago de Sobradinho”, com o traçado em quadras e o lago ao fundo.',
        alt: 'Vista aérea de uma cidade planejada, com ruas em curva, quadras regulares e o lago ao fundo.',
        creditos: MEM_ELET('título no acervo: “Cidade de Casa Nova”'),
        fonte: 'https://memoriadaeletricidade.com.br/acervo/118081/cidade-de-casa-nova',
      }),
      real({
        id: 'nova-praca',
        arquivo: 'nova-praca.jpg',
        titulo: 'Praça principal e prédios públicos',
        legenda: 'Praça pavimentada com blocos intertravados e os prédios públicos da nova cidade.',
        alt: 'Praça ampla pavimentada com blocos hexagonais, canteiros, pessoas ao longe e edifícios públicos baixos.',
        creditos: MEM_ELET('título no acervo: “Cidade de Casa Nova”'),
        fonte: 'https://memoriadaeletricidade.com.br/acervo/118082/cidade-de-casa-nova',
      }),
      real({
        id: 'nova-igreja',
        arquivo: 'nova-igreja.jpg',
        titulo: 'Igreja Católica da nova cidade',
        legenda: 'A igreja da nova Casa Nova, de linhas modernas, com torre sineira e esquadrias em arco.',
        alt: 'Igreja moderna branca com torre sineira vazada, janelas em arco e telhado de telhas, sob um céu com nuvens.',
        creditos: MEM_ELET('título no acervo: “Cidade de Casa Nova”'),
        fonte: 'https://memoriadaeletricidade.com.br/acervo/118083/cidade-de-casa-nova',
      }),
      real({
        id: 'nova-edificio',
        arquivo: 'nova-edificio-praca.jpg',
        titulo: 'Prefeitura e Câmara Municipal',
        legenda: 'Prefeitura e Câmara Municipal, na Praça Três: edifício baixo e branco, com mastros de bandeira diante de uma praça pavimentada, sob nuvens pesadas.',
        alt: 'Praça pavimentada em primeiro plano e, ao fundo, um edifício baixo e branco com mastros de bandeira sob céu nublado.',
        creditos: IBGE('28441', '[19--]', 'fotografia colorida', LOC),
        fonte: URL_IBGE(428441),
      }),
      real({
        id: 'nova-rua',
        arquivo: 'nova-rua.jpg',
        titulo: 'Praça Três',
        legenda: 'Praça Três: rua calçada com carros estacionados, entre árvores e um espaço gramado.',
        alt: 'Rua de paralelepípedos com carros estacionados à esquerda, árvores e uma praça gramada à direita.',
        creditos: IBGE('28442', '[19--]', 'fotografia colorida', LOC),
        fonte: URL_IBGE(428442),
      }),
      real({
        id: 'nova-igreja-praca',
        arquivo: 'nova-igreja-praca.jpg',
        titulo: 'A igreja e a praça',
        legenda: 'A igreja ao fundo de uma praça gramada; um ciclista cruza o calçamento em primeiro plano.',
        alt: 'Praça gramada cercada por calçada de blocos, com uma igreja ao fundo e um homem de bicicleta à direita.',
        creditos: IBGE('28443', '[a confirmar]', 'fotografia colorida', 'sem título no catálogo · ' + LOC),
        fonte: URL_IBGE(428443),
      }),
    ],
  },
  {
    id: 'ruinas',
    titulo: 'As ruínas',
    texto:
      'Em 2015, com o lago a pouco mais de 1% da capacidade, as ruínas da antiga Casa Nova apareceram. Segundo a reportagem, foi a primeira vez em quase 40 anos de barragem.',
    fotos: [
      real({
        id: 'ruinas',
        arquivo: 'ruinas-2015.jpg',
        titulo: 'Ruínas de Casa Nova',
        legenda:
          'Alicerces, pedras e estacas de madeira da antiga cidade expostos pela seca à beira do lago, em dezembro de 2015.',
        alt: 'Margem do lago coberta de pedras e tijolos, estacas de madeira, um muro de alvenaria, um cachorro e, ao fundo, a água e uma serra plana.',
        creditos: 'Autoria: Marcello Casal Jr · Data: dez. 2015 · Acervo: Agência Brasil · Técnica: fotografia colorida digital',
        fonte: 'https://agenciabrasil.ebc.com.br/es/node/991963',
      }),
    ],
  },
]

const URL_MAPA_IBGE =
  'https://geoftp.ibge.gov.br/cartas_e_mapas/mapas_para_fins_de_levantamentos_estatisticos/censo_demografico_2022/mapas_municipais_estatisticos/BA/casa_nova_2907202/casa_nova_2907202_mme_a0.pdf'

const mapa = {
  titulo: 'O território',
  texto:
    'Casa Nova ocupa 9.657,51 km², um dos maiores municípios da Bahia em extensão. No mapa, o lago de Sobradinho domina o sul do território e a sede aparece em sua margem, onde a cidade foi refeita.',
  foto: real({
    id: 'mapa',
    arquivo: 'mapa-ibge.jpg',
    titulo: 'Mapa municipal estatístico de Casa Nova (BA)',
    legenda:
      'Mapa municipal sobre imagem de satélite, com os limites do município, as rodovias, as localidades e o lago de Sobradinho. Código do município: 2907202.',
    alt: 'Mapa de satélite do município de Casa Nova, com os limites municipais em laranja, estradas e o lago de Sobradinho em azul ao sul.',
    creditos: 'Autoria: IBGE · Data: [2022, a confirmar] · Acervo: IBGE, mapas municipais estatísticos do Censo Demográfico 2022 · Técnica: mapa digital sobre imagem de satélite',
    fonte: URL_MAPA_IBGE,
  }),
}

const FICHA_RAIMUNDO = (acervo) => `Autoria: ${AC} · Data: ${AC} · Acervo: ${acervo} · Técnica: fotografia digital`
const PERFIL = 'perfil @raimundo100anos (Instagram)'
const URL_PERFIL = 'https://www.instagram.com/raimundo100anos/'

const morador = {
  titulo: 'Morador ilustre: Raimundo “Preto” Aprígio',
  subtitulo: 'Ouricuri, distrito de Casa Nova · nascido em 31 de agosto de 1921',
  texto: [
    'Raimundo Aprígio de Souza, conhecido como Raimundo Preto, nasceu em Ouricuri, distrito de Casa Nova, em 31 de agosto de 1921, e foi o quarto filho de Amazilia Maria da Conceição. Na roça, aprendeu os segredos da natureza e o trato com os animais. Católico fervoroso, desde cedo ajudava a mãe nas rezas de São Sebastião.',
    'Sem estudos formais, tornou-se o “enfermeiro do povo e veterinário de animais” da comunidade: era procurado para aplicar injeções e cuidar dos bichos. Guarda na memória datas, nomes e casos, entre eles as histórias da Guerra do Pau de Colher, e lembra que, jovem, ia a pé até Petrolina tangendo bodes e se alegrava ao avistar as torres da catedral.',
    'Em 2021, aos cem anos, foi registrado como referência da comunidade de Ouricuri. Em 2026, a tradicional barraca de Ouricuri na 35ª Festa do Interior de Casa Nova teve como tema Raimundo Preto e a Igreja de Ouricuri, em reconhecimento à sua trajetória de fé, trabalho e dedicação à comunidade.',
  ],
  fotos: [
    real({
      id: 'raimundo-1',
      arquivo: 'morador-1.jpg',
      titulo: 'Retrato com chapéu de couro',
      legenda: 'Retrato de Raimundo Preto, de chapéu de couro e óculos, com camiseta branca de festas de fim de ano.',
      alt: 'Homem idoso de chapéu de couro marrom, óculos e barba branca, com camiseta branca de gola verde estampada com a mensagem Boas Festas.',
      creditos: FICHA_RAIMUNDO('Notícias do Vale (reportagem de 2 jul. 2026)'),
      fonte: 'https://noticiasdovale1.com.br/ouricuri-homenageia-raimundo-preto-pelos-104-anos-de-historia-na-35a-festa-do-interior-de-casa-nova/',
    }),
    real({
      id: 'raimundo-2',
      arquivo: 'morador-2.jpg',
      titulo: 'Entre vasos e palhas',
      legenda: 'Sentado, de chapéu e bengala, diante de uma mesa e de vasos de barro, em um espaço decorado com palha.',
      alt: 'Homem idoso sentado em cadeira laranja, de chapéu e camisa listrada, com uma bengala; ao fundo, folhas de palmeira e um vaso de barro.',
      creditos: FICHA_RAIMUNDO(PERFIL),
      fonte: URL_PERFIL,
    }),
    real({
      id: 'raimundo-3',
      arquivo: 'morador-3.jpg',
      titulo: 'Em casa, de bengala',
      legenda: 'Raimundo Preto sentado em casa, com a bengala apoiada no ombro.',
      alt: 'Homem idoso de cabelos brancos, camisa listrada e bermuda cinza, sentado em uma cadeira de vime com uma bengala; ao fundo, uma motocicleta.',
      creditos: FICHA_RAIMUNDO(PERFIL),
      fonte: URL_PERFIL,
    }),
    real({
      id: 'raimundo-4',
      arquivo: 'morador-4.jpg',
      titulo: 'Ao lado de uma criança',
      legenda: 'Sentado em uma cadeira, de boné e óculos, ao lado de uma criança sorridente.',
      alt: 'Homem idoso de boné verde e óculos, sentado em uma cadeira roxa, ao lado de uma menina de vestido claro estampado de corações.',
      creditos: FICHA_RAIMUNDO(PERFIL),
      fonte: URL_PERFIL,
    }),
  ],
}

export const casaNova = {
  id: 'casa-nova',
  titulo: 'Casa Nova',
  // Linha do tempo da Apresentação; `aba` leva às fotografias do momento.
  linhaDoTempo: [
    { ano: 'Século XIX', texto: 'A localidade nasce às margens do São Francisco, a partir do sal.', aba: 'antes' },
    { ano: '1879', texto: 'Lei provincial eleva a povoação a município, com o nome de São José do Riacho de Casa Nova.', aba: 'antes' },
    { ano: '1938', texto: 'Massacre de Pau de Colher, um dos acontecimentos que marcam a história do município.', aba: null },
    { ano: '1973', texto: 'Começam as obras da barragem de Sobradinho.', aba: 'barragem' },
    { ano: '1974', texto: 'Decreto-lei inclui Casa Nova entre os municípios de interesse da segurança nacional; os prefeitos deixam de ser eleitos até 1985.', aba: null },
    { ano: '1975 a 1977', texto: 'Quase 12 mil famílias de Casa Nova, Remanso, Pilão Arcado e Sento Sé são obrigadas a deixar suas casas.', aba: 'nova-cidade' },
    { ano: '1976', texto: 'Casa Nova é refeita em outro lugar, agora à beira da BR-235.', aba: 'nova-cidade' },
    { ano: '2015', texto: 'A seca faz as ruínas da antiga cidade reaparecerem, a primeira vez em quase 40 anos de barragem, segundo a reportagem.', aba: 'ruinas' },
  ],
  // Díptico da aba "A nova cidade": a igreja antes e depois do lago (ids de fotos já existentes).
  diptico: {
    titulo: 'Duas igrejas, duas cidades',
    texto: 'À esquerda, a matriz da antiga Casa Nova. À direita, a igreja da nova Casa Nova.',
    esquerda: 'casa-nova-matriz-fachada',
    direita: 'casa-nova-nova-igreja',
  },
  abertura: [
    'Casa Nova nasceu às margens do São Francisco, na primeira metade do século XIX, a partir da descoberta e do comércio do sal. Elevada a município por lei provincial de 1879, com o nome de São José do Riacho de Casa Nova, foi desmembrada de Remanso, que já pertencera a Pilão Arcado. Até meados do século XX, quem partia dali para Salvador seguia de barco, vapor ou caminhão até Juazeiro, onde tomava o trem.',
    'Dois acontecimentos marcam sua história: o massacre de Pau de Colher, em 1938, e a mudança da cidade, em 1976. A barragem de Sobradinho formou o lago que cobriu a sede original. Casa Nova, antes no fim de uma estrada, passou a ficar à beira da BR-235. Em 1974, um decreto-lei incluiu Casa Nova, Remanso, Pilão Arcado e Sento Sé entre os municípios de interesse da segurança nacional, e seus prefeitos deixaram de ser eleitos até 1985.',
    'Esta sala percorre seis momentos: a travessia do rio, a cidade de antes, o cotidiano, a barragem, a cidade reconstruída e as ruínas que a seca devolve ao olhar.',
  ],
  intro: 'A cidade que o rio fez, a água cobriu e a seca, às vezes, devolve.',
  audio: { src: '/audio/casa-nova.mp3', titulo: '“Abraço do Tempo”, Puro Suco' },
  mapa,
  grupos,
  morador,
  fotos: grupos.flatMap((g) => g.fotos),
  referencias: [
    {
      texto:
        'CASA NOVA. Prefeitura Municipal. **O Município**: a história. Casa Nova: Prefeitura Municipal, [2026]. Disponível em: https://casanova.ba.gov.br/o-municipio/. Acesso em: 17 nov. 2026.',
    },
    {
      texto:
        'NOGUEIRA, Edwirges. Aparição de ruínas revela memórias de moradores de cidades inundadas na Bahia. **Agência Brasil**, Brasília, 28 dez. 2015. Disponível em: https://agenciabrasil.ebc.com.br/es/node/991963. Acesso em: 17 nov. 2026.',
    },
    {
      texto:
        'CASAL JR., Marcello. **Casa Nova**: seca expõe ruínas de cidades inundadas para a construção da barragem de Sobradinho, no fim da década de 1970. Brasília: Agência Brasil, dez. 2015. 1 fotografia, color. Disponível em: https://agenciabrasil.ebc.com.br/es/node/991963. Acesso em: 17 nov. 2026.',
    },
    {
      texto:
        'INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA (IBGE). **Casa Nova**: histórico. Cidades@. Rio de Janeiro: IBGE, [s.d.]. Disponível em: https://cidades.ibge.gov.br/brasil/ba/casa-nova/historico. Acesso em: 17 nov. 2026.',
    },
    {
      texto:
        'INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA (IBGE). **Acervo dos municípios brasileiros**: Casa Nova (BA), código 2907202. Rio de Janeiro: IBGE, Biblioteca, [19--]; 1957. Fotografias, p&b e color. Disponível em: https://biblioteca.ibge.gov.br/index.php/biblioteca-catalogo?view=detalhes&id=428427 (e ids 428429, 428431, 428434, 428435, 428436, 428437, 428441, 428442, 428443). Acesso em: 17 nov. 2026.',
    },
    {
      texto:
        'MEMÓRIA DA ELETRICIDADE. **Lago de Sobradinho**. [Local]: Memória da Eletricidade, [data a confirmar]. 1 fotografia, color. Disponível em: https://memoriadaeletricidade.com.br/acervo/118085/lago-de-sobradinho. Acesso em: 17 nov. 2026.',
    },
    {
      texto:
        'MEMÓRIA DA ELETRICIDADE. **Cidade de Casa Nova**. [Local]: Memória da Eletricidade, [data a confirmar]. 3 fotografias, color. Disponível em: https://memoriadaeletricidade.com.br/acervo/118081/cidade-de-casa-nova (e 118082, 118083). Acesso em: 17 nov. 2026.',
    },
    {
      texto:
        'GORHAM, Reginald. **Barca do Rio de S. Francisco, 59**. [ca. 1927]. 1 fotografia, cópia em gelatina e prata, p&b, 8 x 13,6 cm, em cartão-suporte de 15,8 x 22,5 cm. Rio de Janeiro: Biblioteca Nacional, Brasiliana Fotográfica, [s.d.]. Disponível em: https://brasilianafotografica.bn.gov.br/brasiliana/handle/20.500.12156.1/2863. Acesso em: 17 nov. 2026.',
    },
    {
      texto:
        'PURO SUCO. **Abraço do Tempo**. [Local]: [gravadora a confirmar], [ano a confirmar]. 1 áudio (3 min 37 s).',
    },
    {
      texto:
        'NOTÍCIAS DO VALE. **[Acervo fotográfico]**. Instagram: @noticiasdovale1, [data a confirmar]. Disponível em: https://www.instagram.com/p/Dc1oQkolNeV/. Acesso em: 17 nov. 2026.',
    },
    {
      texto:
        'INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA (IBGE). **Casa Nova - BA**: mapa municipal estatístico. Rio de Janeiro: IBGE, [2022]. 1 mapa, color. Censo Demográfico 2022. Disponível em: ' + URL_MAPA_IBGE + '. Acesso em: 17 nov. 2026.',
    },
    {
      texto:
        'SOUZA, Sebastiana de. Raimundo Aprígio, um século de vida! Hoje completa 100 anos de idade. **Blog Vinicius de Santana**, [S. l.], 31 ago. 2021. Disponível em: https://blogviniciusdesantana.com/2021/08/raimundo-aprigio-um-seculo-de-vida/. Acesso em: 17 nov. 2026.',
    },
    {
      texto:
        'OURICURI homenageia Raimundo Preto pelos 104 anos de história na 35ª Festa do Interior de Casa Nova. **Notícias do Vale**, [S. l.], 2 jul. 2026. Disponível em: https://noticiasdovale1.com.br/ouricuri-homenageia-raimundo-preto-pelos-104-anos-de-historia-na-35a-festa-do-interior-de-casa-nova/. Acesso em: 17 nov. 2026.',
    },
    {
      texto:
        'RAIMUNDO100ANOS. **[Fotografias de Raimundo Preto]**. Instagram: @raimundo100anos, [data a confirmar]. Disponível em: https://www.instagram.com/raimundo100anos/. Acesso em: 17 nov. 2026.',
    },
  ],
}

// Ficha técnica (autoria, data, acervo, técnica). Campos que ainda faltam ficam "[a confirmar]".
const fichaCidade = (autoria, data, acervo, tecnica) =>
  `Autoria: ${autoria} · Data: ${data} · Acervo: ${acervo} · Técnica: ${tecnica}`
const fotoCidade = (cidade, pasta, { id, arquivo, titulo, legenda, alt, creditos, aviso }) => ({
  id: `${pasta}-${id}`,
  cidade,
  titulo,
  legenda,
  alt: alt ?? titulo,
  src: `/fotos/${pasta}/${arquivo}`,
  creditos,
  aviso,
})
const rem = (o) => fotoCidade('Remanso', 'remanso', o)
const ME_ACERVO = 'Memória da Eletricidade'
const NUNES = 'Arquivo pessoal de Manoel da Silva Nunes (cedida)'

const remIgreja = rem({
  id: 'igreja',
  arquivo: 'igreja-rosario.jpg',
  titulo: 'Igreja de Nossa Senhora do Rosário',
  legenda: 'Fachada da igreja da antiga Remanso, com frontão escalonado, nicho com imagem sobre a porta e janelas de venezianas.',
  alt: 'Fotografia antiga em sépia da fachada de uma igreja de frontão escalonado, com um nicho com imagem sobre a porta, duas janelas de venezianas e uma árvore podada à frente.',
  creditos: `Autoria: ${AC} · Data: ${AC} · Fonte: ${AC} · Técnica: fotografia em sépia`,
})
const remCais = rem({
  id: 'cais',
  arquivo: 'antiga-cais.jpg',
  titulo: 'A antiga Remanso e o cais',
  legenda: 'Vista aérea da antiga cidade, com o cais de pedra à margem do rio e os prédios rente à água.',
  alt: 'Vista aérea em preto e branco de uma cidade à beira do rio, com um cais de pedra e um conjunto de prédios baixos junto à água.',
  creditos: fichaCidade('desconhecida', 'desconhecida', 'reproduzida de MARQUES (2017), figura 7 [dados da obra a confirmar]', 'fotografia aérea em preto e branco'),
})
const remCasario = rem({
  id: 'casario',
  arquivo: 'antiga-casario.jpg',
  titulo: 'O casario da antiga Remanso',
  legenda: 'Vista aérea do casario de telhados cerâmicos, com ruas estreitas e uma praça arborizada.',
  alt: 'Vista aérea em preto e branco de ruas com casas de telhado cerâmico e uma praça com árvores.',
  creditos: fichaCidade('desconhecida', 'desconhecida', 'reproduzida de MARQUES (2017), figura 8 [dados da obra a confirmar]', 'fotografia aérea em preto e branco'),
})
const remAerea = rem({
  id: 'aerea',
  arquivo: 'antiga-aerea.jpg',
  titulo: 'A antiga Remanso à margem do rio',
  legenda: 'Vista aérea da antiga cidade, com o casario, um grande edifício claro em primeiro plano e o rio logo abaixo.',
  alt: 'Vista aérea em cores desbotadas de uma cidade à beira de um rio, com um edifício claro de dois pavimentos em destaque.',
  creditos: `Autoria: ${AC} · Data: ${AC} · Fonte: ${AC} (imagem localizada em busca por arquivos públicos) · Técnica: fotografia aérea colorida`,
})
const remSaida = rem({
  id: 'saida',
  arquivo: 'saida-moradores-ia.jpg',
  titulo: 'Saída de moradores da velha Remanso',
  legenda: 'Moradores com bagagens à margem do rio, com barcos e um vapor ao fundo, em registro da saída da velha cidade.',
  alt: 'Pessoas carregando sacos e caixas à beira do rio, com canoas, um vapor de rodas e casas e uma igreja ao fundo.',
  aviso: 'Imagem recuperada com inteligência artificial',
  creditos: fichaCidade(AC, AC, NUNES, 'fotografia recuperada com inteligência artificial (original a confirmar)'),
})
const remNova1 = rem({
  id: 'nova-1',
  arquivo: 'nova-aerea-1.jpg',
  titulo: 'A nova Remanso vista de cima',
  legenda: 'Vista aérea da cidade de Remanso, relocada para a formação do lago de Sobradinho, com ruas largas e uma grande praça ao centro.',
  alt: 'Vista aérea colorida de uma cidade planejada, com ruas largas, quadras regulares e uma grande praça de terra ao centro.',
  creditos: fichaCidade(AC, AC, `${ME_ACERVO} (I.F.0218-37, “Cidade de Remanso”)`, 'fotografia aérea colorida'),
})
const remNova2 = rem({
  id: 'nova-2',
  arquivo: 'nova-aerea-2.jpg',
  titulo: 'A nova Remanso e o lago',
  legenda: 'Vista aérea da nova cidade, com a caixa d’água entre o casario e o lago de Sobradinho ao fundo.',
  alt: 'Vista aérea colorida de uma cidade de ruas regulares, com uma caixa d’água em destaque e o lago ao fundo.',
  creditos: fichaCidade(AC, AC, ME_ACERVO, 'fotografia aérea colorida'),
})
const remInundacao = rem({
  id: 'inundacao',
  arquivo: 'inundacao-1980.jpg',
  titulo: 'Inundação na nova Remanso',
  legenda: 'Rua da nova cidade tomada pela água, que chega às fachadas e aos postes.',
  alt: 'Fotografia em preto e branco de uma rua alagada, com água até as calçadas, postes e edifícios baixos ao fundo.',
  creditos: fichaCidade('Cândido Coelho', '1980', 'reproduzida de MARQUES (2017), figura 4 [dados da obra a confirmar]', 'fotografia em preto e branco'),
})
const remRuinas = rem({
  id: 'ruinas',
  arquivo: 'ruinas-estiagem.jpg',
  titulo: 'Ruínas da igreja de Remanso na estiagem',
  legenda: 'Torre e fachada da igreja da antiga Remanso emergindo do lago, vistas da margem ao amanhecer.',
  alt: 'Vista aérea ao amanhecer de um lago extenso, com a torre e a fachada de uma igreja emergindo da água; em primeiro plano, uma cerca de madeira e cactos na margem.',
  creditos: fichaCidade(AC, AC, NUNES, 'fotografia aérea colorida'),
})

export const remanso = {
  id: 'remanso',
  titulo: 'Remanso',
  intro: 'Uma cidade de águas lentas: a antiga Remanso, de cais e vapores, foi deixada para trás entre 1975 e 1977.',
  audio: { src: '/audio/remanso.mp3', titulo: '“Água”, BaianaSystem, Antonio Carlos & Jocafi e Orquestra Afrosinfônica' },
  abertura: [
    'O povoamento começou no final do século XVIII, na fazenda Arraial, e atraiu colonos pela fertilidade do solo e pela pesca. O nome Remanso surgiu porque, naquele trecho, as águas do rio corriam de forma lenta e calma.',
    'O antigo cais era um ponto estratégico para os barcos a vapor. Os moradores viajavam de vapor até Pirapora, em Minas Gerais, para pegar o trem rumo ao Sudeste.',
    'A antiga sede tinha casarões históricos, igrejas, delegacia, uma caixa d’água municipal e ruas estreitas, construídas bem perto da margem do rio.',
  ],
  linhaDoTempo: [
    { ano: 'Final do século XVIII', texto: 'O povoamento começa na fazenda Arraial, atraído pela terra fértil e pela pesca.', aba: 'antiga' },
    { ano: '1857', texto: 'A vila de Remanso do Pilão Arcado é criada pela lei provincial nº 650, que transfere para ela a sede de Pilão Arcado.', aba: null },
    { ano: '1900', texto: 'Remanso é elevada à condição de cidade pela lei estadual nº 369, de 8 de agosto.', aba: null },
    { ano: '1975 a 1977', texto: 'Milhares de famílias deixam suas terras e casas.', aba: 'remocao' },
    { ano: 'Janeiro de 1977', texto: 'O Decreto Federal nº 10/77 oficializa a transferência da sede municipal.', aba: 'remocao' },
    { ano: 'Nas secas', texto: 'Quando o lago baixa muito, as ruínas da velha Remanso emergem: a caixa d’água, paredes da igreja, o cais e calçamentos.', aba: 'seca' },
  ],
  antiga: {
    titulo: 'A antiga Remanso',
    texto: 'Imagens da cidade que ficava rente ao rio: a igreja, o cais e o casario, e o dia em que os moradores partiram.',
    fotos: [remIgreja, remCais, remCasario, remAerea, remSaida],
  },
  remocao: {
    titulo: 'A remoção da população',
    paragrafos: [
      'Entre 1975 e 1977, milhares de famílias deixaram suas terras e casas para trás. A transferência oficial da sede municipal foi estabelecida pelo Decreto Federal nº 10/77, em janeiro de 1977.',
      'A nova cidade foi erguida a cerca de 7 km da antiga. Uma fotografia de 1980 registra a inundação da nova Remanso.',
    ],
    numeros: [
      { valor: '1975 a 1977', texto: 'período em que milhares de famílias deixaram a velha cidade' },
      { valor: 'Decreto 10/77', texto: 'transferência oficial da sede, em janeiro de 1977' },
      { valor: '7 km', texto: 'entre a velha e a nova Remanso' },
    ],
    fotos: [remNova1, remNova2, remInundacao],
  },
  seca: {
    titulo: 'A seca e as ruínas',
    paragrafos: [
      'Quando o nível do lago de Sobradinho baixa drasticamente nas estiagens, as águas recuam até o antigo leito do rio. Nessas ocasiões, as ruínas da velha Remanso emergem do fundo do lago e mostram a antiga caixa d’água, paredes da igreja, o cais e calçamentos.',
      'Em 2015, com o lago a pouco mais de 1% da capacidade, a água se afastou cerca de 7 km da margem de Remanso e o antigo cais reapareceu.',
    ],
    fotos: [remRuinas],
  },
  referencias: [
    {
      texto: 'REMANSO. [Texto do núcleo: origem, economia, arquitetura e remoção]. [Fonte a confirmar].',
    },
    {
      texto:
        'INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA (IBGE). **Remanso (BA)**: histórico. Rio de Janeiro: IBGE, [s.d.]. Disponível em: https://biblioteca.ibge.gov.br/visualizacao/dtb/bahia/remanso.pdf. Acesso em: 19 nov. 2026.',
    },
    {
      texto:
        'APARIÇÃO de ruínas revela memórias de moradores de cidades inundadas na Bahia. **Agência Brasil**, Brasília, 28 dez. 2015. Disponível em: https://agenciabrasil.ebc.com.br/geral/noticia/2015-12/aparicao-de-ruinas-revela-memorias-de-moradores-de-cidades-inundadas-na-bahia. Acesso em: 19 nov. 2026.',
    },
    {
      texto:
        'MEMÓRIA DA ELETRICIDADE. **I.F.0218-37 – Cidade de Remanso**. Acervo. [Local]: Memória da Eletricidade, [data a confirmar]. 1 fotografia, color. [Endereço eletrônico a confirmar].',
    },
    {
      texto:
        'MEMÓRIA DA ELETRICIDADE. **Construção da Usina Hidrelétrica Sobradinho**. Acervo. [Local]: Memória da Eletricidade, [data a confirmar]. 1 fotografia, color. [Endereço eletrônico a confirmar].',
    },
    {
      texto:
        'MARQUES, [prenome a confirmar]. [Título da obra a confirmar]. 2017. Figuras 4, 7 e 8 reproduzidas neste núcleo.',
    },
    {
      texto:
        'NUNES, Manoel da Silva. [Fotografias do arquivo pessoal cedidas para esta exposição]. Remanso, [data a confirmar].',
    },
  ],
}

const pil = (o) => fotoCidade('Pilão Arcado', 'pilao-arcado', o)
const IBGE_PIL = 'IBGE (referência indicada: cidades.ibge.gov.br, histórico de Pilão Arcado)'
const fichaPil = (tecnica) => fichaCidade(AC, AC, IBGE_PIL, tecnica)

const pilIgreja = pil({
  id: 'igreja',
  arquivo: 'igreja-duas-torres.jpg',
  titulo: 'Igreja de duas torres',
  legenda: 'Fachada de igreja com duas torres, cruz sobre o frontão e portas de madeira, vista de um largo.',
  alt: 'Fotografia antiga em sépia de uma igreja de duas torres com cruz sobre o frontão, janelas e portas de madeira, e um poste à direita.',
  creditos: fichaPil('fotografia em tons de sépia'),
})
const pilRua = pil({
  id: 'rua-casario',
  arquivo: 'rua-casario.jpg',
  titulo: 'Rua com casario',
  legenda: 'Rua de terra com casario de fachadas decoradas, uma árvore à esquerda, pessoas e animais de carga ao fundo.',
  alt: 'Rua larga de terra com casas térreas de fachadas decoradas com motivos geométricos, uma árvore à esquerda e pessoas com animais de carga ao longe.',
  creditos: fichaPil('fotografia em preto e branco'),
})
const pilCercas = pil({
  id: 'rua-cercas',
  arquivo: 'rua-cercas.jpg',
  titulo: 'Rua com cercas de varas',
  legenda: 'Rua larga de terra, com postes, casas térreas e cercas de varas diante das fachadas.',
  alt: 'Rua de terra com postes, casas baixas de ambos os lados e cercas de varas junto às fachadas.',
  creditos: fichaPil('fotografia em tons de sépia'),
})
const pilTijolos = pil({
  id: 'edificio-tijolos',
  arquivo: 'edificio-tijolos.jpg',
  titulo: 'Edifício baixo de tijolos',
  legenda: 'Edifício térreo de telhado baixo, com panos de tijolo e janelas estreitas, em terreno aberto.',
  alt: 'Edifício térreo com paredes brancas e panos de tijolo aparente, telhado de pouca inclinação e árvore ao fundo, em terreno aberto.',
  creditos: fichaPil('fotografia em tons de sépia'),
})
const pilPraca = pil({
  id: 'praca-edificio',
  arquivo: 'praca-edificio.jpg',
  titulo: 'Praça e edifício',
  legenda: 'Praça calçada, com um poste de luz em primeiro plano e um edifício térreo comprido ao fundo.',
  alt: 'Praça calçada com canteiros baixos, um poste de luz em primeiro plano e um edifício térreo comprido entre árvores ao fundo.',
  creditos: fichaPil('fotografia colorida'),
})
const pilIgrejaPraca = pil({
  id: 'igreja-praca',
  arquivo: 'igreja-praca.jpg',
  titulo: 'Igreja e praça',
  legenda: 'Igreja de frontão triangular e janelas em arco, com um mastro alto de iluminação, diante de uma praça calçada.',
  alt: 'Igreja de frontão triangular e janelas em arco, com um mastro alto de iluminação, diante de uma praça calçada e murada.',
  creditos: fichaPil('fotografia colorida'),
})
const pilRuaCalcada = pil({
  id: 'rua-calcada',
  arquivo: 'rua-calcada.jpg',
  titulo: 'Rua calçada',
  legenda: 'Rua calçada com carros e caminhões, postes e casas baixas dos dois lados.',
  alt: 'Rua calçada com carros e um caminhão, postes de luz e casas baixas dos dois lados.',
  creditos: fichaPil('fotografia colorida'),
})
const pilFeira = pil({
  id: 'praca-feira',
  arquivo: 'praca-feira.jpg',
  titulo: 'Praça com feira e ônibus',
  legenda: 'Praça de terra com barracas de feira ao fundo e um ônibus da empresa Bonfinense.',
  alt: 'Praça ampla de terra com barracas de feira ao fundo, pessoas e um ônibus amarelo e verde com o nome Bonfinense.',
  creditos: fichaPil('fotografia colorida'),
})

// Vídeos do YouTube: só são exibidos (incorporados), nada é baixado.
export const videosPilao = {
  canal: { rotulo: 'canal @vidanarocaonline4990 no YouTube', url: 'https://www.youtube.com/@vidanarocaonline4990' },
  grupos: [
    {
      id: 'antes',
      titulo: 'O território antes da inundação',
      texto: 'Vídeos sobre a antiga cidade e sobre como as pessoas lembram desse período.',
      videos: [
        { id: 'E1gbLH7Wz7A', titulo: 'Pilão Arcado, Bahia: a história do velho sertão às margens do São Francisco' },
        { id: 'D1uvl70_j1w', titulo: 'Porto do povoado Passagem, Pilão Arcado (BA)' },
        { id: 'iifLGGzOc1k', titulo: 'Pilão Arcado Velho: como era a vida na antiga cidade (parte 2)' },
        { id: '93gL4YiQyN4', titulo: 'Pilão Arcado Velho (parte 3)' },
      ],
    },
    {
      id: 'hoje',
      titulo: 'O que as águas transformaram',
      texto: 'Vídeos para dimensionar como a água mudou o modo de vida e a forma como a comunidade é vista e fala de si.',
      videos: [
        { id: 'SpFPu6JuBV0', titulo: 'Pilão Arcado Velho: como é a atual realidade (parte 4)' },
        { id: 'vezSqCfJ2KI', titulo: 'Pilão Arcado Velho: viagem pelo Rio São Francisco até a antiga cidade' },
        { id: 'iFReBZFgP_w', titulo: 'Povoado Lagoa do Padre, zona rural de Pilão Arcado (BA), 16/02/2021' },
      ],
    },
    {
      id: 'tombamento',
      titulo: 'Proposição de tombamento',
      texto: 'Um projeto propõe tombar a antiga Pilão Arcado.',
      videos: [
        {
          id: 'lDL0n3ketOA',
          titulo: 'Projeto propõe tombar a antiga Pilão Arcado',
          credito: 'TV Caatinga (Univasf)',
          fonte: 'https://portais.univasf.edu.br/videos/tv-caatinga/projeto-propoe-tombar-a-antiga-pilao-arcado',
        },
      ],
    },
  ],
}
const refVideo = (v) =>
  `${v.titulo.toUpperCase().slice(0, 1)}${v.titulo.slice(1)}. [S. l.]: ${v.credito ?? '[canal a confirmar]'}, [data a confirmar]. 1 vídeo (YouTube). Disponível em: https://www.youtube.com/watch?v=${v.id}. Acesso em: 19 nov. 2026.`
export const referenciasVideosPilao = videosPilao.grupos.flatMap((g) => g.videos).map((v) => ({ texto: refVideo(v) }))

export const pilaoArcado = {
  id: 'pilao-arcado',
  titulo: 'Pilão Arcado',
  intro: 'À beira do rio desde o século XVII, a antiga Pilão Arcado segue em ruínas; a nova sede foi erguida a cerca de 24 km.',
  audio: { src: '/audio/pilao-arcado.mp3', titulo: '“Memórias das Águas”, Maria Bethânia' },
  abertura: [
    'Pilão Arcado nasceu à beira do São Francisco. Segundo o IBGE, a região foi habitada primitivamente pelos povos indígenas mocoses e acoroases, e os primeiros povoadores europeus foram portugueses das famílias Guerreiro e Bernardo. Fontes institucionais situam o povoamento no final do século XVII, em um contexto de ocupação colonial e de conflitos territoriais.',
    'A presença indígena é anterior ao arraial e precisa ser lembrada na leitura dessa história.',
    'A partir de 1973, com a Barragem de Sobradinho, a sede foi transferida e a antiga cidade se transformou; parte de suas estruturas permaneceu como ruína. A antiga igreja de Santo Antônio e remanescentes do casario seguem associados à história local.',
  ],
  linhaDoTempo: [
    { ano: 'Final do século XVII', texto: 'Formação do arraial, em contexto de ocupação colonial e de conflitos territoriais.', aba: null },
    { ano: '1771', texto: 'A capela é elevada a freguesia, com o nome de Santo Antônio do Pilão Arcado.', aba: null },
    { ano: '1810', texto: 'Pilão Arcado é elevada à categoria de vila, por alvará de 15 de janeiro.', aba: null },
    { ano: '1857', texto: 'A vila é extinta e o território passa a integrar o município de Remanso (Lei Provincial nº 650).', aba: null },
    { ano: '1890', texto: 'Pilão Arcado é elevada novamente à categoria de vila, desmembrada de Remanso (ato de 31 de outubro).', aba: null },
    { ano: '1938', texto: 'A sede é elevada à categoria de cidade, segundo sínteses históricas institucionais.', nota: 'Data a conferir na legislação.', aba: null },
    { ano: 'Junho de 1973', texto: 'Começam as obras da Barragem de Sobradinho, com formação do reservatório e deslocamentos populacionais.', aba: null },
    {
      ano: '1974 a 1978',
      texto: 'A sede é transferida e a antiga cidade se transforma. As fontes divergem ao distinguir a transferência administrativa, a mudança dos moradores e a inundação.',
      nota: 'Cada data deve ser lida com a sua fonte.',
      aba: 'ruinas',
    },
    { ano: 'Décadas seguintes', texto: 'A antiga igreja de Santo Antônio e remanescentes do casario seguem associados à história local.', aba: 'ruinas' },
    { ano: 'Hoje', texto: 'Um projeto propõe tombar a antiga Pilão Arcado.', aba: 'videos' },
  ],
  imagens: {
    titulo: 'Imagens de Pilão Arcado',
    texto:
      'Registros do acervo de Pilão Arcado indicados pela pesquisa. A consulta ao catálogo do IBGE ainda deve confirmar autoria, data e se cada imagem mostra a antiga ou a nova cidade.',
    grupos: [
      { id: 'pb', titulo: 'Registros em preto e branco e sépia', texto: 'Fachadas, ruas e a igreja.', fotos: [pilIgreja, pilRua, pilCercas, pilTijolos] },
      { id: 'cor', titulo: 'Registros coloridos', texto: 'Praças, ruas calçadas e a feira.', fotos: [pilPraca, pilIgrejaPraca, pilRuaCalcada, pilFeira] },
    ],
  },
  ruinas: {
    titulo: 'Ruínas e memória',
    paragrafos: [
      'A antiga cidade não foi totalmente inundada. Segundo a pesquisa sobre a antiga igreja de Pilão Arcado, a nova sede fica a cerca de 24 km da antiga, e as ruínas da igreja de Santo Antônio só são atingidas por cheias esporádicas.',
      'Memórias familiares e comunitárias ajudam a interpretar essas mudanças e os seus efeitos: o que se perdeu, o que permaneceu e como a cidade antiga segue presente nas narrativas.',
      'Este núcleo reúne fontes, imagens e relatos para registrar a pluralidade de experiências, preservar referências e fortalecer o direito da comunidade de narrar a sua própria história.',
    ],
    tombamento: {
      titulo: 'Proposição de tombamento',
      texto: 'Um projeto propõe tombar a antiga Pilão Arcado. Veja a reportagem da TV Caatinga, da Univasf, na aba Vídeos.',
      url: 'https://portais.univasf.edu.br/videos/tv-caatinga/projeto-propoe-tombar-a-antiga-pilao-arcado',
    },
  },
  referencias: [
    {
      texto:
        'INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA (IBGE). **Pilão Arcado (BA)**: histórico. Rio de Janeiro: IBGE, [s.d.]. Disponível em: https://biblioteca.ibge.gov.br/visualizacao/dtb/bahia/pilaoarcado.pdf. Acesso em: 19 nov. 2026.',
    },
    {
      texto:
        'BAHIA. Prefeitura Municipal de Pilão Arcado. **Plano Municipal de Saúde 2022–2025**: caracterização do município de Pilão Arcado. Disponível em: https://www.pilaoarcado.ba.gov.br/arquivo/download/10190/categoria/10020/plano_municipal_saude_2022_a_2025. Acesso em: 18 nov. 2026.',
    },
    {
      texto:
        'BRASIL. Câmara dos Deputados. **50 anos da Barragem de Sobradinho**: capítulo 3. Rádio Câmara, 28 jun. 2023. Disponível em: https://www.camara.leg.br/radio/programas/974964-50-anos-da-barragem-de-sobradinho-capitulo-3/. Acesso em: 18 nov. 2026.',
    },
    {
      texto:
        'COMITÊ DA BACIA HIDROGRÁFICA DO RIO SÃO FRANCISCO. **Lenda**: Pilão Arcado na beira do rio. 5 maio 2014. Disponível em: https://cbhsaofrancisco.org.br/noticias/cidades-da-bacia_blog/pilao-arcado-na-beira-do-rio/. Acesso em: 18 nov. 2026.',
    },
    {
      texto:
        'SILVA, Alessandra; FELICE, Gisele; ALVES, Shilton. A antiga igreja de Pilão Arcado na Bahia e a sua persistência na paisagem. **Revista Revela**. DOI: https://doi.org/10.18391/tnvvdm17. [Dados editoriais a confirmar: a versão consultada indica Revista Tarairiú, Campina Grande, v. 1, n. 23, 2023.]',
    },
    { texto: 'HALBWACHS, Maurice. **A memória coletiva**. São Paulo: Vértice, 1990.' },
    { texto: 'NORA, Pierre. Entre memória e história: a problemática dos lugares. **Projeto História**, São Paulo, n. 10, p. 7–28, dez. 1993.' },
    { texto: 'POLLAK, Michael. Memória e identidade social. **Estudos Históricos**, Rio de Janeiro, v. 5, n. 10, p. 200–212, 1992.' },
    {
      texto:
        'INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA (IBGE). **Pilão Arcado**: histórico (referência das fotografias). Disponível em: https://cidades.ibge.gov.br/brasil/ba/pilao-arcado/historico. Acesso em: 19 nov. 2026.',
    },
  ],
}

// Fotografia real de Sento Sé: o arquivo fica em public/fotos/sento-se/.
const fotoSS = ({ id, arquivo, titulo, legenda, alt, tecnica }) => ({
  id: `sento-se-${id}`,
  cidade: 'Sento Sé',
  titulo,
  legenda,
  alt: alt ?? titulo,
  src: `/fotos/sento-se/${arquivo}`,
  creditos: `Autoria: ${AC} · Data: ${AC} · Acervo: Prefeitura Municipal de Sento Sé · Técnica: ${tecnica}`,
})

const ssAerea = fotoSS({
  id: 'aerea',
  arquivo: 'nova-aerea.jpg',
  titulo: 'Sento Sé',
  legenda: 'Vista aérea de Sento Sé ao entardecer: o casario de telhados avermelhados, a serra à esquerda e o sol baixo no horizonte.',
  alt: 'Vista aérea de uma cidade de telhados avermelhados ao pôr do sol, com uma serra escura à esquerda e uma avenida arborizada à direita.',
  tecnica: 'fotografia colorida',
})
const ssAntigaCasario = fotoSS({
  id: 'antiga-casario',
  arquivo: 'antiga-casario.jpg',
  titulo: 'Antiga Sento Sé',
  legenda: 'Vista de cima do casario de telhas cerâmicas e ruas calçadas, com um ônibus parado em uma esquina e pessoas pelas ruas.',
  alt: 'Fotografia antiga em tons de sépia de ruas com casas térreas de telhado cerâmico, um ônibus em uma esquina e pessoas caminhando.',
  tecnica: 'fotografia em tons de sépia',
})
const ssAntigaIgreja = fotoSS({
  id: 'antiga-igreja',
  arquivo: 'antiga-igreja.jpg',
  titulo: 'Antiga Sento Sé: a igreja e a multidão',
  legenda: 'Multidão reunida diante de uma igreja sem cobertura, com construções desmontadas ao redor.',
  alt: 'Fotografia em preto e branco de uma multidão diante de uma igreja sem telhado, com a estrutura do madeiramento à mostra, e entulho nas ruas.',
  tecnica: 'fotografia em preto e branco',
})
const ssNovaPraca = fotoSS({
  id: 'nova-praca',
  arquivo: 'nova-praca.jpg',
  titulo: 'Praça e igreja',
  legenda: 'Vista aérea de uma praça arborizada, com canteiros geométricos e uma igreja de duas torres ao fundo.',
  alt: 'Vista aérea de uma praça com árvores de copas arredondadas, canteiros em formas geométricas e uma igreja branca de duas torres ao fundo.',
  tecnica: 'fotografia colorida',
})
const ssMapa = fotoSS({
  id: 'mapa',
  arquivo: 'mapa-reservatorio.jpg',
  titulo: 'Reservatório de Sobradinho',
  legenda: 'Mapa do reservatório com os trechos lótico, de transição e lêntico e as áreas urbanas; Remanso, Sento Sé, Casa Nova e Sobradinho aparecem marcados.',
  alt: 'Mapa do reservatório de Sobradinho com o rio São Francisco, trechos em tons de cinza e as cidades de Remanso, Sento Sé, Casa Nova e Sobradinho indicadas.',
  tecnica: 'mapa (figura de estudo, recortada)',
})
ssMapa.creditos = `Autoria: ${AC} · Data: ${AC} · Fonte: ${AC} · Técnica: mapa (figura de estudo, recortada)`

export const sentoSe = {
  id: 'sento-se',
  titulo: 'Sento Sé',
  intro: 'Uma cidade que mudou de lugar: a antiga sede foi inundada e a nova foi inaugurada em 16 de outubro de 1976, a cerca de 62 km dali.',
  audio: { src: '/audio/sento-se.mp3', titulo: '“Segue o Seco”, Marisa Monte (1994)' },
  abertura: [
    'Cidade do norte da Bahia, na região do Vale do São Francisco, Sento Sé tem uma trajetória singularmente importante: sua antiga sede foi inundada em decorrência da construção da Barragem de Sobradinho, na década de 1970. O acontecimento modificou não apenas a paisagem, mas também a organização da comunidade, os modos de vida, as relações com o rio São Francisco e a memória coletiva dos moradores.',
    'A região onde hoje está o município era originalmente habitada por povos indígenas, identificados em registros históricos como Centossés ou Centoces, e a denominação do município está relacionada à presença deles. Mais tarde chegaram colonizadores portugueses, vindos do Piauí, que estabeleceram atividades agrícolas, especialmente o cultivo da cana-de-açúcar, e instalaram engenhos.',
    'Com o tempo, o povo local desenvolveu relações com a economia, a terra, a agricultura, o extrativismo, a cultura e a pesca, atividades ligadas diretamente ao rio São Francisco.',
  ],
  // `aba` leva ao assunto na própria sala
  linhaDoTempo: [
    { ano: '1719', texto: 'Construção da capela de São José da Barra.', aba: null },
    { ano: '1752', texto: 'Elevação à freguesia.', aba: null },
    { ano: '1832', texto: 'Criação do município.', aba: null },
    { ano: '1932', texto: 'Passagem de Lampião pela região.', aba: null },
    { ano: '1934', texto: 'Oficialização do nome Sento Sé.', aba: null },
    { ano: '1971', texto: 'Notícias e avanços do projeto da Barragem de Sobradinho.', aba: 'barragem' },
    { ano: '1974', texto: 'Lei de transferência da sede municipal.', aba: 'barragem' },
    { ano: '1976', texto: 'Inundação da antiga cidade e consolidação da nova sede.', aba: 'nova' },
    { ano: '2026', texto: 'Cinquenta anos da nova Sento Sé.', aba: 'nova' },
  ],
  foto: ssAerea,
  antiga: {
    titulo: 'A antiga Sento Sé',
    texto:
      'Segundo o estudo de Ana Catarina Braga, a antiga Sento Sé tinha uma forte relação econômica e social com o rio São Francisco.',
    numeros: [
      { valor: '4 mil', texto: 'habitantes na comunidade urbana' },
      { valor: '10 mil', texto: 'habitantes na comunidade rural' },
      { valor: '14 mil', texto: 'pessoas, somando as duas comunidades' },
    ],
    notaNumeros: 'Fonte: BRAGA (2008), conforme levantamento discutido no artigo.',
    fotos: [ssAntigaCasario, ssAntigaIgreja],
  },
  barragem: {
    titulo: 'A Barragem de Sobradinho',
    paragrafos: [
      'A construção da Barragem de Sobradinho é um dos acontecimentos mais importantes e traumáticos da história de Sento Sé. O empreendimento hidrelétrico, conduzido pela Companhia Hidro Elétrica do São Francisco (Chesf), formou um grande reservatório no rio São Francisco. Com o enchimento do lago, iniciado na década de 1970, antigas localidades foram atingidas, entre elas a antiga sede de Sento Sé.',
      'A transferência da sede municipal foi estabelecida pela Lei Estadual nº 3.347, de 23 de dezembro de 1974. Em 16 de outubro de 1976, foi inaugurada a nova cidade. A mudança não foi apenas a transferência de uma cidade para outro lugar: representou uma ruptura na relação entre a população e seu território histórico.',
    ],
    numeros: [
      { valor: '1.631 km²', texto: 'do território municipal atingidos pela inundação' },
      { valor: '1.225 km', texto: 'de margem indicados para o trecho de Sento Sé no levantamento' },
    ],
    notaNumeros: 'Dados do diagnóstico sobre a dívida social dos atingidos pela Barragem de Sobradinho. A inundação atingiu áreas urbanas e rurais do município.',
    mapa: ssMapa,
  },
  nova: {
    titulo: 'A nova Sento Sé',
    paragrafos: [
      'A nova sede foi construída em uma área diferente da antiga cidade, a cerca de 62 quilômetros dela, segundo o histórico do IBGE. Foi planejada e construída pelo Governo Federal, e a transferência foi oficializada pela Lei Estadual nº 3.347, de 23 de dezembro de 1974.',
      'A mudança trouxe uma nova organização espacial, com planejamento urbano, residências, equipamentos públicos e reorganização dos serviços municipais. Mas a reconstrução física não significou a recuperação integral do patrimônio perdido.',
      'Muitos moradores precisaram adaptar seus hábitos, reconstruir relações sociais e criar novas formas de convivência. A memória da antiga Sento Sé permaneceu nas narrativas familiares, nas fotografias e nas lembranças de quem viveu a transferência. É uma transformação da identidade territorial: a população passou a viver em uma nova cidade, mas continuou preservando vínculos afetivos com o espaço inundado.',
    ],
    numeros: [
      { valor: '62 km', texto: 'entre a antiga e a nova sede' },
      { valor: '40.310', texto: 'habitantes, segundo a estimativa do IBGE citada no documento' },
    ],
    fotos: [ssNovaPraca],
  },
  referencias: [
    {
      texto:
        'BRAGA, Ana Catarina Lins de Albuquerque Sento-Sé Martinelli. **Sento-Sé e a construção da Barragem do Sobradinho**: a memória de um povo e poder de uma família. 2008. [Tipo de trabalho a confirmar] – Universidade Católica do Salvador, Salvador, 2008.',
    },
    {
      texto:
        'INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA (IBGE). **Sento Sé (BA)**: histórico do município. Rio de Janeiro: IBGE, [s.d.].',
    },
    {
      texto:
        'PREFEITURA MUNICIPAL DE SENTO SÉ. **Plano Municipal de Cultura de Sento Sé**. Sento Sé: Prefeitura Municipal, [s.d.].',
    },
    {
      texto:
        'PREFEITURA MUNICIPAL DE SENTO SÉ. **[Fotografias da antiga e da nova Sento Sé]**. Sento Sé: Prefeitura Municipal, [data a confirmar]. 4 fotografias.',
    },
    {
      texto: '[MAPA DO RESERVATÓRIO DE SOBRADINHO]. [Autoria, título do estudo e ano a confirmar]. 1 mapa, recortado.',
    },
  ],
}

export const trilha = {
  id: 'trilha',
  titulo: 'Trilha expográfica',
  audio: { src: '/audio/trilha.mp3', titulo: '“Sobradinho” (arranjo original, instrumental), Sá e Guarabyra' },
  intro:
    'Um percurso pelas quatro cidades do lago, pensado para ser feito em trechos. Na seca, as ruínas emergem e a trilha ganha novos pontos de leitura.',
  ecomuseu: {
    titulo: 'Ecomuseu das Águas da Memória',
    texto: [
      'A trilha integra a proposta de um ecomuseu, que parte da Museologia Social e da Ecomuseologia: o território é o principal objeto museológico e a comunidade, a protagonista do discurso expositivo.',
      'No mapa, cada ponto é a porta de entrada para a ala da cidade correspondente. Toque ou clique em um deles para ver as fotografias de acervo, os relatos em áudio e os textos históricos daquele lugar.',
    ],
  },
  // Uma rota em camadas: o que depende do nível do lago e o que não depende.
  camadas: {
    titulo: 'Uma rota em camadas',
    texto:
      'As quatro cidades ficam a mais de 200 km umas das outras em linha reta, e as antigas sedes estão sob o lago ou longe das atuais. Por isso a trilha é fracionada e tem três camadas.',
    itens: [
      {
        titulo: 'Virtual, o ano todo',
        texto: 'A exposição, o mapa e a trilha sonora, com fotografias de acervo e relatos. Não dependem do nível do lago.',
      },
      {
        titulo: 'Mirantes e núcleos urbanos',
        texto: 'Proposta de pontos de observação na margem e visitas mediadas nas cidades atuais, com a memória contada por quem viveu a mudança.',
      },
      {
        titulo: 'Sazonal: ruínas expostas',
        texto:
          'Quando o lago baixa muito, ruínas reaparecem. Em 2015, com o lago a cerca de 1% da capacidade, as de Casa Nova surgiram pela primeira vez em quase 40 anos de barragem. Esse trecho depende do nível do reservatório e de condições de segurança.',
      },
    ],
  },
  distancias: {
    texto:
      'Distância em linha reta entre as sedes atuais: Casa Nova a Sento Sé, cerca de 120 km; Sento Sé a Remanso, cerca de 25 km; Remanso a Pilão Arcado, cerca de 60 km. Total aproximado: 205 km.',
    nota: 'Calculado a partir das coordenadas das sedes. A distância por estrada ou por água é maior.',
  },
  // Mapa real: coordenadas das sedes atuais (as antigas estão sob o lago ou a quilômetros delas).
  real: {
    centro: [-9.62, -41.75],
    zoom: 8,
    ordem: ['casa-nova', 'sento-se', 'remanso', 'pilao-arcado'], // de leste a oeste, rio acima
    legenda:
      'Sedes atuais das quatro cidades (coordenadas do IBGE). A linha tracejada é um percurso conceitual, de leste a oeste. As cidades antigas ficam sob o lago ou longe das atuais: a antiga Remanso está a cerca de 7 km da nova; a antiga Pilão Arcado, a cerca de 24 km.',
  },
  mapa: {
    imagem: '/mapa/rota-expografica.png',
    alt: 'Ilustração do lago de Sobradinho com a trilha da memória em linha tracejada e quatro pontos de ruínas: Casa Nova, Pilão Arcado, Remanso e Sento Sé.',
    legenda: 'Ilustração conceitual do percurso: a posição dos pontos não corresponde à geografia real.',
    google: 'https://www.google.com/maps/search/?api=1&query=Lago+de+Sobradinho+Bahia',
    // x e y: posição do ponto sobre a ilustração, em % da largura e da altura. lat/lng: sede atual.
    pontos: [
      {
        id: 'casa-nova',
        nome: 'Ruínas de Casa Nova',
        curto: 'Casa Nova',
        sala: 'casa-nova',
        x: 29,
        y: 34.7,
        lat: -9.16194,
        lng: -40.9708,
        pronta: true,
        resumo: 'Fotografias de acervo, o mapa do município, o morador ilustre e a canção “Abraço do Tempo”.',
      },
      {
        id: 'remanso',
        nome: 'Ruínas de Remanso',
        curto: 'Remanso',
        sala: 'remanso',
        x: 54.8,
        y: 26.3,
        lat: -9.63,
        lng: -42.08,
        pronta: true,
        resumo: 'A antiga cidade de cais e vapores, a remoção entre 1975 e 1977 e as ruínas que a seca devolve.',
      },
      {
        id: 'sento-se',
        nome: 'Ruínas de Sento Sé',
        curto: 'Sento Sé',
        sala: 'sento-se',
        x: 71.6,
        y: 19.3,
        lat: -9.74583,
        lng: -41.885,
        pronta: true,
        resumo: 'A linha do tempo de 1719 a 2026, fotografias da antiga e da nova cidade e os números da inundação.',
      },
      {
        id: 'pilao-arcado',
        nome: 'Ruínas de Pilão Arcado',
        curto: 'Pilão Arcado',
        sala: 'pilao-arcado',
        x: 35.7,
        y: 27,
        lat: -9.99777,
        lng: -42.48476,
        pronta: true,
        resumo: 'A linha do tempo desde o século XVII, imagens do acervo, as ruínas da igreja e vídeos.',
      },
    ],
  },
  referencias: [
    {
      texto:
        'INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA (IBGE). **Monografias municipais: Pilão Arcado (BA)**. Rio de Janeiro: IBGE, 2016. Coordenadas da sede municipal. Disponível em: https://biblioteca.ibge.gov.br/visualizacao/periodicos/2980/momun_ne_ba_pilaoarcado.pdf. Acesso em: 18 nov. 2026.',
    },
    {
      texto:
        'INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA (IBGE). **Remanso - BA**: mapa municipal. Rio de Janeiro: IBGE, 2020. Disponível em: https://geoftp.ibge.gov.br/cartas_e_mapas/mapas_municipais/colecao_de_mapas_municipais/2020/BA/remanso/2926004_MM.pdf. Acesso em: 18 nov. 2026.',
    },
    {
      texto:
        'CIDADE BRASIL. **Município de Sento Sé** e **Município de Casa Nova**: coordenadas geográficas. [S. l.]: Cidade Brasil, [s.d.]. Disponível em: https://www.cidade-brasil.com.br/municipio-sento-se.html e https://www.cidade-brasil.com.br/municipio-casa-nova.html. Acesso em: 18 nov. 2026.',
    },
    {
      texto:
        'APARIÇÃO de ruínas revela memórias de moradores de cidades inundadas na Bahia. **Agência Brasil**, Brasília, 28 dez. 2015. Disponível em: https://agenciabrasil.ebc.com.br/geral/noticia/2015-12/aparicao-de-ruinas-revela-memorias-de-moradores-de-cidades-inundadas-na-bahia. Acesso em: 18 nov. 2026.',
    },
    {
      texto:
        'LIMA, Alessandra R. A antiga igreja de Pilão Arcado na Bahia e a sua persistência na paisagem. **Revista Tarairiú**, Campina Grande, v. 1, n. 23, 2023. Disponível em: https://revista.uepb.edu.br/REVELAP/article/download/3010/2207/9305. Acesso em: 18 nov. 2026.',
    },
  ],
}

export const fechamento = {
  id: 'fechamento',
  titulo: 'Ecomuseologia',
  texto:
    'Pensar Sobradinho como ecomuseu é entender o território inteiro como acervo: o lago, as ruínas, os caminhos de mudança e as pessoas que carregam a cidade antiga na fala. O museu, aqui, não tem paredes; tem margem.',
  citacao: 'A água cobriu o chão, mas nunca alcançou a memória.',
  autoria: 'Epígrafe curatorial desta exposição',
  audio: { src: '/audio/sobradinho.mp3', titulo: '“Sobradinho”, Sá e Guarabyra (versão de Chico César)' },
  rodape: 'Protótipo de exposição virtual · imagens ilustrativas · [CRÉDITOS DO ACERVO]',
}

export const circuito = [
  { id: 'entrada', rotulo: 'Entrada' },
  { id: 'curadoria', rotulo: 'Curadoria' },
  { id: 'casa-nova', rotulo: 'Casa Nova' },
  { id: 'remanso', rotulo: 'Remanso' },
  { id: 'sento-se', rotulo: 'Sento Sé' },
  { id: 'pilao-arcado', rotulo: 'Pilão Arcado' },
  { id: 'fechamento', rotulo: 'Fechamento' },
  { id: 'trilha', rotulo: 'Trilha' },
  { id: 'material-adicional', rotulo: 'Material adicional' },
]

const URL_RC = 'https://www.camara.leg.br/radio/programas/'
const RC_ACERVO = 'Rádio Câmara (Câmara dos Deputados)'

export const materialAdicional = {
  id: 'material-adicional',
  titulo: 'Material adicional',
  intro:
    'Para ouvir e ver além da exposição: a reportagem especial da Rádio Câmara sobre os 50 anos da barragem de Sobradinho, com depoimentos de moradores de Remanso, Casa Nova, Pilão Arcado e Sento Sé, e vídeos sobre Pilão Arcado Velho.',
  serie: {
    titulo: '50 anos da Barragem de Sobradinho',
    programa: 'Reportagem Especial · Rádio Câmara (Câmara dos Deputados) · junho de 2023',
    texto:
      'As obras da represa de Sobradinho começaram em junho de 1973, no sertão da Bahia. Nos anos seguintes, povoados foram alagados, cerca de 70 mil pessoas foram deslocadas e surgiu o maior lago artificial do Brasil. A série, de cinco capítulos, ouve quem viveu essa mudança. Aqui estão os capítulos 2, 3 e 4.',
  },
  capitulos: [
    {
      id: 'cap-2',
      titulo: 'Capítulo 2',
      data: '27 jun. 2023',
      duracao: '10 min 2 s',
      resumo:
        'Antigos moradores das cidades alagadas fazem um balanço de prós e contras da obra, entre as memórias submersas e as esperanças de desenvolvimento para a região.',
      entrevistas:
        'José Rodrigues da Silva, Maria Perpétua dos Santos e Ariosvaldo de Araújo, ex-moradores de Remanso Velho; Lenita Braga Ferreira, de Casa Nova; Rosália Santos e Darci Barbosa, de Pilão Arcado.',
      audio: { src: '/audio/reportagem-sobradinho-cap-2.mp3', titulo: '50 anos da Barragem de Sobradinho · Capítulo 2' },
      fonte: `${URL_RC}974973-50-anos-da-barragem-de-sobradinho-capitulo-2`,
    },
    {
      id: 'cap-3',
      titulo: 'Capítulo 3',
      data: '28 jun. 2023',
      duracao: '9 min 24 s',
      resumo:
        'Remanso, Casa Nova, Sento Sé e Pilão Arcado já existiam muito antes da represa, mas o cotidiano mudou com o enchimento do lago e a operação da usina. Os moradores se dividem entre a saudade das cidades velhas e a valorização das cidades novas.',
      entrevistas:
        'Entre os entrevistados, Lenita Braga Ferreira e José Roberto, de Casa Nova; Rosália dos Santos e Florzino da Silva, de Pilão Arcado; Armando Alves e Jurandir da Silva, de Sento Sé; Gumercindo dos Santos, de Sobradinho.',
      audio: { src: '/audio/reportagem-sobradinho-cap-3.mp3', titulo: '50 anos da Barragem de Sobradinho · Capítulo 3' },
      fonte: `${URL_RC}974964-50-anos-da-barragem-de-sobradinho-capitulo-3`,
    },
    {
      id: 'cap-4',
      titulo: 'Capítulo 4',
      data: '29 jun. 2023',
      duracao: '6 min 48 s',
      resumo:
        'O deslocamento de mais de 70 mil pessoas criou uma dívida social do Estado com os moradores da região. O Ipea já apontou violações de direitos como moradia, água, energia, mobilidade, trabalho e renda.',
      entrevistas:
        'Marcos Souza, do Movimento dos Atingidos por Barragens; Marta dos Santos, pesquisadora do Ipea; João Henrique Franklin, presidente da Eletrobras Chesf; Ariosvaldo de Araújo, morador de Sobradinho e ex-dirigente da fundação que reunia os municípios do entorno da represa.',
      audio: { src: '/audio/reportagem-sobradinho-cap-4.mp3', titulo: '50 anos da Barragem de Sobradinho · Capítulo 4' },
      fonte: `${URL_RC}974957-50-anos-da-barragem-de-sobradinho-capitulo-4`,
    },
  ],
  ficha: `Autoria: ${RC_ACERVO}, [reportagem e produção a confirmar] · Data: jun. 2023 · Veiculação: Programa Reportagem Especial`,
  referencias: [
    {
      texto:
        'CÂMARA DOS DEPUTADOS. Rádio Câmara. **50 anos da Barragem de Sobradinho**: capítulo 2. Reportagem Especial. Brasília: Câmara dos Deputados, 27 jun. 2023. 1 áudio (10 min 2 s). Disponível em: ' + URL_RC + '974973-50-anos-da-barragem-de-sobradinho-capitulo-2. Acesso em: 17 nov. 2026.',
    },
    {
      texto:
        'CÂMARA DOS DEPUTADOS. Rádio Câmara. **50 anos da Barragem de Sobradinho**: capítulo 3. Reportagem Especial. Brasília: Câmara dos Deputados, 28 jun. 2023. 1 áudio (9 min 24 s). Disponível em: ' + URL_RC + '974964-50-anos-da-barragem-de-sobradinho-capitulo-3. Acesso em: 17 nov. 2026.',
    },
    {
      texto:
        'CÂMARA DOS DEPUTADOS. Rádio Câmara. **50 anos da Barragem de Sobradinho**: capítulo 4. Reportagem Especial. Brasília: Câmara dos Deputados, 29 jun. 2023. 1 áudio (6 min 48 s). Disponível em: ' + URL_RC + '974957-50-anos-da-barragem-de-sobradinho-capitulo-4. Acesso em: 17 nov. 2026.',
    },
  ],
}
