// Caso prototipo
const obj = {
  name: 'obj',
  getName: function() {
    console.log(this.name)
  }
}

const obj2 = Object.create(obj);
obj2.name = 'obj2';

console.log(obj)
console.log(obj2)