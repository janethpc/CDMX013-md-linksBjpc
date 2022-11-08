const { argv } = require('node:process');
const chalk = require('chalk');
const axios = require ('axios');
const EventEmitter = require ('events');
const { resolvePath, mdFiles, getLinks} = require('./funciones.js');

const nameFile = argv[2];
const routeFile = (resolvePath(nameFile));
console.log(chalk.bgRed.bold(routeFile))
const extension = (mdFiles(routeFile)); 
const links = getLinks(routeFile);

const objlink = links.map((obj) =>{ //obtengo del objeto unicamente los links
    const Onelink = obj.href;
    return Onelink
});

const emisorEventos = new EventEmitter(); //definiendo 
emisorEventos.on('validate', () => { //escuchando
    console.log(chalk.red(`total links:`));
});

 emisorEventos.emit('validate'); //emitiendo

    const validandoLinks = (link) => {
        let request = axios.get(link);
        let object = request.then((response) => {
           // console.log(response)
           return {ok:'TU LINK FUNCIONA', href: link, status:response.status, text: response.statusText}
        })
        return object
        .catch(({response}) => {
           return {ohNo:'No podras consultar este link', href: link, status:response.status, text:response.statusText} //me imprime undefined ¿?
        })
    }

  const objetdeaxios = Promise.all(objlink.map(validandoLinks)).then((resultado)=>{
      console.log(resultado);
     });



/*const validandoExtension = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (extension){
            resolve(chalk.bgRed.bold(`Se encontraron`));
        }else{
            reject('tu archivo no es MD');
        }
    }, 1000);
});

validandoExtension
    .then((mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion)
    })
    .catch((mensajeDeError) => {
        console.log(mensajeDeError);
    });*/
   

//const miArchivoesMd = (valor) => { //manejar promesa cumplida
  //  console.log(valor, leerFile);
//};
//const miArchivonoesMd = (mensajedeError) => { //manejar promesa rechazada
  //  console.log(mensajedeError);
//};
//validandoExtension.then(miArchivoesMd, miArchivonoesMd);}



  

