const mazoCompleto = [
  'A de ♥️',  '2 de ♥️',  '3 de ♥️',  '4 de ♥️',
  '5 de ♥️',  '6 de ♥️',  '7 de ♥️',  '8 de ♥️',
  '9 de ♥️',  '10 de ♥️', 'J de ♥️',  'Q de ♥️',
  'K de ♥️',  'A de ♦️',  '2 de ♦️',  '3 de ♦️',
  '4 de ♦️',  '5 de ♦️',  '6 de ♦️',  '7 de ♦️',
  '8 de ♦️',  '9 de ♦️',  '10 de ♦️', 'J de ♦️',
  'Q de ♦️',  'K de ♦️',  'A de ♣️',  '2 de ♣️',
  '3 de ♣️',  '4 de ♣️',  '5 de ♣️',  '6 de ♣️',
  '7 de ♣️',  '8 de ♣️',  '9 de ♣️',  '10 de ♣️',
  'J de ♣️',  'Q de ♣️',  'K de ♣️',  'A de ♠️',
  '2 de ♠️',  '3 de ♠️',  '4 de ♠️',  '5 de ♠️',
  '6 de ♠️',  '7 de ♠️',  '8 de ♠️',  '9 de ♠️',
  '10 de ♠️', 'J de ♠️',  'Q de ♠️',  'K de ♠️'
]

// esto nos indica en que orden están las cartas en el mazo completo
const palos = ["corazones", "diamantes", "treboles", "picas"];

let mazo = new Array(52);
let index = 0;


const mazoPorPalo = { };

for (let i = 0; i < palos.length; i++) {
  const nombreDelPalo = palos[i];
  mazoPorPalo[nombreDelPalo] = [];
  // Acá tenés que usar otro for que vaya del 0 al 13
  // para recorrer la porción del mazoCompleto correspondiente
  // combinando i con el otro iterador vas a tener
  // la posición del array para obtener la carta
  for(let j = 0; j < 13; j++){
    mazoPorPalo[nombreDelPalo][j] = mazoCompleto[i * 13 + j]
  }


}

console.log(mazoPorPalo);