function main() {
  const arrayOfObjects = [
    { texto: 'Hola', number: 1 },
    { texto: 'Mundo', number: 2 },
    { texto: 'JavaScript', number: 3 },
    { texto: 'React', number: 4 },
    { texto: 'Node', number: 5 },
    { texto: 'PostgreSQL', number: 6 },
    { texto: 'Express', number: 7 },
    { texto: 'Postman', number: 8 },
    { texto: 'C++', number: 9 },
    { texto: 'C#', number: 10 },
    { texto: 'C', number: 11 },
    { texto: 'Java', number: 12 },
    { texto: 'Tailwind', number: 13 },
    { texto: 'Bootstrap', number: 14 },
    { texto: 'Insomnia', number: 15 },
    { texto: 'Eclipse', number: 16 },
    { texto: 'Frontend', number: 17 },
    { texto: 'Backend', number: 18 },
    { texto: 'FullStack', number: 19 },
    { texto: 'Development', number: 20 },
  ];

  const resultado = filtraSoloNumerosPares(arrayOfObjects);
  console.log(resultado);
  
}

function filtraSoloNumerosPares(arrayDeObjeto) {
  const results = arrayDeObjeto.filter((objeto) => objeto.number% 2 === 0);
  return results;
}

function testFiltrarObjetosPares() {
  const array1 = [{number: 1}, {number: 2}, {number: 3}, {number: 4}];
  const array2 = [{number: 1}, {number: 3}, {number: 5}, {number: 7}];

  // Prueba 1
  const resultado1 = filtraSoloNumerosPares(array1);
  const esperado1 = [{number: 2}, {number: 4}];
  console.assert(JSON.stringify(resultado1) === JSON.stringify(esperado1), `Error en la Prueba 1. Se esperaba ${JSON.stringify(esperado1)} pero se obtuvo ${JSON.stringify(resultado1)}`);

  // Prueba 2
  const resultado2 = filtraSoloNumerosPares(array2);
  const esperado2 = [];
  console.assert(JSON.stringify(resultado2) === JSON.stringify(esperado2), `Error en la Prueba 2. Se esperaba ${JSON.stringify(esperado2)} pero se obtuvo ${JSON.stringify(resultado2)}`);
}



main();
testFiltrarObjetosPares()