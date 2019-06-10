//VARIABLES
var canvas = document.getElementById("example");
var ctx = canvas.getContext("2d");
let turno = 1;
let bullets1 = [];
let bullets2 = [];

//INSTANCIAS

let tierra  = new Board()
let player1 = new Player(50 ,30, "green") 
let player2 = new Player(canvas.width - 50, 30, "grey");

//FUNCIONES

function SetUp (){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  tierra.drawTerra()
  player1.drawPlayer()
  player2.drawPlayer()
  requestAnimationFrame(SetUp)
}
SetUp();

//PLAYER 1
function makeBullets(){
  bullets1.push(new Proyectil(player1.x, player1.y, player1.color))
}
function drawshot1(){
  bullets1.forEach((bullet, i) => {
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
  bullets2.push(new Proyectil(player2.x, player2.y, player2.color));
}
function drawshot2() {
  bullets2.forEach(function(bullet, i) {
  bullet.drawShot2();
  });
  requestAnimationFrame(drawshot2);
}


      
//LISTENERS

window.onkeydown = function(e) {
  switch (e.keyCode) {
    case 32: //P1
      drawshot1();
      makeBullets();
      // checkColition();
      break;

    case 37:
      player1.moveLeft();
      break;

    case 39:
      player1.moveRight();
      break;

    case 96: //P2
      makeBullets2();
      drawshot2();
      break;
  }
};



