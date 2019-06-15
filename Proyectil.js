
//VARIABLES
var canvas = document.getElementById("example");
var ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth ;
// canvas.height = window.innerHeight; 

//CLASES
class Proyectil {
  constructor(x, y, z, a, v, t) {
    this.x = x;
    this.y = y;
    this.color = z;
    this.width = 15;
    this.height = 15;

    this.angulo = a;
    this.velocidad = v;
    this.time = t;
  }
  trayectoria() {
    this.time += 0.033 * 3;   
    //Movimento de Y
    this.anguloRadians = (this.angulo * Math.PI) / 180;
    this.velocidadYinicial = this.velocidad * Math.sin(this.anguloRadians);
    this.y1 =
      (tierra.gravedad * this.time * this.time) / 2 +
      this.velocidadYinicial * this.time +
      this.y;

    //Movimiento de X
    this.velocidadXinicial = this.velocidad * Math.cos(this.anguloRadians);
    this.x1 = this.x + this.velocidadXinicial * this.time;
    this.x2 = this.x - this.velocidadXinicial * this.time;
  }

  drawShot() {
    ctx.fillStyle = this.color;
    ctx.fillRect(
      this.x1 + 7.5,
      canvas.height - this.y1 + 7.5,
      this.width,
      this.height
    );

  }

  drawShot2() {
    ctx.fillStyle = this.color;
    ctx.fillRect(
      this.x2 + 7.5,
      canvas.height - this.y1 + 7.5,
      this.width,
      this.height
    );
  }

  crash1() {
    return  (this.y1 < 0) ||
      (this.x1 >= canvas.width) ||
      (this.y1 <= tierra.height) &&
      (this.x1 >= tierra.x - tierra.width/4.5) &&
      (this.x1 <= tierra.x + tierra.width)
  }

  crashWhit1(enemy){
    return (this.x1 >= enemy.x) && 
    (this.x1 <= enemy.x + enemy.width) && 
    (this.y1 <= enemy.y + enemy.height) &&
    (this.y1 >= enemy.y - enemy.height)
  }


    crash2() {
    return (this.y1 < 0) ||
    (this.x2 <= 0) ||
    (this.y1 <= tierra.height) &&
    (this.x2 <= tierra.x + tierra.width) &&
    (this.x2 >= tierra.x + tierra.width/4.5)
  }

    crashWhit2(enemy){  
    return this.x2 <= enemy.x + enemy.width &&
    this.x2 >= enemy.x &&
    this.y1 <= enemy.y + enemy.width&&
    this.y1 >= 0 
   
    }
}