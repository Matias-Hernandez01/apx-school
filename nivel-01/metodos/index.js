let miString = 'hola mundo';
let miStringMayusculas = miString.toUpperCase();
console.log(miStringMayusculas); // "HOLA MUNDO"

// toUpperCase(): Convierte un string a mayúsculas.
// toLowerCase(): Convierte un string a minúsculas.
// toString(): Convierte un valor en su representación como string.
// toFixed(n): Convierte un número en un string con n decimales.
// parseInt(): Convierte un string en un número entero.

let miNumero = 3.1416;
let miNumeroRedondeado = miNumero.toFixed(2);
console.log(miNumeroRedondeado); // "3.14"

let miBoolean = true;
let miBooleanString = miBoolean.toString();
console.log(miBooleanString); // "true"

//*Con arrays
let miArray = [1, 2, 3];
miArray.push(4);
console.log(miArray); // [1, 2, 3, 4]

let miOtroArray = ['hola', 'mundo'];
let miNuevoArray = miOtroArray.slice(1);
console.log(miNuevoArray); // ["mundo"]

let miStringArray = ['hola', 'mundo'];
let miStringUnido = miStringArray.join(' ');
console.log(miStringUnido); // "hola mundo"

let miIndice = miArray.indexOf(3);
console.log(miIndice); // 2
