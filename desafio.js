//ANTES DE EMPEZAR:
//Copia este código base completo en un nuevo archivo llamado desafio.js

//-----------------------------------------------------------------------//

//JUGADORES:
// NO MODIFICAR LOS NOMBRES DE ESTOS OBJETOS
// (El test automático les cambia los valores para probar que el resto
// de la lógica funcione bien)

const jugadorUno = {
  nombre: 'Marce',
  habilidades: {
    ataque: 70,
    velocidad: 30,
    vida: 90,
    magia: 120,
  },
  articulos: ['espada', 'escudo', 'varita'],
};

const jugadorDos = {
  nombre: 'Flor',
  habilidades: {
    ataque: 73,
    velocidad: 30,
    vida: 80,
    magia: 100,
  },
  articulos: ['escudo', 'varita', 'capa', 'pocion'],
};

//-----------------------------------------------------------------------//

//PUNTOS INICIALES DEL JUEGO:
//Estas variables servirán para almacenar los puntos ganados por cada jugador.
//Cada vez que un jugador gana en una habilidad determinada se deberá
//sumar 1 punto en el contador correspondiente:
var contadorPuntosJug1 = 0;
var contadorPuntosJug2 = 0;

let jugadorUnoHabilidades = jugadorUno.habilidades;
let jugadorDosHabilidades = jugadorDos.habilidades;

//Ganador:
var ganador;

//-----------------------------------------------------------------------//

//COMPARACIÓN POR PODER DE ATAQUE

//La indicación ++ luego de la variable contadorPuntosJug suma 1 punto al
//contador. Según la condición que se cumpla, se irán sumando los puntos.

// (Escribir debajo el código que te permita generar esta comparación)

//-----------------------------------------------------------------------//

//COMPARACIÓN POR VELOCIDAD:
//(Escribir debajo el código que te permita generar esta comparación)

if (jugadorUnoHabilidades.velocidad > jugadorDosHabilidades.velocidad) {
  contadorPuntosJug1++;
} else if (jugadorDosHabilidades.velocidad > jugadorUnoHabilidades.velocidad) {
  contadorPuntosJug2++;
} else {
  contadorPuntosJug1++;
  contadorPuntosJug2++;
}

//-----------------------------------------------------------------------//

//COMPARACIÓN POR NIVEL DE VIDA:
//(Escribir debajo el código que te permita generar esta comparación)
if (jugadorUnoHabilidades.vida > jugadorDosHabilidades.vida) {
  contadorPuntosJug1++;
} else if (jugadorDosHabilidades.vida > jugadorDosHabilidades.vida) {
  contadorPuntosJug2++;
} else {
  contadorPuntosJug1++;
  contadorPuntosJug2++;
}

//-----------------------------------------------------------------------//

//COMPARACIÓN POR MAGIA:
//(Escribir debajo el código que te permita generar esta comparación)
if (jugadorUnoHabilidades.magia > jugadorDosHabilidades.magia) {
  contadorPuntosJug1++;
} else if (jugadorDosHabilidades.magia > jugadorDosHabilidades.magia) {
  contadorPuntosJug2++;
} else {
  contadorPuntosJug1++;
  contadorPuntosJug2++;
}

//-----------------------------------------------------------------------//

//COMPARACIÓN POR CANTIDAD DE ARTÍCULOS
//(Escribir debajo el código que te permita generar esta comparación)
if (jugadorUno.articulos.length > jugadorUno.articulos.length) {
  contadorPuntosJug1++;
} else if (jugadorDos.articulos.length > jugadorUno.articulos.length) {
  contadorPuntosJug2++;
} else {
  contadorPuntosJug1++;
  contadorPuntosJug2++;
}

//-----------------------------------------------------------------------//

//DEFINIENDO EL GANADOR DE LA PARTIDA
//En este espacio deberás generar la comparación final de puntos
//que determine al ganador. Mostrar en la terminal el nombre del jugador que ganó la partida

if (contadorPuntosJug1 > contadorPuntosJug2) {
  ganador = jugadorUno.nombre;
} else if (contadorPuntosJug2 > contadorPuntosJug1) {
  ganador = jugadorDos.nombre;
} else {
  ganador = 'Hay un empate';
}

// ejemplo:
var resultado = {
  [jugadorDos.nombre]: contadorPuntosJug2,
  [jugadorUno.nombre]: contadorPuntosJug1,
  ganador: ganador,
};
console.log(resultado);
//-----------------------------------------------------------------------//
