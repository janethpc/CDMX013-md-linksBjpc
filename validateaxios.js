const { argv } = require('node:process');
const chalk = require('chalk');
const {validandoLinks} = require('./components/validateLinks');
const EventEmitter = require ('events');
const {getLinks} = require('./components/getLinks')
const { resolvePath, mdFiles} = require('./funciones.js');

const nameFile = argv[2];
const routeFile = (resolvePath(nameFile));
console.log(chalk.bgBlueBright.bold('la ruta de tu archivo es:'));
console.log(chalk.bgRed.bold(routeFile))
const extension = (mdFiles(routeFile)); 
const links = getLinks(routeFile);

const objlink = links.map((obj) =>{ //obtengo del objeto unicamente los links
    const Onelink = obj.href;
    return Onelink
});

const emisorEventos = new EventEmitter(); //definiendo
 
emisorEventos.on('validate', () => { //escuchando
    console.log(chalk.bgMagentaBright.bold(`tu archivo contiene los sig. links:`));
});

 emisorEventos.emit('validate'); //emitiendo

   
    
  Promise.all(objlink.map(validandoLinks)).then((resultado)=>{
     console.log((resultado));
     });


//console.log(chalk.bgRed.bold(objetdeaxios));
/*const validandoExtension = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (extension){
            resolve(chalk.bgMagentaBright.bold(`Se encontraron`));
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

//ordenar producto

  

