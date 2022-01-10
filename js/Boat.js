// Código de Inicio PRO C27 V2 Detección de Colisiones
class Boat {
  // I) Profe Pasamos el valor de la variable en el argumento boatAnimation 
  constructor(x, y, width, height, boatPos, boatAnimation) {
  
   // J) Profe Agremamos el parámetro aminación al cuerpo Boat que estamos creando.    
       this.animation = boatAnimation;

    // Ja) Profe Agrega propieda de velocidad 
        this.speed = 0.05;

        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.boatPosition = boatPos;

    // Jb) Profe Agregamos propiedad variable para cambiar cuando el boat esté quebrado   
        this.isBroken = false;

  
    // Jb) Eliminamos el archivo de imagen, porque ya no lo necesitamos
      //this.image = loadImage("./assets/boat.png");

         World.add(world, this.body);
  }

  // K) Profe Función que determina la rapidez de la animación. 
  animate() {
  // L) Profe La rapidez incrementará a medida que avanza el juego.      
      this.speed += 0.05;
  }

  remove(index) {
    setTimeout(() => {
      Matter.World.remove(world, boats[index].body);
      delete boats[index];
    }, 2000);
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;

// M) Profe Creamos variable Index para recorrer conjunto de animaciones
//  Tomamos el valor piso (redondeado hacia abajo) de dividir  la velocidad de la animación entre la duración (o longitud de cuadros)
    var index = floor (this.speed % this.animation.length);

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);

// N) Profe En lugar de tener this.image, ahora será this.animation e [index] para recorrer las animaciones 
     //image(this.image, 0, this.boatPosition, this.width, this.height);
     image(this.animation[index], 0, this.boatPosition, this.width, this.height);
// PASAMOS A SKETCH    

    pop();
  }
}
