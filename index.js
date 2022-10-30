const { argv } = require('node:process');
const chalk = require('chalk');
const {fs} = require('fs');
const { resolvePath, mdFiles, openfile} = require('./mdlinks.js');

const nameFile = argv[2];


const routeFile = (resolvePath(nameFile));
console.log(routeFile);

const extension = (mdFiles(nameFile));
if(extension == '.md'){
    console.log(openfile(nameFile));
};







 

