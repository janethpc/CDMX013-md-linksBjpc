const {getStats} = require('../components/getStats');

const statsWithValidation = (links) => {
    let statsOfLinks = getStats(links);

};

module.exports ={statsWithValidation}