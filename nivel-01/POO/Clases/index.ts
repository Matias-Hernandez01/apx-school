class Peli {
  title: string;
  rating: number;

  constructor(title: string, rating: number) {
    this.title = title;
    this.rating = rating;
  }

  getTitle() {
    return this;
  }
}

function main2() {
  const peliUno = new Peli('Rocky', 6);
  // peliUno.title = 'Tarzan';

  console.log(peliUno.getTitle());
}

main2();
