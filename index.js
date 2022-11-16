const functions = require ('./funciones');
const {getLinks} = require ('./components/getLinks');
const { validandoLinks } = require('./components/validateLinks');
const {getStats} = require('./components/getStats');
const {statsWithValidation} = require ('./components/statsWithValidation');


const mdLinks = (givenPath, options) => {
  
  const pathFile = functions.resolvePath(givenPath);
  const extension = functions.mdFiles(pathFile)
  const links = getLinks(pathFile)
  const objlink = links.map((obj) =>{ //obtengo del objeto unicamente los links
    const Onelink = obj.href;
    return Onelink
  });

  return new Promise((resolve, reject) =>{
    if(extension === '.md'){
      if(options.validate === true && options.stats === false){

        let array = objlink.map(element => validandoLinks(element)); //funsion pasada como argumento 
        let allRequests = Promise.all(array);
        resolve(allRequests);

      } else if (options.validate === false && options.stats === true) {
        
        let stats = getStats(links);
        resolve(stats);

      }else if (options.validate === true && options.stats === true){
        
        let array = objlink.map(element => validandoLinks(element));
        let allRequests = Promise.all(array);
        let result = allRequests.then((res) => statsWithValidation(res));
        resolve(result);

      }else if(options.validate == false && options.stats === false){
        
        let objetoLinks = getLinks(pathFile);
        resolve(objetoLinks);

      }
    } else {

      reject('tu archivo no puede ser leido')
    }
  })

}

module.exports = {mdLinks}