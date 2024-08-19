class Album {
  title: string;
  songs: string[];

  constructor(title: string, songs: string[]) {
    this.title = title;
    this.songs = songs;
  }
}

class Banda {
  members: string[];
  albums: Album[];

  constructor(members: string[], albums: Album[]) {
    this.members = members;
    this.albums = albums;
  }
}

// function main() {
const banda = new Banda(['Pato', 'Maxi'], [{ title: 'Rehen', songs: [] }]);
console.log(banda);
// }

// main();
