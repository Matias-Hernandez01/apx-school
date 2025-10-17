function transformarFrase(frase) {
  // 
  const arrayDePalabras = frase;
  const fraseMayuscula = arrayDePalabras.map((palabra) => {
    const primerLetraMayuscula = palabra.charAt().toUpperCase();
    const restoDeLaPalabra = palabra.slice(1);
    return primerLetraMayuscula + restoDeLaPalabra;
  });
  return fraseMayuscula.join(" ")
}

function main() {
  const frase = ['La', 'vida', 'es', 'como', 'una', 'caja', 'de', 'chocolates'];
  const oracionMayuscula = transformarFrase(frase);
  console.log(oracionMayuscula); // 'La Vida Es Como Una Caja De Chocolates'
}

main();