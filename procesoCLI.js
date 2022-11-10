//#!/usr/bin/env node
const process = require('node:process');
const { argv } = require('node:process');
const {mdLinks} = require ('./index');
const [,, ...args] = process.argv;
const chalk = require ('chalk');

const nameFile = argv[2];
const options = {validate: [,, ...args].includes('--validate'), stats: [,, ...args].includes('--stats')}

mdLinks(nameFile, options)
.then((res) => {
    if(options.validate === false && options.stats === false){
        res.forEach(element => {
            console.log(nameFile, element.href, element.text)
        });
        console.log('otros comandos: --validate / -- stats / --validate --stats')
    }else if (options.validate === false && options.stats === true){
        let array = res.repeatedLinks;
        console.log(res.total, res.unique, res.repeated);
        array.forEach(e => {
            console.log(e.href)
        })
    }else if(options.validate === true && options.stats === false){
        res.forEach(element => {
            console.log(element.menss, element.href, element.status, element.text)
        })
    }else if(options.validate === true && options.stats === true){
        let array = res.brokenLinksArray;
        console.log(res.total, res.unique, res.broken)
        array.forEach(e => {
            console.log(chalk.bgBlueBright.bold(e.href));
        })
    }
})
.catch((err) => console.log(`
   
                                ${chalk.bgRed(' ERROR: ')} ${chalk.white.bold(err)} 
   
 `))