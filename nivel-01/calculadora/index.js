const process = require('process');
const operaciones = require('./operaciones');

function parsearArgumentos(texto) {
  let operacion = '';

  return {
    primerTermino: 3,
    segundoTermino: 1,
    operacion: '*',
  };
}

function ejecutarOperacion(objectoOperacion) {
  let primerTermino = objectoOperacion.primerTermino;
  let segundoTermino = objectoOperacion.segundoTermino;

  const mapa = {
    '+': operaciones.sumar,
    '-': operaciones.restar,
    '/': operaciones.dividir,
    '*': operaciones.multiplicar,
  };

  const ejecutor = mapa[objectoOperacion.operacion];
  return ejecutor(primerTermino, segundoTermino);

  //* El siguiente switch es otra posibilidad de poder manejar las operaciones, a diferencia que
  //* conlleva más lineas de código y la ejecución del mismo es más lento, lo cual en rendimiento
  //* es mejor el objeto anterior que guarda en cada propiedad la función a ejecutar.

  // switch (objectoOperacion.operacion) {
  //   case '+':
  //     return operaciones.sumar(primerTermino, segundoTermino);
  //   case '-':
  //     return operaciones.restar(primerTermino, segundoTermino);
  //   case '*':
  //     return operaciones.multiplicar(primerTermino, segundoTermino);
  //   case '/':
  //     return operaciones.dividir(primerTermino, segundoTermino);
  //   default:
  //     return 'No se han pasado correctamente los datos';
  // }
}

function main() {
  const argv = process.argv[2];
  const resultado = parsearArgumentos(argv);
  const ejecutarCuenta = ejecutarOperacion(resultado);
  console.log(ejecutarCuenta);
}

main();
