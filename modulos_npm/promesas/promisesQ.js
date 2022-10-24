'use strict'

const { reject } = require('q')
const { deflate } = require('zlib')

const fs = require('fs'),
        Q = require('q'),
        file = '../../assets/nombres.txt',
        newFile = '../../assets/nombres_promisesQ_copia.txt'

/* 
Si existe
-leelo
-copialo
-avisa que se copio
-manejar errores
*/

function existFile(file){
    let defer = Q.defer()

    fs.access(file, fs.F_OK, (err)=>{
        return (err) 
                    ? defer.reject(new Error('EL archivo no existe')) 
                    : defer.resolve(true)
    })

    return defer.promise
}

function readFile(file){
    let defer = Q.defer()

    fs.readFile(file, (err, data)=>{
        return (err)
                    ? defer.reject(new Error('El archivo no se pudo leer'))
                    : defer.resolve(data)
    })
    return defer.promise
}

function writeFile(file, data){
    let defer = Q.defer()
    fs.writeFile(file, data, (err)=>{
        return (err)
                    ? defer.reject(new Error('El archivo no se ha podido copiar'))
                    : defer.resolve('El archivo se ha copiado con exito')
    })
    return defer.promise
}

existFile(file)
                .then(()=>{ return readFile(file) })
                .then((dataPromise)=>{ return writeFile(newFile, dataPromise) })
                .then((dataPromise)=>{ return  console.log(dataPromise)})
                .fail((err)=>{return console.log(err.message)})

