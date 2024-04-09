const fs = require('fs');

const datos = fs.readFileSync('./datos.json');
const datosParseados = JSON.parse(datos);

function getAll(datosParseados) {
  return datosParseados;
}

function getOlderThan(number) {
  const results = datosParseados.filter(({ edad }) => {
    edad > number;
  });
  return results;
}

module.exports = { getAll, getOlderThan };
