const process = require('process');

function parsearArgumentos(texto) {
  return {
    primerTermino: 0,
    segundoTermino: 0,
    operacion: '',
  };
}

function main() {
  const argv = process.argv.slice(2);
  console.log(argv);
}

main();
