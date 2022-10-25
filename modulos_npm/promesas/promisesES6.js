'use strict'

const fs = require('fs'),
        file = '../../assets/nombres.txt',
        newFile = '../../assets/nombres_promisesES6_copia.txt',
        promises = new Promise( (resolved, rejected)=>{
            fs.access(file, fs.F_OK, (err)=>{
                return (err) 
                            ? reject(new Error('EL archivo no existe')) 
                            : resolve(true)
            })
        })

promises
        .then( (resolved,rejected)=>{ 
            return new Promise(
                fs.readFile(file, (err, data)=>{
                    return (err)
                                ? reject(new Error('El archivo no se pudo leer'))
                                : resolve(data)
                })
            )
        } )
        .then( (resolved,rejected)=>{ 
            return new Promise(
                fs.writeFile(newFile, resolved, (err)=>{
                    return (err)
                                ? reject(new Error('El archivo no se ha podido copiar'))
                                : resolve('El archivo se ha copiado con exito')
                })
            )
        } )
        .then( (resolved,rejected)=>{ 
            console.log(resolved)
        } )
        .catch( (err)=>{ 
            console.log(err.message)
        } )
