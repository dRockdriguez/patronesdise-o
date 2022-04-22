function sum(a, b) {
  return a + b;
}

// Una función de primer orden es una función que puede ser tratada como una variable
const fSum = sum;
const result = fSum(1, 2);
console.log(result);

// Una función de orden superior es una función que puede recibir otras funciones como parámetro
function operation(fn, a, b) {
  console.log("Do something");
  console.log(fn(a, b));
}

operation(sum, 3, 4);

// Arrow function, es una función anónima, es decir, no tiene nombre, se puede guardar en una variable.
// No se utiliza la palabra function para definirlas y tiene cambios respecto al this. El this en
// una arrow function  tiene el contexto de donde esta se ejecuta, a diferencia de una function que el this
// es la propia función.
// Se puede crear directamente la función en el momento de invocar a la función de orden superior
const fAnonim = () => {
  console.log("Hi from fAnonim");
};
fAnonim();

operation((a, b) => a * b, 3, 4);

// Foreach,
// Es inmutable, es decir, el array original no cambiará. Este método no devuelve nada
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach((el, index) => {
  console.log(`El número ${el} está en el indice ${index}`);
  el = 3; // No va a mutar el array
});
console.log(arr);

// Map
// tampoco muta el array, devolverá un array nuevo habiendo procesado todos los elementos del array
// original. Es decir, si el array original tiene 10 elementos, el resultado del map también tendrá 10
const arrToMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrResult = arrToMap.map((el, index) => el + index);
console.log(arrResult);

// Reduce
// Recorre todos los elementos y hace un acumulado procesandolos, es decir, para un array de n elementos
// reduce solo devuelve un resultado
// Recibe dos parámetros, uno es la función y otra el valor inicial que tendrá el acumulador
const arrToReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultReduce = arrToReduce.reduce((acc, el) => {
  return acc + el;
}, 0);
console.log(resultReduce);

// Clases y objetos
// Las funciones son objetos en javascript, podemos crear objetos de diferentes formas
class Example {
  constructor(prop1) {
    this.prop1 = prop1;
  }

  info() {
    return `El valor del prop1 es ${this.prop1}`;
  }
}
const example = new Example("prop1");
console.log(example.info());

function Example1(prop1) {
  this.prop1 = prop1;
  this.info = () => {
    return `El valor del prop1 es ${this.prop1}`;
  };
}
const example1 = new Example1('prop1')
console.log(example1.info());


// Herencia
class Example2 extends Example {
  constructor(prop1, prop2) {
    super(prop1);
    this.prop2 = prop2
  }

  info() {
    return `El valor del prop1 es ${this.prop1}, el de prop2 es ${this.prop2}`;
  }
}
const example2 = new Example2("prop1", "prop2");
console.log(example.info());
