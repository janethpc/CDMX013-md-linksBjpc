const fs = require('fs')
const { Http2ServerRequest } = require('http2')
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

  let cleanHref = {};
  let cleanText = {};

const openfile = (routeFile) => {
  const files = fs.readFileSync(routeFile, 'utf-8').match(/\[(.+)\]\((https?:\/\/.+)\)/gi);
  let result = files.map((link) => {

    let hrefS = link.match(/\((https?:\/\/.+)\)/gi);
    cleanHref = hrefS.toString().replace("(", "").replace(")", "");

    let textS = link.match(/\[(.+)\]/gi);
    cleanText = textS.toString().replace("[", "").replace("]", "")

    let obj = {
      text: cleanText,
      href: cleanHref,
      file: routeFile,
    }
    return obj;
  });
  return result;
};

 

module.exports = {
  resolvePath,
  mdFiles,
  openfile
}

