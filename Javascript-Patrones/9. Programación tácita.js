// Programación tácita o point free
// Para hacer composición, eliminar boiler plate...
function compute() {
  return [...Array(10).keys()]
}

const f = (path, cb) => {
  const result = compute();
  cb(path, result);
}

const callBack = (path, result) => console.log(path, result)

// En lugar de escribir la función como anónima en la llamada a f,
// definimos el callback como una constante y se la pasamos por parámetro
// Así facilita la lectura del código y los tests unitarios.
f('/users', callBack)