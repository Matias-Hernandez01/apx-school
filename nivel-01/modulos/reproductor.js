// reproductor.js
const canciones = [
  {
    nombre: 'cancion1',
    duracion: 3,
  },
  {
    nombre: 'cancion2',
    duracion: 2.5,
  },
  {
    nombre: 'cancion3',
    duracion: 4,
  },
];

exports.play = function (cancion) {
  // busca la canción ...
  let results = canciones.find(({ nombre }) => nombre === cancion);
  return results || 'No se encontró la canción';
};
exports.pausa = function (cancion) {
  let results = canciones.find(({ nombre }) => nombre === cancion);
  if (results) {
    return `Se ha pausado la canción ${results.nombre}`;
  }
};
exports.adelantar = function (cancion) {
  let results = canciones.find(({ nombre }) => nombre === cancion);
  if (results) {
    return `Se ha adelantado la canción ${results.nombre}`;
  }
};
exports.retroceder = function (cancion) {
  let results = canciones.find(({ nombre }) => nombre === cancion);
  if (results) {
    return `Se ha retrocedido la canción ${cancion}`;
  }
};
