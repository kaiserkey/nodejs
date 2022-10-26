'use strict'

const express = require('express'),
        app = express()

app
    .get('/user/:id-:name', (req, res)=>{
        res.end(`<h1>Bienvenid@ a Express ${(req.params.name)[0].toUpperCase()+ 
                                            (req.params.name).substring(1, (req.params.name).length)}
                <h2>Su ID de Usuario es: ${req.params.id}</h2>
                </h1>`)
    })
    .get('/', (req, res)=>{
        res.end(`<h1>Bienvenid@ a Express</h1>`)
    })
    .get('/search', (req, res)=>{
        res.end(`
            <h1>La busqueda realizada es: ${req.query.s}</h1>
        `)
    })
    .listen(3000)

console.log('Iniciando Express en el puerto 3000')