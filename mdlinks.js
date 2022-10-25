const fs = require('fs')
const path = require('path')
const { exit } = require('process')



//Si es una ruta relativa convertir en absoluta
const resolvePath = (route) => {
  const pathAbsolute = path.resolve(route)
  console.log(`${pathAbsolute}`)
}
// ¿La ruta existe?
const validPath = (route) => {
  const fileExist = fs.existsSync(route) 
  if (!fileExist) {
    console.log(('ruta no valida'))
    exit()
  }}

const dirFiles = (folderPath) => fs.readdirSync(folderPath)

const mdFiles = file => {
    const mdFile = path.extname(file)
    if (mdFile == '.md') {
      console.log(file)
    }
  }
  // 
const pathType = (route) => {
  const fileType = fs.statSync(route)
      if (fileType.isFile()){
      console.log(( 'El archivo si existe'))
      fileExtension(route)
    } if (fileType.isDirectory()) {
      console.log((' Se encontraron los siguientes archivos md en la carpeta: '))
      dirFiles(route).forEach(file => mdFiles(file)) 
    } 
}

const fileExtension = (route) => {
if (path.extname(route) !== '.md') {
  console.log((' El archivo no es .md '))
  exit()
}  else {
  console.log((' El archivo si es .md ') )
} 
}

  const texto = (direccion) => {
    fs.readFileSync(direccion, 'utf-8'); 
  console.log(texto);
 };


  



module.exports.resolvePath = resolvePath;
module.exports.validPath = validPath;
module.exports.pathType = pathType;
module.exports.fileExtension = fileExtension;
module.exports.texto = texto;

