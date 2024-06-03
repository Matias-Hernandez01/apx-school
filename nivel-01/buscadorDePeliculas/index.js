const process = require('process');

const funciones = require('./pelis');

function argumentos() {
  let argumento = '';
  let valor = '';
  let argv = process.argv.slice(2, 4);
  let obj = {};

  //*En caso de recibír argv, se guardará el argumento y el valor.
  for (let palabra of argv) {
    if (palabra.startsWith('--')) {
      argumento = palabra;
    } else {
      valor = palabra;
    }
    //?Creamos el objeto que va a tener como propiedad el argumento y el valor.
    obj = {
      [argumento]: valor,
    };
  }
  return obj;
}

function delegarAcciones() {
  let argumento = '';
  let valor = '';
  let argvterminal = argumentos();

  //*Variable que evalua si el comando tiene argumento a traves la longitud del array
  let condicionArgvVacio = Object.entries(argvterminal);

  //*En caso de que el comando tenga argumento, se guarda en variables para delegar a sus respectivas funciones
  if (condicionArgvVacio.length === 1) {
    argumento = condicionArgvVacio[0][0];
    valor = condicionArgvVacio[0][1];
  }
  //*En caso de recibir el argv vacio, se retorna todas las peliculas
  if (!condicionArgvVacio.length) {
    return funciones.allMovies();
    //*Si el argumento ingresado es sort, se envia el valor a su funcion que es encargada de realizar el orden dependiendo su valor.
  }
  if (argumento === '--sort') {
    return funciones.sort(valor);
  }
  if (argumento === '--search') {
    return funciones.searchForTitle(valor);
  }
  if (argumento === '--tag') {
    return funciones.searchForTag(valor);
  }
}

function main() {
  return delegarAcciones();
}

main();
