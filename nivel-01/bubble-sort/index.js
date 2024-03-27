//*Para este desafío, les proponemos que creen un array con 40 números (pueden ser generados por Math.random()) y los ordenen de menor a mayor, a través de una función. Para eso, tienen que investigar sobre algoritmos de ordenamiento.

let numbers = [];
let counter = 0;
while (counter < 40) {
  let numberRandom = Math.random() * 90;
  let numberRandomInteger = Math.floor(numberRandom);
  numbers.push(numberRandomInteger);
  counter++;
}

// let prueba = [8, 4, 6, 9, 12, 3, 5];

function bubbleSort(listOfNumbers) {
  for (let counterOne = 0; counterOne < listOfNumbers.length; counterOne++) {
    for (let counterTwo = 0; counterTwo < listOfNumbers.length; counterTwo++) {
      const esMayor = listOfNumbers[counterTwo] > listOfNumbers[counterTwo + 1];
      if (esMayor) {
        let aux = listOfNumbers[counterTwo + 1];
        listOfNumbers[counterTwo + 1] = listOfNumbers[counterTwo];
        listOfNumbers[counterTwo] = aux;
      }
    }
  }
  return listOfNumbers;
}

function main() {
  const results = bubbleSort(numbers);
  console.log(results);
}

main();
