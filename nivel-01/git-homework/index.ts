import { cosas } from './cosas';

function main() {
  const todasLasCosas = cosas.getAll();
  const cosaPorId = cosas.getById(2);
  console.log(cosaPorId);
}

main();
