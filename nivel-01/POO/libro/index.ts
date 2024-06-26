class Libro {
  titulo: string;
  autor: string;
  añoPublicacion: number;

  constructor(titulo: string, autor: string, añoPublicacion: number) {
    // [Tu código para inicializar las otras propiedades]
    this.titulo = titulo;
    this.autor = autor;
    this.añoPublicacion = añoPublicacion;
  }
  getAntiguedad(): number {
    const añoActual = new Date().getFullYear();
    // [Tu código para devolver la antiguedad basada en la propiedad this.añoPublicacion]
    return añoActual - this.añoPublicacion;
  }
}

// Creando instancias de la clase Libro
const libro1 = new Libro(
  'Cien años de soledad',
  'Gabriel García Márquez',
  1967
);
// [Tu código para el segundo libro]

// Usando el método getAntiguedad y mostrando detalles de los libros
console.log(
  `El libro "${libro1.titulo}" de ${libro1.autor}, publicado en ${
    libro1.añoPublicacion
  }, tiene ${libro1.getAntiguedad()} años de antigüedad.`
);

// [Tu código para imprimir los datos del segundo libro]
