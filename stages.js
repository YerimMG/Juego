//VARIABLES
var canvas   = document.getElementById("example");
var ctx      = canvas.getContext("2d");

canvas.width  = window.innerWidth - 30;
canvas.height = window.innerHeight - 5; 

//CLASES
class Board {
  constructor() {
    this.x = canvas.width /2 - 50;
    this.y = canvas.height - 150;
    this.width = 150;
    this.height = 150;
    this.gravedad = -10; //AGregar la gravedad segun el escenario escogido
  }
  drawTerra() {
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.save();
  }
}
