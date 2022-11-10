const { rejects } = require('node:assert');
const { argv } = require('node:process');
const {resolvePath, mdFiles} = require ('./funciones');
const {getLinks} = require ('./components/getLinks');
const { validandoLinks } = require('./components/validateLinks');


const nameFile = argv[2];


const mdLinks = (givenPath, options) => {
  
  const pathFile = resolvePath(nameFile);
  const extension = mdFiles(pathFile)
  const links = getLinks(pathFile)
  const objlink = links.map((obj) =>{ //obtengo del objeto unicamente los links
    const Onelink = obj.href;
    return Onelink
  });

  return new Promise((resolve, reject) =>{
    if(extension === ',md'){
      if(options.validate === true && options.stats === false){

        let array = objlink.map(element => validandoLinks(element));
        let allRequests = Promise.all(array)
        resolve(allRequests)
      }
    }
  })

}

module.exports = {mdLinks}