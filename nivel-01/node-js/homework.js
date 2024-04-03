//?Para resolver este desafío, te proponemos que crees una función que reciba un array de argumentos introducidos desde la terminal con este formato:

const { type } = require('os');

//* node index.js --argument valor --otro-argumento otro-valor --tercer-argumento 80 */

//?Además, esa función tiene que devolver el array de argumentos convertido en un objeto, por lo tanto, tiene que tener este formato:

/* {
  "argumento":"valor",
  "otro-argumento":"otro-valor",
  (etc…)
}
*/

function parsearArgv(arv) {
  const argumentos = process.argv.splice(2);
  let object = {};

  argumentos.forEach(function (item, index) {
    if (item.startsWith('--')) {
      let prop = item.slice(2);
      object[prop] = argumentos[index + 1];
    }
  });

  // for (let i = 0; i < argumentos.length; i++) {
  //   let element = argumentos[i];
  //   if (element.includes('--')) {
  //     let propiedad = element.slice(2, element.length);
  //     object[propiedad] = argumentos[i + 1];
  //   }
  // }
  return object;
}
function main() {
  const resultado = parsearArgv(process.argv);
  console.log(resultado);
}

main();
