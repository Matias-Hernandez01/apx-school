// Array de usuarios con sus publicaciones
const usuarios = [
  {
    id: 1,
    nombre: "Juan Pérez",
    publicaciones: [
      { title: "Departamento en alquiler - Centro", type: "alquiler" },
      { title: "Casa en venta - Suburbios", type: "venta" },
    ],
  },
  {
    id: 2,
    nombre: "María López",
    publicaciones: [
      { title: "Local comercial en alquiler - Zona Norte", type: "alquiler" },
    ],
  },
  {
    id: 3,
    nombre: "Carlos García",
    publicaciones: [
      { title: "Terreno en venta - Campo", type: "venta" },
      { title: "Cabaña en venta - Montaña", type: "venta" },
    ],
  },
  {
    id: 4,
    nombre: "Ana Torres",
    publicaciones: [],
  },
  {
    id: 5,
    nombre: "Luis Gómez",
    publicaciones: [
      { title: "Oficina en alquiler - Centro", type: "alquiler" },
      { title: "Apartamento en venta - Playa", type: "venta" },
    ],
  },
  {
    id: 6,
    nombre: "Sofía Martínez",
    publicaciones: [],
  },
];

// Esto es un pequeño indice/diccionario
// con los ids de los usuarios con alquileres
const idsDeUsuarioConAlquileres = {};

for (const usuario of usuarios) {

  // Tenés que recorrer las publicaciones de este usuario usando otro for...of
  // luego ir preguntando una por una si es del type "alquiler"
  // si es asi debes insertar el id en el objeto idsDeUsuarioConAlquileres
  // de esta forma idsDeUsuarioConAlquileres[id] = true;
  for (const publicaciones of usuario.publicaciones) {
    if(publicaciones.type === "alquiler"){
      idsDeUsuarioConAlquileres[usuario.id] = true;
    }
  }




}

console.log(
  "Las propiedades con alquileres son",
  idsDeUsuarioConAlquileres
);
