import { diasDesde } from "./fecha";

export {diasDesde} from "./fecha"


function main (){
  //Instanciamos una fecha desde que se ha hecho la ultima compra a traves de la función diasDesde.
  const compra = diasDesde("2024-02-25");
  console.log(compra)


}

main();