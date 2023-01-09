'use strict'
const fs = require('fs')

//trabajando con streams - escritura y lectura de archivos
/* let readStream = fs.createReadStream('assets/nombres.txt')
let writeStream = fs.createWriteStream('assets/nombres_copia.txt')

readStream.pipe(writeStream)

readStream.on('data', function(chunk){
    console.log('Datos leidos -> ' + chunk.length + ' Caracteres')
})

readStream.on('end', function(){
    console.log('Se ha terminado de leer el archivo...')
}) */

let readStream = fs.createReadStream('assets/nombres.txt')
let writeStream = fs.createWriteStream('assets/nombres_copia.txt')

readStream.pipe(writeStream)

readStream
        .on('data', function(chunk){
            console.log('Datos leidos -> ' + chunk.length + ' Caracteres')
        })
        .on('end', function(){
            console.log('Se ha terminado de leer el archivo...')
        })


