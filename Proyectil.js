//VARIABLES
var canvas = document.getElementById("example");
var ctx = canvas.getContext("2d");



//CLASES
class Proyectil {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.color = z;
    this.width = 15;
    this.height = 15;
  }
  drawShot() {
    ctx.fillStyle = this.color;
    ctx.fillRect(
      (this.x += 2),
      canvas.height - this.y + 7.5,
      this.width,
      this.height
    );
  }

  drawShot2() {
    ctx.fillStyle = this.color;
    ctx.fillRect(
      (this.x -= 2),
      canvas.height - this.y + 7.5,
      this.width,
      this.height
    );
  }

  crash(enemy) {
    return this.x === enemy;
  }
  // return (this.x < enemy.x + enemy.width) && 
  //        (this.x + this.w > enemy.x)  &&
  //        (this.y < enemy.y + enemy.width) &&
  //        (this.y + this.width > enemy.y);
}
