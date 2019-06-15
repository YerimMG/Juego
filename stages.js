//VARIABLES
var canvas   = document.getElementById("example");
var ctx      = canvas.getContext("2d");

canvas.width  = window.innerWidth ;
canvas.height = window.innerHeight; 

//CLASES
class Board {
  constructor() {
    this.x = canvas.width/2
    this.y = canvas.height-300
    this.width = 150;
    this.height = 300;
    this.gravedad = -10; //AGregar la gravedad segun el escenario escogido
  }
  drawTerra() {
    ctx.fillStyle = "	#123346";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.save();
  }
  obstacule (){
    ctx.strokeStyle = "#123346";
    ctx.lineWidth = 3;
    ctx.strokeRect(this.x, this.y, this.width, this.height*this.height);
    

  }
}
