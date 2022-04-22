// Currying

// Sin currying
const multiplicación = (a, b) => a * b
multiplicación(3, 4)
multiplicación(3, 5)
multiplicación(3, 6)

// Con currying
const multiply = (a) => {
  return (b) => a * b
}

const multBy3 = multiply(3)
multBy3(4)
multBy3(5)
multBy3(6)


// Tablas de multiplicar sin currying
/*
for(let i = 1; i <= 10; i ++) {
  console.log(`Tabla del ${i}`)
  for(let j = 1; j <= 10; j ++) {
      console.log(`${i} * ${j} = ${multiplicación(i, j)}`)

  }
}*/


// Tablas de multiplicar con currying
/*const multiplies = []
for(let i = 1; i <= 10; i ++) {
  multiplies[i] = multiply(i);
}
for(let i = 1; i <= 10; i ++) {
  console.log(`Tabla del ${i}`)
  for(let j = 1; j <= 10; j ++) {
      console.log(`${i} * ${j} = ${multiplies[i](j)}`)
  }
}*/