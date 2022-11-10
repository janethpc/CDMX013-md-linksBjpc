
const chalk = require('chalk');
const path = require('path')

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
      console.log(chalk.red('tu archivo no es .md'))
    }
  };

  
module.exports = {
  resolvePath,
  mdFiles,
}

