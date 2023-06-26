// função responsável por preparar e rodar um código por uma única vez
function setup() {
  // função para criar um canvas (tela) de 400 pixels de largura,             por 400 pixels de altura
  createCanvas(400, 400);
  background("pink");// função para pintar o fundo 
}

// função responsável por desenhar na tela (canvas)
function draw() {
  stroke("blue");// alterando a cor da borda do desenho
  fill("red");// alterando a cor do preenchimento do desenho

//condição se
  if(mouseIsPressed) {
    // rect(posicao_x, posicao_y, largura, altura)
    rect(mouseX, mouseY, 40, 40);
  }
}