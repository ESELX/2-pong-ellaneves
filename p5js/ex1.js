let posX, posY; // posiçao X e Y
let velX, velY; //velocidade
let padWidth, padHeight;
let diamBall;
let points;
let vel; //Variáveis tipo let nomeDaVar;

function setup() { //código que só corre uma vez

  ///Não Apagar para Baixo até <<<
  var canvasDiv = document.getElementById('ex1');
  var width = canvasDiv.offsetWidth;
  var sketchCanvas = createCanvas(width,width*.75);
  console.log(sketchCanvas);
  sketchCanvas.parent('ex1');
  ///<<< Não fica a faltar createCanvas

  posX = random(width);
  posY = 30; // height
  vel = 5;
  velX = vel // (-7,-7);
  velY = vel // random (-7,-7)
  padWidth = 80 ;
  padHeight = 8 ;
  diamBall = 15 ;
  points = 0;

}

function draw() { //código que corre em loop
  background(90,75,250); //Red Green Blue
 text (points, 20,20);
 posX = posX + velX;
 posY = posY + velY;
 ellipse(posX,posY,diamBall); // posiçao random da bola no inicio do jogo
 rectMode(CENTER);
 fill (255,255,255);
 rect (mouseX,height-10, padWidth, padHeight);

//Condições
 if (posX-diamBall/2 <= 0 || posX+diamBall/2 >= width ) { //menor ou igual  a 0 // maior ou igual // barinhas = ou
 velX = velX*-1; //* dividir menos 1 // muda o sinal da velocidade
 }
 if (posY-diamBall/2 <= 0) {
 velY = velY*-1; // muda o sinal da velocidade
 }

 if (posY+diamBall/2 >= height ){
 print ("perdeste");
 velY=0;
 velX=0;
 points = "perdeste"; }

 if (velX != 0 && posX >=mouseX-padWidth/2 && posX <= mouseX+padWidth/2 && posY+diamBall/2 >= height - 10 - padHeight/2) { // posX-diamBall/2 >= mouseX-padWidth/2 && posX+diamBall/2 <=mouseX+padWidth/2 && postY>= height-10-padHeight/2)
  velY = -random ( vel-3,vel);
  velX = random ( -vel,vel);
 points++
 }
}
