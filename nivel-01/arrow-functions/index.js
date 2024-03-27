//?Escribe una función llamada filterByLength que tome dos parámetros: un array de strings y un número n. La función debe devolver un nuevo array que contenga solo las cadenas que tienen una longitud mayor o igual a n. Debe usar arrow functions para lograr esto.

const filterByLength = (arrayString, number) => {
  let results = [];
  for (let i = 0; i < arrayString.length; i++) {
    if (arrayString[i].length >= number) {
      results.push(arrayString[i]);
    }
  }
  return results;
};

function main() {
  const arr = ['hola', 'adios', 'bienvenido', 'chau'];
  console.log(filterByLength(arr, 5)); // debería imprimir ["adios", "bienvenido"]
}

main();
