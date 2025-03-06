const carrito = [
  { nombre: "Manzanas", precio: 35, cantidad: 3, categoria: "Frutas" },
  { nombre: "Pan", precio: 40, cantidad: 2, categoria: "Panadería" },
  { nombre: "Leche", precio: 50, cantidad: 1, categoria: "Lácteos" },
  { nombre: "Huevos", precio: 60, cantidad: 12, categoria: "Proteínas" },
  { nombre: "Pasta", precio: 45, cantidad: 1, categoria: "Despensa" },
  { nombre: "Queso", precio: 80, cantidad: 1, categoria: "Lácteos" },
  { nombre: "Tomates", precio: 30, cantidad: 4, categoria: "Verduras" },
  { nombre: "Aceite de Oliva", precio: 99, cantidad: 1, categoria: "Despensa" },
  { nombre: "Jabón", precio: 70, cantidad: 2, categoria: "Higiene" },
  { nombre: "Cereal", precio: 55, cantidad: 1, categoria: "Despensa" },
];

// Cuando funcione tu lógica, cambia este valor para probar como cambia el resultado final
const montoDisponible = 70; 

// Variable para recorrer el carrito
let indiceLoop = 0;  

// Variable para acumular el total gastado
let totalAGastar = 0;  
// Array donde vamos a guardar los productos que podemos comprar
const comprables = [];  
// Índice para agregar productos al array 'comprables'
let indiceComprables = 0;  

while (indiceLoop < carrito.length) {
  // Elegimos el producto a evaluar
  const producto = carrito[indiceLoop];

  // Calculamos el total de ese producto (precio * cantidad)
  const precioTotalItem = producto.precio * producto.cantidad;
  
  // sumamos este monto a lo que venimos calculando como total a gastar
  // y obtenemos lo que sería el nuevo total en caso de poder comprar ese producto
  const nuevoTotalPreliminar = totalAGastar + precioTotalItem;
  // 5. ahora totalAGastar cambia y su nuevo valor es el de nuevoTotalPreliminar

  // Escribí tu lógica acá...

  // . Verificamos si el nuevo total preliminar no excede el monto disponible para saber si lo podemos comprar
  if(nuevoTotalPreliminar < montoDisponible){
    // . Si lo podemos comprar, usamos 'indiceComprables' para agregar el producto al array 'comprables' en el siguiente espacio disponible
    comprables[indiceComprables] = producto;
    indiceComprables++;
  }

  // 6. sumamos 1 a indiceComprables para la próxima

  
  // Avanzamos al siguiente producto del carrito
  indiceLoop++;
}

console.log("Con $" + montoDisponible + " puedes comprar:", comprables);