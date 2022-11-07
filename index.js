const { argv } = require('node:process');
const chalk = require('chalk');
const {fs} = require('fs');
const EventEmitter = require ('events');
const { resolvePath, openfile} = require('./funciones.js');

const nameFile = argv[2];
const routeFile = (resolvePath(nameFile));
console.log(chalk.red(routeFile));
const openFileAll = (openfile(nameFile));
//const extension = (mdFiles(nameFile));
//if(extension == '.md'){
  //  console.log(openfile(nameFile));
//};

const emisorEventos = new EventEmitter(); //definiendo 
emisorEventos.on('validate', () => { //escuchando
    console.log(chalk.red(`total links:`, openFileAll));
});

 emisorEventos.emit('validate'); //emitiendo







 

