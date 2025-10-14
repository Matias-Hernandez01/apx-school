
function filterByLength(arrayOfString, amount){

  return arrayOfString.filter((string) => string.length >= amount)

}




const arr = ["hola", "adios", "bienvenido", "chau"];
console.log(filterByLength(arr, 5)); // debería imprimir ["adios", "bienvenido"]