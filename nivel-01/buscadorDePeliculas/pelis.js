const fs = require('fs');

const peliculas = fs.readFileSync(__dirname + '/pelis.json');
const todasLasPeliculas = JSON.parse(peliculas);

function ordenarPor(propiedad) {
  if (!propiedad) {
    console.log('No se ha ingresado el tipo de ordenamiento');
  }
  if (propiedad.toLowerCase() === 'title') {
    todasLasPeliculas.sort(function (a, b) {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    });
    return todasLasPeliculas;
  }
  if (propiedad.toLowerCase() === 'tags') {
    todasLasPeliculas.sort(function (a, b) {
      if (a.tags > b.tags) {
        return 1;
      }
      if (a.tags < b.tags) {
        return -1;
      }
      return 0;
    });
    return todasLasPeliculas;
  }
  if (propiedad.toLowerCase() === 'rating') {
    todasLasPeliculas.sort(function (a, b) {
      if (a.rating > b.rating) {
        return 1;
      }
      if (a.rating < b.rating) {
        return -1;
      }
      return 0;
    });
    return todasLasPeliculas;
  }
}

function allMovies() {
  console.log(todasLasPeliculas);
}

function sort(propiedad) {
  switch (propiedad) {
    case 'title':
      const ordenadoPorTitulo = ordenarPor(propiedad);
      console.log(ordenadoPorTitulo);
      break;
    case 'tags':
      const ordenadoPorTags = ordenarPor(propiedad);
      console.log(ordenadoPorTags);
      break;
    case 'rating':
      const ordenadoPorRating = ordenarPor(propiedad);
      console.log(ordenadoPorRating);
      break;
    default:
      return ordenarPor(propiedad);
  }
}

function searchForTitle(title) {
  const tituloEnMinuscula = title.toLowerCase();
  const resultadoDeBusquedaPorTitulo = todasLasPeliculas.filter((pelicula) => {
    if (pelicula.title.toLowerCase().includes(tituloEnMinuscula)) {
      return pelicula;
    }
  });
  console.log(resultadoDeBusquedaPorTitulo);
}
function searchForTag(tag) {
  const tagEnMinuscula = tag.toLowerCase();
  const busquedaPorTag = todasLasPeliculas.filter((pelicula) => {
    if (pelicula.tags.includes(tagEnMinuscula)) {
      return pelicula;
    }
  });
  console.log(busquedaPorTag);
}

module.exports = { sort, allMovies, searchForTitle, searchForTag };
