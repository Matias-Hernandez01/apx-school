import {diasDesde} from "./fecha"
import { suma } from "./prueba_afirmaciones";

function main (){
  //Instanciamos una fecha desde que se ha hecho la ultima compra a traves de la función diasDesde.
  const compra = diasDesde("2024-02-25");
  const resultadoDeSuma = suma(2,4);
  console.log(resultadoDeSuma)
  console.log(compra)

}

main();