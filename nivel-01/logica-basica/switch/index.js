// day es un valor del 1 al 7
const day = 7;
let dayName = "";

// acá agregá tu coídgo para asignarle a dayName el valor correcto
// por ejemplo si day es 2 dayName debería valer "Martes"
// switch {}

switch(day){
  case 1:
    dayName = "Lunes";
  break;
  case 2:
    dayName = "Martes";
  break;
  case 3:
    dayName = "Miercoles";
  break;
  case 4:
    dayName = "Jueves";
  break;
  case 5:
    dayName = "Viernes";
  break;
  case 6:
    dayName = "Sabado";
  break;
  case 7:
    dayName = "Domingo";
  break;
  default: dayName = "No existe un día con ese valor numerico"
}

if(day > 0 && day <= 7){
  console.log("Hoy es", dayName)
}
if(day <= 0 || day > 7){
  console.log("No existe un día con el valor númerico", day);
}