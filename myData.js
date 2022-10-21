'use strict'

//exportar e importar archivos

let name = 'Daniel', 
    email = 'kaiserkey2@gmail.com',
    _phone = '23423454235443'//las variables privadas se colocan con un guion bajo

function myFUnction(){
    return 0
}

//solo se agregan las variables que quiero que sean publicas
module.exports.name = name
module.exports.email = email
/*module.exports._phone = _phone*/