//VARIABLES
var canvas   = document.getElementById("example");
var ctx      = canvas.getContext("2d");

canvas.width  = window.innerWidth ;
canvas.height = window.innerHeight; 

//CLASES
class Board {
  constructor() {
    this.x = 500;
    this.y = canvas.width/2;
    this.width = 150;
    this.height = 300;
    this.gravedad = -10; //AGregar la gravedad segun el escenario escogido
  }
  drawTerra() {
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.save();
  }
  obstacule (){
    ctx.strokeStyle = "#FF0000";
    ctx.lineWidth = 5;
    ctx.strokeRect(this.x, this.y, this.width, this.height*this.height);
    

  }
}
