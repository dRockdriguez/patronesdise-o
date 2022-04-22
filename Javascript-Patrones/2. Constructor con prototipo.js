// Patrón constructor de JS con prototipos
class MyClass {
  constructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
  }

  // Es un método de prototipo
  method() {
    console.log('This is a method');
  }
}

const instance = new MyClass('prop1', 'prop2');

console.log(instance)
console.log(instance.prop1);
console.log(instance.prop2);
instance.method();