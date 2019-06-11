//VARIABLES
var canvas = document.getElementById("example");
var ctx = canvas.getContext("2d");
let turno = 1;
let bullets1 = [];
let bullets2 = [];

//INSTANCIAS

let tierra  = new Board()
let player1 = new Player(50 ,30, "green") 
let player2 = new Player(canvas.width - 75, 30, "grey");

//FUNCIONES

function SetUp (){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  tierra.drawTerra()
  tierra.obstacule()
  player1.drawPlayer()
  player2.drawPlayer()
  requestAnimationFrame(SetUp)
}
SetUp();

//PLAYER 1
function makeBullets(){
  bullets1.push(new Proyectil(player1.x, player1.y, player1.color, 45, 50))
}
function drawshot1(){
  bullets1.forEach((bullet, i) => {
  bullet.trayectoria()
  bullet.drawShot();
  });
  requestAnimationFrame(drawshot1);
}

// function checkColition (){
//   bullets1.forEach((bullet,i) =>{
//     if(bullet.crash(player2.x)){
//       console.log("ok")
//     }
//   })
// }



//PLAYER 2
function makeBullets2() {
  bullets2.push(new Proyectil(player2.x, player2.y, player2.color, 89, 100));
}
function drawshot2() {
  bullets2.forEach(function(bullet, i) {
  bullet.trayectoria();
  bullet.drawShot2();
  });
  requestAnimationFrame(drawshot2);
}


      
//LISTENERS

//P1
window.onkeydown = function(e) {
  switch (e.keyCode) {
    case 32:
      player1.velocidad1();
      
      // checkColition();
      break;
    case 37:
      player1.moveLeft(0);
      break;
    case 39:
      player1.moveRight(tierra.x - tierra.width/4.5);
      break;
//P2
    case 96:
      player2.velocidad1();
      break;
    case 97:
      player2.moveLeft(tierra.x + tierra.width + 5);
      break;
    case 99:
      player2.moveRight(canvas.width - 30);
      break;
  }
};



//P1
window.onkeyup = function(e) {
  switch (e.keyCode) {
    case 32:
      player1.velocidad2();
      player1.velocidadFinal()
      drawshot1();
      makeBullets();
      // checkColition();
      break;

//P2
    case 96:
      player2.velocidad2();
      drawshot2();
      makeBullets2();
      break;

  }
};