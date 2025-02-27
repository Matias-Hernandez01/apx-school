const numeroDeMes = process.argv[2];

/* 
 El siguiente array contiene la data de cada mes
*/

const informacionMensual = [
  {
    nombreDelMes: "Enero",
    cantidadDeDias: 31,
    eventoDelMes: "Año Nuevo",
  },
  {
    nombreDelMes: "Febrero",
    cantidadDeDias: 28,
    eventoDelMes: "Día de San Valentín",
  },
  {
    nombreDelMes: "Marzo",
    cantidadDeDias: 31,
    eventoDelMes: "Día de San Valentín",
  },
  {
    nombreDelMes: "Abril",
    cantidadDeDias: 30,
    eventoDelMes: "Día en conmemoración a los caidos en Malvinas",
  },
  
  {
    nombreDelMes: "Mayo",
    cantidadDeDias: 31,
    eventoDelMes: "Día de San Valentín",
  
  },
  {
    nombreDelMes: "Junio",
    cantidadDeDias: 30,
    eventoDelMes: "Día de San Valentín",
  },
  
  {
    nombreDelMes: "Febrero",
    cantidadDeDias: 28,
    eventoDelMes: "Día de San Valentín",
  
  },
  {
    nombreDelMes: "Febrero",
    cantidadDeDias: 28,
    eventoDelMes: "Día de San Valentín",
  },
  
  {
    nombreDelMes: "Febrero",
    cantidadDeDias: 28,
    eventoDelMes: "Día de San Valentín",
  
  },
  {
    nombreDelMes: "Febrero",
    cantidadDeDias: 28,
    eventoDelMes: "Día de San Valentín",
  
  },
  {
    nombreDelMes: "Noviembre",
    cantidadDeDias: 30,
    eventoDelMes: "Fiestas",
  },
  {
    nombreDelMes: "Diciembre",
    cantidadDeDias: 31,
    eventoDelMes: "Fiestas",
  },

]


// Recordá que el array comienza en 0
// el mes 1 (enero) corresponde a la posición 0 del array
// el mes 2 (febrero) corresponde a la posición 1 del array
const posicionEnElArray = parseInt(numeroDeMes) - 1;
const infoDelMes = informacionMensual[posicionEnElArray];


console.log("Numero de mes:", numeroDeMes);
console.log("Nombre del mes:", infoDelMes.nombreDelMes);
// -> Descomentá las siguientes lineas y finaliza tu programa
 console.log("Cantidad de días:", infoDelMes.cantidadDeDias );
console.log("Evento del mes:", infoDelMes.eventoDelMes)
