const process = require('process');

const operaciones = {
  '+': '+',
  '-': '-',
  '/': '/',
  '*': '*',
};

function parsearArgumentos(texto) {
  const separarPorEspacio = texto;
  let operacion = '';
  console.log(separarPorEspacio);
  // separarPorEspacio.forEach((element) => {
  //   if (element === operacion[element]) {
  //     operacion = element;
  //   }
  // });

  return {
    primerTermino: 0,
    segundoTermino: 0,
    operacion: '',
  };
}

function main() {
  const argv = process.argv.slice(2);
  // console.log(argv);
  const resultado = parsearArgumentos(argv);
  console.log(resultado);
}

main();
