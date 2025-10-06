function obtenerNumerosPares(numeros) {
  const numerosPares = [];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      numerosPares.push(numeros[i]);
    }
  }
  return numerosPares;
}

const obtenerNumerosParesArrowFunction = (numeros)=> numeros.filter((num) => num % 2 === 0);
  