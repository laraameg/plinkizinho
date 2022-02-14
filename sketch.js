const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var balls = [];
var plinkos = [];
var divisions = [];
var ball;
var estado = "comeco";
var contador = 0;
//crie a variável de estado de jogo e dê um valor inicial a ela

//crie a variável contador e ajuste seu valor para 0; Elva vai contar quantas bolas o jogador já lançou

var divisionHeight = 300;
var score = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }
  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 375));
  }

}

function draw() {
  background("black");
  textSize(35)
  text("Score : " + score, 20, 40);
  fill("white");

  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
  Engine.update(engine);
  ground.display();

  //faça com que o jogo se encerre se o contador chegar a 5. Coloque uma mensagem de Game OVer na tela
  if (contador >= 5) {
    textSize(100);
    text("game over", 150, 250);
    estado = "fim";
  }


  /*
  atualize a pontuação de acordo com o número mostrado no espaço onde a bola caiu
  Se a bola estiver em uma posição y maior que 760, usar if else para:
  - Se a posição x da bola for maior que 0 e menor que 300 -> 500 pontos.
  - Se a posição x da bola é maior que 301 e menor que 600 -> 100 pontos.
  - Se a posição x da bola é maior que 601 e menor que 800 -> 200 pontos

  *Assim que a pontuação for dada, fazer a bola ser nula
  */

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  if (ball != null) {
    ball.display();
  }


  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }


  if (ball != null && ball.body.position.y > 760) {
    if (ball.body.position.x > 0 && ball.body.position.x < 300) {
      score = score + 500;
      ball = null;

    } else if (ball.body.position.x > 301 && ball.body.position.x < 600) {

      score = score + 100;
      ball = null;

    } else if (ball.body.position.x > 601 && ball.body.position.x < 800) {
      score = score + 200;
      ball = null;
    }
  }


}

function mousePressed() {
  if (estado === "comeco") {
    contador++
    ball = new Ball(mouseX, 10, 10, 10);
  }
  // faça com que a bola só seja gerada se o estado de jogo estiver não for o de fim
  //aumente o contador de chanceas a cada vez que uma bola for gerada
}

