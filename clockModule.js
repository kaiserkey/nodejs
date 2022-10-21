'use strict'

const EventEmitter = require('events').EventEmitter
module.exports = class Clock{

    mostrarHora(){
        let pub = new EventEmitter()
        
        let hora = ()=>{
            let date = new Date(),
            addZero = (num)=>{
                return (num<10) ? '0'+num : num
            },
            rango = ()=>{
                return (date.getHours()<12) ? ' AM' : ' PM'

            },
            hrs = addZero(date.getHours()),
            min = addZero(date.getMinutes()),
            sec = addZero(date.getSeconds())

            let msg = hrs+':'+min+':'+sec+rango()

            console.log(msg)
        }

        pub.on('tictac', function(){ hora() })

        setInterval(function (){
            pub.emit('tictac')
        }, 1000);
    }

}




/*  module.exports.Clock = new Clock() */