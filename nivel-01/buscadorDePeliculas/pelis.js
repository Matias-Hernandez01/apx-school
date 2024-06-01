const fs = require('fs');

const peliculas = fs.readFileSync(__dirname + '/pelis.json');
const allMoviesParse = JSON.parse(peliculas);

function allMovies() {
  console.log(allMoviesParse);
}

function sort(ordenarPor) {
  console.log(ordenarPor);
}

function searchForTitle() {}
function searchForTag() {}

module.exports = { sort, allMovies, searchForTitle, searchForTag };
