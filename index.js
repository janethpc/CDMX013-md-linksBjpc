const { argv } = require('node:process');
const {resolvePath} = require('./mdlinks.js');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log(resolvePath(argv[2]));


