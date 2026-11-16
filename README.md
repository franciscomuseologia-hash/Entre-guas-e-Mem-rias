# Entre Águas e Memórias

Remanso, Casa Nova, Sento Sé e Pilão Arcado: histórias de vidas e pertencimentos.

Exposição virtual de página única, feita com React, Vite, Tailwind CSS e Lucide Icons.

## Rodar

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:5173
npm run build    # gera a pasta dist/
npm run preview  # confere o build localmente
```

## Colocar o acervo

Todo o conteúdo está em `src/data.js`.

- **Fotografias:** coloque os arquivos em `public/fotos/` e preencha `src` (ex.: `'/fotos/casa-nova-01.jpg'`) e `creditos` de cada foto. Sem `src`, a foto aparece como painel ilustrativo.
- **Áudios:** coloque os arquivos em `public/audio/` com os nomes de `audio.src` (`sobradinho.mp3`, `casa-nova.mp3`, `remanso.mp3`, `pilao-arcado.mp3`, `sento-se.mp3`) ou ajuste os caminhos.
- **Relatos orais:** edite `remanso.relatos`.
- **Textos curatoriais:** edite `entrada`, as introduções de cada núcleo e `fechamento`.

## Publicar em domínio próprio

Depois de `npm run build`, publique a pasta `dist/` em qualquer hospedagem estática (Netlify, Vercel, Cloudflare Pages, GitHub Pages) e aponte seu domínio para ela.

## Estrutura

```
src/
  data.js            conteúdo da exposição
  App.jsx            monta as salas e controla o lightbox
  components/        Nav, AudioPlayer, Foto, Lightbox, NucleoCabecalho
  sections/          uma sala por arquivo
```

Acessibilidade: navegação por teclado, foco visível, lightbox com Esc e setas, e movimento reduzido respeitado.
