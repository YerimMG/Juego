//VARIABLES
var canvas = document.getElementById("example");
var ctx = canvas.getContext("2d");
var time = 0;


//CLASES
class Proyectil {
  constructor(x, y, z, a, v) {
    this.x = x;
    this.y = y;
    this.color  = z;
    this.width  = 15;
    this.height = 15;
    
    this.angulo = a
    this.velocidad = v

  }
  trayectoria(){
    time += 0.033*3
      //Movimento de Y
      this.anguloRadians = (this.angulo * Math.PI) / 180;
      this.velocidadYinicial = this.velocidad * Math.sin(this.anguloRadians);
      this.y1 =  ((tierra.gravedad * time * time) / 2 + this.velocidadYinicial * time + this.y);

            //Movimiento de X
      this.velocidadXinicial = this.velocidad * Math.cos(this.anguloRadians);
      this.x1 = this.x + this.velocidadXinicial * time;
      this.x2 = this.x - this.velocidadXinicial * time;
  }

  drawShot() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x1+7.5, canvas.height - this.y1+7.5, this.width, this.height);
  }

  drawShot2() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x2 + 7.5,canvas.height - this.y1+7.5, this.width,this.height);
  }

  crash(enemy) {
    return this.x === enemy;
  }
  // return (this.x < enemy.x + enemy.width) && 
  //        (this.x + this.w > enemy.x)  &&
  //        (this.y < enemy.y + enemy.width) &&
  //        (this.y + this.width > enemy.y);
}
