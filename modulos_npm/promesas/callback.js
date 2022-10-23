'use strict'

const fs = require('fs'),
        file = '../../assets/nombres.txt',
        newFile = '../../assets/nombres_callback_copia.txt'

fs.access(file, fs.F_OK ,function (err){
    if(!err)
    {
        console.log('El archivo existe...')
        fs.readFile(file, function (err, data){
            if(!err)
            {
                console.log('El archivo se ha leido exitosamente...')
                fs.writeFile(newFile, data, function (err){
                    (!err)
                    ? console.log('Se ha escrito el archivo exitosamente...')
                    :console.log('No se ha podido escribir el archivo...')
                })
            }
            else
            {
                console.log('El archivo no se ha podido leer...')
            }
        })
    }
    else
    {
        console.log('El archivo no existe...')
    }
})