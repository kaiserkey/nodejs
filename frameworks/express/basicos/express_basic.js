'use strict'

const express = require('express'),
        app = express()

app
    .get('/', (req, res)=>{
        res.sendFile(__dirname+'/publics/index.html')
    })
    .listen(3000)

console.log('Iniciando Express en el puerto 3000')