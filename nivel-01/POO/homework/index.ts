interface album {
  title: string;
  songs: string[];
}

// crear la clase Banda aquí
class Banda {
  members: string[];
  albums: album[];

  constructor(members: string[], albums: album[]) {
    this.members = members;
    this.albums = albums;
  }

  //?Debe devolver el primer álbum de la banda señalada.
  getFirstAlbum(): album {
    return this.albums[0];
  }

  //?Debe devolver devolver todos los albumes de la banda señalada.
  getAllAlbums(): album[] {
    return this.albums;
  }

  //?Debe devolver un array de strings con todos los miembos de la banda señalada.
  getAllMembers(): string[] {
    return this.members;
  }

  //?Debe devolver una canción aleatoria de la banda señalada.
  getRandomSong(albumTitle: string): any {
    let albumSearch = this.albums.find(({ title }) => title === albumTitle);
    if (albumSearch) {
      const randomIndex: number = Math.floor(
        Math.random() * albumSearch.songs.length
      );
      return albumSearch.songs[randomIndex];
    }
  }
}

// no modificar este test
function testClaseBanda() {
  const members = ['dana', 'pau'];
  const fa = {
    title: 'album 1',
    songs: ['album 1 - tema 1', 'album 1 - tema 2'],
  };
  const banda = new Banda(members, [
    fa,
    {
      title: 'album 2',
      songs: ['album 2 - tema 1', 'album 2 - tema 2', 'album 2 - tema 3'],
    },
  ]);

  const firstAlbum = banda.getFirstAlbum();
  const allMembers = banda.getAllMembers();
  const randomSongAlbum1 = banda.getRandomSong('album 1');

  if (
    firstAlbum.title == fa.title &&
    fa.songs.length == firstAlbum.songs.length &&
    JSON.stringify(allMembers.sort()) == JSON.stringify(members.sort()) &&
    fa.songs.includes(randomSongAlbum1)
  ) {
    console.log('testClaseBanda passed');
  } else {
    throw 'testClaseBanda not passed';
  }
}

function main() {
  testClaseBanda();
}

main();
