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

  function filtraSoloNumerosPares(arrayDeObjeto) {
    let listWithResults = [];

    for (let i = 0; i < arrayDeObjeto.length; i++) {
      let currentPosition = arrayDeObjeto[i];
      if (currentPosition.number % 2 === 0) {
        listWithResults.push(currentPosition);
      }
    }
    return listWithResults;
  }

  const resultado = filtraSoloNumerosPares(arrayOfObjects);
  console.log(resultado);
}

main();
