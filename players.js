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
  moveLeft() {
    this.x -= 5;
  }

  moveRight() {
    this.x += 5;
  }
  drawPlayer() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, canvas.height - this.y, this.width, this.height);
    ctx.save();
  }
}
