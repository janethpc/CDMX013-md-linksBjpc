const { argv } = require('node:process');
const chalk = require('chalk');
const fs = require('fs');
const axios = require ('axios');
const { resolvePath, mdFiles, getLinks} = require('./funciones.js');

const nameFile = argv[2];
const routeFile = (resolvePath(nameFile));
const extension = (mdFiles(routeFile)); 
const links = getLinks(routeFile);



/*const validandoExtension = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (extension){
            resolve(chalk.bgRed.bold(`Se encontraron`));
        }else{
            reject('tu archivo no es MD');
        }
    }, 1000);
});*/

const validandoLinks = (link) => {
    let request = axios.get(link);
    let object = request.then((response) => {
        //console.log(response)
        return {status:response.status, text: response.statusText}
    })
    return object
}

const objlink = links.map((obj) =>{
    const Onelink = obj.href;
    return Onelink
})
const prueba = objlink;
validandoLinks(prueba[0]).then(console.log)




//Promise.all(objlink.map(validandoLinks)).then((resultado)=>{
 //  console.log('hola')
//})

//const miArchivoesMd = (valor) => { //manejar promesa cumplida
  //  console.log(valor, leerFile);
//};
//const miArchivonoesMd = (mensajedeError) => { //manejar promesa rechazada
  //  console.log(mensajedeError);
//};
//validandoExtension.then(miArchivoesMd, miArchivonoesMd);}

/*validandoExtension
    .then((mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion, links)
    })
    .catch((mensajeDeError) => {
        console.log(mensajeDeError);
    });
*/

