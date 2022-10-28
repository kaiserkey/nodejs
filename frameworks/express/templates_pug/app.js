'use strict'

const express = require( 'express' ),
        favicon = require( 'serve-favicon' ),
        pug = require( 'pug' ),
        morgan = require( 'morgan' ),
        routes = require( './routes/index' ),
        faviconURL = `${__dirname}/publics/img/coffee.ico`,
        publicDir = express.static( `${__dirname}/publics` ),
        viewsDir = `${__dirname}/views`,
        port = ( process.env.PORT || 3000 ),
        app = express()



app// configurando app
    .set( 'view engine', 'pug' )
    .set( 'views', viewsDir )
    .set( 'port', port )
    //ejecutando middlewares
    .use(favicon(faviconURL))
    .use( publicDir )
    .use( morgan('dev') )
    //ejecutando el middleware enrutador
    .use( '/', routes )
    

module.exports = app


