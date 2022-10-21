'use strict'
//noidejs eventos
const EventEmitter = require('events').EventEmitter,
        pub = new EventEmitter()

pub
    .on('myEvent', function(message){
        console.log(message)
    })
    .once('myEvent', function (message){
        console.log('Se emite el primer evento...')
    })

pub.emit('myEvent', 'Soy un emisor de eventos')
pub.emit('myEvent', 'Volviendo a emitir el evento')
//pub.removeAllListeners('myEvent')
pub.emit('myEvent', 'Volviendo a emitir el evento por tercera vez')

