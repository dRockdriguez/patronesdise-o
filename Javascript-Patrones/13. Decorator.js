// Decorator
// La diferencia con el mixin es que en el mixin se añaden al prototipo y aquí a la
// instancia
/*class Ordenador {
  constructor(precio, marca) {
    this.precio = precio
    this.marca = marca
  }
}

const ordenador = new Ordenador(1000, 'HP')
ordenador.agregarMemoria = function() {
  this.precio += 100;
}

ordenador.agregarMemoria();

ordenador.precio;*/

// Otra forma de hacer decorador, envolver la función que queremos decorar con
// otra función y le cambiamos el comportamiento
class Ordenador {
    precio() {
      return 1000
    }
}

const memoria = (ordenador) => {
  const precio = ordenador.precio();
  ordenador.precio = function() {
    return precio + 1000;
  }
}

const ordenador = new Ordenador()
memoria(ordenador);
ordenador.precio()
