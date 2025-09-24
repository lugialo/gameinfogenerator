Coloque aqui sua fonte OTF

- Caminho esperado: ./src/renderer/src/assets/fonts/MinhaFonte.otf
- Nome do arquivo: MinhaFonte.otf (ou altere o nome em src/assets/base.css na regra @font-face)

Como usar:
- A fonte é registrada com font-family: 'MinhaFonte'.
- Tailwind foi atualizado para usar 'MinhaFonte' como família `sans`. Você pode aplicar via classes Tailwind:
  - <div class="font-sans">Texto com MinhaFonte</div>

Se quiser adicionar pesos/itálicos diferentes, crie mais regras @font-face com font-weight e font-style e aponte para os arquivos correspondentes.

Exemplo de @font-face adicional:

@font-face {
  font-family: 'MinhaFonte';
  src: url('./fonts/MinhaFonte-Bold.otf') format('opentype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}