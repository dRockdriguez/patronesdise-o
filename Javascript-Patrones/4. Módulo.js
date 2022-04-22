// Patrón módulo.
const module = {
  prop: 'prop',
  prop2: {
  	prop1: 'prop1',
    prop2: 'prop2'
  },
  method: () => {
    console.log(`Method, ${module.prop}, ${module.prop2.prop1}, ${module.prop2.prop2}`)
  }
}
module.method()