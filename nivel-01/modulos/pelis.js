const buscarPelis = (arrayDePelis, nombre) => {
  if (typeof arrayDePelis === Object) {
    return arrayDePelis.find(({ name }) => name === nombre);
  } else {
    return 'No hay peliculas';
  }
};

const ordenarPeliculasPorRating = () => {
  return 'Función ordenar peliculas por rating';
};

exports.buscar = buscarPelis;
exports.ordenar = ordenarPeliculasPorRating;
