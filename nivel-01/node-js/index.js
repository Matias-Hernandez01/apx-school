const cosas = require('./cosas');
const http = require('http');
const fs = require('fs');

function main() {
  // console.log(cosas.getCosas());
  // console.log(http);

  // fs.readFile('./cosas.txt', (err, data) => {
  //   if (err) {
  //     throw err;
  //   }
  //   console.log(data.toString());
  // });

  console.log(process.argv);
}

main();
