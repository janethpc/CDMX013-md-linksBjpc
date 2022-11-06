const { argv } = require('node:process');
const chalk = require('chalk');
const fs = require('fs');
const { resolvePath, mdFiles, openfile} = require('./funciones.js');

const nameFile = argv[2];
const routeFile = (resolvePath(nameFile));
console.log(routeFile);
const extension = (mdFiles(nameFile)); 
const leerFile = openfile(nameFile);


const validandoExtension = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (extension){
            resolve(chalk.bgRed.bold(`Se encontraron`));
        }else{
            reject(chalk.red('tu archivo no es MD'));
        }
    }, 3000);
});

//const miArchivoesMd = (valor) => { //manejar promesa cumplida
  //  console.log(valor, leerFile);
//};
//const miArchivonoesMd = (mensajedeError) => { //manejar promesa rechazada
  //  console.log(mensajedeError);
//};
//validandoExtension.then(miArchivoesMd, miArchivonoesMd);}

validandoExtension
    .then((mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion);
    })
    .then(null, (mensajeDeError) => {
        console.log(mensajeDeError);
    });