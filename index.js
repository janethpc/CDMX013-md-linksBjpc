const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
const mdLinks = require('./mdLinks')



readline.question((`Ingresa una ruta:`), (route) => {
mdLinks.resolvePath(route)
mdLinks.validPath(route)
mdLinks.pathType(route)
mdLinks.texto(route)
 //exit()
})