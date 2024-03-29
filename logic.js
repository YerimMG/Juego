

//VARIABLES
var canvas   = document.getElementById("example");
var ctx      = canvas.getContext("2d");
let turno    = true;
let bullets1 = [];
let bullets2 = [];


//INSTANCIAS

let tierra  = new Board();
let player1 = new Player(0, 30, "#FD7D4C", false);
let player2 = new Player(canvas.width-player1.width, 30, "#FD7D4C", false);

//FUNCIONES

function SetUp (){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  tierra.drawTerra()
  tierra.obstacule()
  player1.drawPlayer()
  player2.drawPlayer()
}

//PLAYER 1

function makeBullets(){
  bullets1.push(new Proyectil(player1.x, 
    player1.y, 
    player1.color,
    parseFloat(document.getElementById("grad").value), 
    player1.velocidad, 0));
}

function drawshot1(){
  bullets1.forEach((bullet, i) => {
  bullet.trayectoria()
  bullet.drawShot();
  
  if (bullet.crashWhit1(player2)) {1
    bullets1.splice(i, 1);
    turno = false
    player2.life -= 1


  }
  if (bullet.crash1()){
    bullets1.splice(i, 1);
    turno = false;

  }
  });
}

//PLAYER 2
function makeBullets2() {
  bullets2.push(
    new Proyectil(player2.x,
      player2.y,
      player2.color,
      parseFloat(document.getElementById("grad20").value),
      player2.velocidad,0));
}
function drawshot2() {
  bullets2.forEach(function(bullet, i) {
  bullet.trayectoria();
  bullet.drawShot2();
  if (bullet.crashWhit2(player1)) {
    bullets2.splice(i, 1);
    player1.life -= 1
    turno = true;

    
  }
  if (bullet.crash2()){
    bullets2.splice(i, 1);
    turno = true;

  }
  }); 
}

function gameOver(){
if (player1.life <= 0 || player2.lifen <= 0){
  alert("GAME OVER")
  location.reload();
  }
}

function drawLifes(){
  document.getElementById("lifes1").innerHTML = "Lifes of P1: " + player1.life
  document.getElementById("lifes2").innerHTML = "Lifes of P2: " + player2.life;
}

function juego(){
  SetUp()
  drawLifes()
  if(turno){
      drawshot1()
    }
    else{
      drawshot2()
    }
    gameOver();
requestAnimationFrame(juego)
}

juego()
//LISTENERS

//P1
window.onkeydown = function(e) {
  switch (e.keyCode) {
    case 32:

     if(turno){ 
        while (player1.keyPush !== true) {
        player1.velocidad1();
      } 
    }
      break;
    case 37:
      if(turno){
        player1.moveLeft(0);
      }
      break;
    case 39:
      if(turno){
        player1.moveRight(tierra.x - tierra.width/4.5);
      }
      break;
//P2
    case 13:
      if (!turno === true){
      if (!player2.keyPush === true){
      player2.velocidad1();
        } 
      }
    break;
    case 97:
      if(!turno === true){
          player2.moveLeft(tierra.x + tierra.width + 5);
      }
    break;
    case 99:
      if (!turno === true){  
      player2.moveRight(canvas.width - 30);
      }  
    break;
  }
};
//P1
window.onkeyup = function(e) {
  switch (e.keyCode) {
    case 32:
      if(turno){
      if(!player1.keyUp === true){
      player1.velocidad2();
      }
      player1.velocidadFinal()
      drawshot1(); 
      if (bullets2.length === 0 && bullets1.length === 0) {
          makeBullets();
        console.log( "player1", player1.velocidad1,player1.velocidad2, player1.velocidad );
      }
    }    
    break;
//P2
    case 13:
  if(!turno == true){
    if (!player2.keyUp === true) {
        player2.velocidad2();
      } 
      player2.velocidadFinal();
      drawshot2();
      if (bullets2.length === 0 && bullets1.length ===0){
      makeBullets2();
      console.log("player2", player2.velocidad1, player2.velocidad2, player1.velocidad)
      }
    }
    break;
  }
};



