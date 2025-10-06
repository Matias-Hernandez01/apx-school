function main (){
  const arr = ["hola", "adios", "bienvenido", "chau"];
  let resultados = [];
  
  const filterByLength = (arrayDeStrings, cantidadDeLetras )=> {
    for(let i = 0; arrayDeStrings.length > i; i++){
      if(arrayDeStrings[i].length >= cantidadDeLetras){
        resultados.push(arrayDeStrings[i])
      }
    }
    return resultados;
  }
  
  
  console.log(filterByLength(arr, 5)); // debería imprimir ["adios", "bienvenido"]

}



main();