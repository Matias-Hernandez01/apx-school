const process = require('process');

const funciones = require('./pelis');

function argumentos() {
  let argv = process.argv.slice(2, 4);
  return { argumento: '', valor: '' };
}

function delegarAcciones(argumento) {}

function main() {
  console.log(argumentos());
}

main();
