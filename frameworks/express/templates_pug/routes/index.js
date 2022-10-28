'use strict'

const express = require('express'),
        router = express.Router()

function pug(req, res, next){
    let locals = {
        title: 'Hello World in Pug',
        link: 'https://pugjs.org/api/getting-started.html',
        description: `
            Pug se llamó en principio Jade, pero a lo largo del desarrollo de este 
            proyecto tuvo que cambiar de nombre por motivos de licencia en el nombre 
            de Jade. Cuando hablamos de Pug en diseño y desarrollo web estamos haciendo 
            referencia a un motor de plantillas que tiene como objetivo facilitar la 
            creación de código HTML. Al ser un motor, pug es capaz de procesar código 
            HTML, estando construido con JavaScript lo que le permite trabajar con 
            Node.js.
            Por lo tanto, Pug es un template engine que facilita la creación de código 
            en HTML, haciendo mucho más sencilla su lectura y comprensión, lo que 
            repercute positivamente a la hora de realizar cambios o mantenimiento en 
            un sitio web.
            Pug no trabaja con etiquetas, sino con indentaciones como Python, por lo 
            que el código se presenta en un formato jerárquico utilizando tabulaciones,
            haciéndolo mucho más amigable para la vista, y facilitando de forma notable 
            su compresión.
            A la hora de escribir código con Pug solo es necesario escribir el nombre de 
            la etiqueta, añadir un espacio, y luego su contenido.
        `
    }
    res.render('index', locals)
}

function err404(req, res, next){
    let err = new Error(),
            locals = {
                title: 'Error 404',
                description: 'Recurso no encontrado',
                error: err
            }
    err.status = (err.status || 404);
    res.render('error', locals)
    next()
}

router
    .get('/', (req, res)=>{
        res.end('<h1>Terminada la configuracion de la app en express</h1>')
    })
    .get('/pug', pug)
    .use(err404)

module.exports = router