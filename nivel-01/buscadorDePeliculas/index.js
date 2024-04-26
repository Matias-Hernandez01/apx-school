const process = require('process');

const funciones = require('./pelis');

function argumentos() {
  let argumento = '';
  let valor = '';
  let argv = process.argv.slice(2, 4);
  for (let palabra of argv) {
    if (palabra.startsWith('--')) {
      argumento = palabra;
    } else {
      valor = palabra;
    }
  }

  return { argumento: argumento, valor: valor };
}

function delegarAcciones(argumento) {}

function main() {
  console.log(argumentos());
}

main();
