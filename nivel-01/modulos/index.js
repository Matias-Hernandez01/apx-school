// const functionPelis = require('./pelis');const reproductor = require('./reproductor.js')
const reproductor = require('./reproductor');
const nombreDeCancion = 'cancion1';

function main() {
  // const resultado = functionPelis.ordenar();
  // console.log(resultado);
  const prueba1 = reproductor.play(nombreDeCancion);
  console.log(prueba1);
  const prueba2 = reproductor.pausa(nombreDeCancion);
  console.log(prueba2);
  const prueba3 = reproductor.adelantar(nombreDeCancion);
  console.log(prueba3);
  const prueba4 = reproductor.retroceder(nombreDeCancion);
  console.log(prueba4);
}

main();
