// Patrón módulo revelador
// La principal diferencia con el patrón módulo es que este permite tener API pública 
// y privada mediante el uso de una IIFE (Immediately Invoked Function Expression)
const person = (() =>{
  let name = '';
  
  return {
    setName: (n) => {
      name = n
    },
    getName: () => {
      return name
    }
  }
})();

person.setName("pepe")
person.getName()