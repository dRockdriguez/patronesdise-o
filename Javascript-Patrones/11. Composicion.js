const people = [
  {
    age: 23,
    name: 'Pepe',
    surname: 'Gonzalez',
  },
  {
    age: 33,
    name: 'Paco',
    surname: 'Rodriguez',
  },
  {
    age: 56,
    name: 'Antonio',
    surname: 'Suarez',
  },
  {
    age: 16,
    name: 'Maria',
    surname: 'Alvarez',
  },
  {
    age: 1,
    name: 'Leon',
    surname: 'Rodriguez',
  },
];

/*
// Composición 1
// Función original de forma imperativa
const getFirstKid = (people) => {
  const kids = people.filter((p) => p.age < 2)
  const kid = kids[0]
  const resultKid = {
    completeName: `${kid.name} ${kid.surname}`,
    age: kid.age
  }
  
  return `The first kid ${resultKid.completeName} is ${resultKid.age} years old`
}

console.log(getFirstKid(people));
*/

// Composición 2
// Desacoplamos el código para que sea más reutilizable. Composición de funciones
const head = (arr) => arr[0];
const mapper = (k) => ({ completeName: `${k.name} ${k.surname}`, age: k.age });
const formatter = (k) =>
  `The first kid ${k.completeName} is ${k.age} years old`;
const filter = (f) => (people) => people.filter(f);

/*const getFirstKid = (people) => formatter(mapper(head(people.filter((p) => p.age < 2))))

console.log(getFirstKid(people));
*/
// Composición 3, función compose
/*const compose =
  (...functions) =>
  (x) =>
    functions.reduceRight((acc, func) => func(acc), x);

const getFirstKid = (people) =>
  compose(
    formatter,
    mapper,
    head,
    filter((k) => k.age < 2)
  )(people);

console.log(getFirstKid(people));*/

// Composición 4, funcion pipe
// igual que la anterior, pero se utiliza reduce y se ejecuta el array de funciones
// de izquierda a derecha.
// Hacemos otra función para tener trazabilidad del pipe 
// (obviamente se puede usar en compose también)
const logger = (x) => (y) => {
  console.log(x, y);
  return y;
};

const pipe =
  (...functions) =>
  (x) =>
    functions.reduce((acc, func) => func(acc), x);
const getFirstKid = (people) =>
  pipe(
    filter((k) => k.age < 2),
    logger('despues del filter'),
    head,
    logger('despues del head'),
    mapper,
    logger('despues del mapper'),
    formatter
  )(people);

console.log(getFirstKid(people));
console.log('A');
