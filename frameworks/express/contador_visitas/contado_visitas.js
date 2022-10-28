const express = require('express'),
        app = express(),
        cookieParser = require('cookie-parser'),
        cookieSession = require('cookie-session')
        

app
    .use(cookieParser())
    .use(cookieSession({secret: "secreto"}))

app
    .get('/', (req,res)=>{
        req.session.visitas || (req.session.visitas = 0)

        let n = req.session.visitas++

        res.end(
        `
            <h1>
                Numero de Visitas: ${n}
            </h1>
        `
        )
    })
    .listen(3000)

console.log('Iniciando Express en el puerto 3000')