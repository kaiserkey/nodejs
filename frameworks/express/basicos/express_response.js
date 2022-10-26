'use strict'

const express = require('express'),
        app = express()

app
    .get('/', (req, res)=>{
        // res.end('<h1>Hello World Express!!</h1>')
        res.send('<h1>Hello World Express!!</h1>')
    })
    .get('/hello', (req, res)=>{
        res.send('<h1>Bienvenido a Express!!</h1>')
    })
    .get('/json', (req, res)=>{
        res.json({
            "name": 'Daniel',
            "age": 28,
            "city": 'Villa Mercedes'
        })
    })
    .listen(3000)

console.log('Iniciando Express en el puerto 3000')