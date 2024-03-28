const products = [
  { id: 1, name: 'Producto 1', stock: 5 },
  { id: 2, name: 'Producto 2', stock: 276 },
  { id: 3, name: 'Producto 3', stock: 0 },
  { id: 4, name: 'Producto 4', stock: 25 },
  { id: 5, name: 'Producto 5', stock: 37 },
  { id: 6, name: 'Producto 6', stock: 74 },
  { id: 7, name: 'Producto 7', stock: 100 },
  { id: 8, name: 'Producto 8', stock: 99 },
];

//=> Devuelve un producto con la id que se envía como argumento
function getOne(id) {
  return products.find((product) => product.id === id);
}

//=> Devuelve todos los productos
function getAll() {
  return products;
}

//=> Devuelve los productos que tengan como minimo la cantidad de stock enviado por argumento.
function getAllWith(minStock) {
  return products.filter(({ stock }) => stock >= minStock);
}

module.exports = {
  getOne,
  getAll,
  getAllWith,
  // exportar el resto de las funciones
  // para poder ser importadas desde otros módulos (index.js)
};
