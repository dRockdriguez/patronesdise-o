// Mixin
const mixin = {
  saludar() {
    console.log(`Hola ${this.nombre}!!`)
  },
  despedir() {
     console.log(`Adiós ${this.nombre}!!`)
  }
}

class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

// Asignamos el mixin al prototipo
Object.assign(Usuario.prototype, mixin)

const u = new Usuario("pepe")
u.saludar();
u.despedir();