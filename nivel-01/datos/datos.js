const fs = require('fs');

const datos = fs.readFileSync('./datos.json');
const datosParseados = JSON.parse(datos);

function getAll() {
  return datosParseados;
}

function getOlderThan(number) {
  const results = datosParseados.filter(({ edad }) => {
    return edad > number;
  });
  return results;
}

exports.getAll = getAll;

exports.getOlderThan = getOlderThan;

// exports.getAll = function () {
//   return datosParseados;
// };

// exports.getOlderThan = function (number) {
//   const results = datosParseados.filter(({ edad }) => {
//     return edad > number;
//   });
//   return results;
// };
