//VARIABLES
var canvas = document.getElementById("example");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 50;


//CLASES
class Player {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.color = z;

    this.width = 30;
    this.height = 30;

    this.life = 5;
  }
  moveLeft(top) {
    if (this.x > top) {
      this.x -= 5;
    }
  }
  moveRight(top) {
    if (this.x < top) this.x += 5;
  }
  velocidad1() {
    this.velocidad1 = new Date().getTime();
  }
  velocidad2() {
    this.velocidad2 = new Date().getTime();
  }
  velocidadFinal(){
    this.velocidad = Math.floor(((this.velocidad1 - this.velocidad2) * -1) / 10);
    console.log(this.velocidad)

  }

  drawPlayer() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, canvas.height - this.y, this.width, this.height);
    ctx.save();
  }
}
