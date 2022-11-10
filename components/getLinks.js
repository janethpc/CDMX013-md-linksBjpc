const fs = require('fs')

let cleanHref = {};
let cleanText = {};

const getLinks = (routeFile) => {
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
    getLinks
  };