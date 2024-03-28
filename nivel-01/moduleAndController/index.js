const { getAll, getOne, getAllWith } = require('./product');

function main() {
  console.log('Productos con stock 20');
  console.log(getAllWith(20));
  console.log('Producto con ID 2');
  console.log(getOne(2));
  console.log('Todos los productos');
  console.log(getAll());

  // Imprime los datos devuelvtos por las otras funciones
}

main();
