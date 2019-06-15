
//VARIABLES
var canvas = document.getElementById("example");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 50;


//CLASES
class Player {
  constructor(x, y, z, f, v) {
    this.x = x;
    this.y = y;
    this.color = z;

    this.width = 30;
    this.height = 30;

    this.life = 3;

    this.keyPush = f
    this.keyUp = f
    this.velocidad = v
  }
  moveLeft(top) {
    if (this.x > top) {
      this.x -= 10;
          console.log(this.keyPush);
          console.log(this.keyUp);
    }
  }
  moveRight(top) {
    if (this.x < top) 
      this.x += 10;
  }
  velocidad1() {
    if(this.velocidad1 = new Date().getTime()){
      this.keyPush = true

      }
    };
  
  velocidad2() {
    if(this.velocidad2 = new Date().getTime()){
      this.keyUp = true

    };
  }
  velocidadFinal(){
    this.velocidad = Math.floor(((this.velocidad1 - this.velocidad2) * -1) / 10);
    if(this.velocidad > 110){
      this.velocidad = 120
    }
 }

  drawPlayer() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, canvas.height - this.y, this.width, this.height);
    ctx.fillRect(this.x, canvas.height- this.y, this.width/2, this.height/2);
    ctx.save();
  }
}


//  change(){
//    if (this.keyPush === false && this.keyUp === false){
//      this.keyPush = true
//      this.keyUp = true
   
//    }
//  }






