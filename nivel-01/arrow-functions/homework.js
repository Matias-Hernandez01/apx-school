const tranformarFrase = (frase) => {
  let arrayDePalabras = [];

  const results = frase.map((palabra) => {
    arrayDePalabras.push(
      palabra.charAt(0).toUpperCase() + palabra.slice(1, palabra.length)
    );
  });

  let oracion = arrayDePalabras.join(' ');

  return oracion;
};

function main() {
  const frase = ['La', 'vida', 'es', 'como', 'una', 'caja', 'de', 'chocolates'];

  const prueba = tranformarFrase(frase);
  console.log(prueba);
}

main();
