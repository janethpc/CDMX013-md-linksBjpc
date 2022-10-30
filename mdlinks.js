const fs = require('fs')
const path = require('path')
const { exit } = require('process')



//Si es una ruta relativa convertir en absoluta
const resolvePath = (route) => {
  const pathAbsolute = path.resolve(route)
  return pathAbsolute
}

const mdFiles = file => {
    const mdFile = path.extname(file)
    if (mdFile == '.md') {
      return mdFile
    }else{
      console.log('tu archivo no es .md')
    }
  };

  const openfile = (routeFile) => {
    const files = fs.readFileSync(routeFile, 'utf-8').match(/\[(.+)\]\((https?:\/\/.+)\)/gi);
    console.log(files)
    //let result= files.map((link) => {
      //let obj = {
        //href : '',
        //text : '',
        //link : link,
     // }
      //return obj;
    //});    
     //return result;
    
    };
    
 

module.exports = {
  resolvePath,
  mdFiles,
  openfile
}

