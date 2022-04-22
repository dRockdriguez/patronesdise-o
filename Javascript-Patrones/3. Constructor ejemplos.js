// Ejemplos patrón constructor
Object.prototype.log = function () {
  console.log(this)
}

String.prototype.myTrim = function() {
  return this.replace(/ /g,"")
}

const obj = {
  prop1: 'prop1',
}

obj.log();

const str1 = " hola "
console.log(str1.myTrim())

/*
class MyClass() {
	constructor() {
  	this.method = () => {
    	console.log('method')
    }
  }
}

class MyClass() {
	method() {
  	console.log('method')
  }
}

La diferencia es que en el segundo caso el método se está añadiendo al prototipo, y por lo tanto esté metodo vive ahí. En el primer caso, cada vez que se crea un objeto de tipo MyClass se le añade ese método. Funcionalmente son lo mismo, pero a nivel de memoria es diferente.
*/