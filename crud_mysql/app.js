'use strict'

const express = require( 'express' ),
        bodyParser = require('body-parser'),
        morgan = require( 'morgan' ),
        routes = require( './routes/index' ),
        publicDir = express.static( `${__dirname}/publics` ),
        viewsDir = `${__dirname}/views`,
        port = 4000,
        app = express()

app// configurando app
    .set( 'view engine', 'pug' )
    .set( 'views', viewsDir )
    .set( 'port', port )
    //ejecutando middlewares
    .use( bodyParser.json() )
    //parse application/json
    .use( bodyParser.urlencoded( { extended: false } ) ) 
    //parse application/x-www-form-urlencoded
    .use( publicDir )
    .use( morgan('dev') )
    //ejecutando el middleware enrutador 
    .use( '/', routes )
    .listen(app.get('port'), ()=>{
        console.log(`Iniciando en el puerto ${app.get('port')}`)
    })