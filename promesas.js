const { argv } = require('node:process');
const chalk = require('chalk');
const fs = require('fs');
const axios = require ('axios');
const { resolvePath, mdFiles, openfile} = require('./funciones.js');

const nameFile = argv[2];
const routeFile = (resolvePath(nameFile));
console.log(routeFile);
const extension = (mdFiles(nameFile)); 
const leerFile = openfile(nameFile);

const getlinks = leerFile.map((obj) =>{
    const links = obj.href;
    return links
})

/*const validandoExtension = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (extension){
            resolve(chalk.bgRed.bold(`Se encontraron`));
        }else{
            reject('tu archivo no es MD');
        }
    }, 3000);
});*/

const validandoLinks = (link) => {
    let request = axios.get(link);
    let object = request.then((response) => {
        return response.status
    })
    return object
}


//const miArchivoesMd = (valor) => { //manejar promesa cumplida
  //  console.log(valor, leerFile);
//};
//const miArchivonoesMd = (mensajedeError) => { //manejar promesa rechazada
  //  console.log(mensajedeError);
//};
//validandoExtension.then(miArchivoesMd, miArchivonoesMd);}

/*validandoExtension
    .then((mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion, getlinks)
    })
    .catch((mensajeDeError) => {
        console.log(mensajeDeError);
    });*/

validandoLinks('https://user-images.githubusercontent.com/108207854/199856664-9fc6927a-50cb-4687-9584-979e53db54d8.png').then(console.log)


