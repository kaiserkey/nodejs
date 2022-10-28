'use strict'

const app = require('./app'),
        server = app.listen(app.get('port'), ()=>{
            console.log(`Iniciando en el puerto ${app.get('port')}`)
        })