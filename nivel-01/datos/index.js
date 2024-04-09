const fs = require('fs');

function main() {
  const datos = fs.readFileSync('./cosas.json');
  const results = JSON.parse(datos);
  console.log(results);
}

main();
