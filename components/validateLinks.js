const axios = require ('axios');

const validandoLinks = (link) => {
    let request = axios.get(link);
    let object = request.then((response) => {
    //console.log(response)
      return {ok:'TU LINK FUNCIONA', href: link, status:response.status, text: response.statusText}
    })
    .catch(({response}) => {
       return {ohNo:'No podras consultar este link', href: link, status:response.status, text:response.statusText} //me imprime undefined ¿?
    })
    return object
}

module.exports = {validandoLinks}