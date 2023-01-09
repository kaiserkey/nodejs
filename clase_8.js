'use strict'

//emisor de eventos con herencia
const EventEmitter = require('events').EventEmitter
class Clock{

    mostrarHora(){
        let pub = new EventEmitter()
        
        let hora = ()=>{
            let date = new Date(),
            hrs = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds()
            

            if (hrs < 10) hrs = "0" + hrs;
            if (min < 10) min = "0" + min;
            if (sec < 10) sec = "0" + sec;

            let msg = hrs+':'+min+':'+sec

            console.log(msg)
        }

        pub.on('tictac', function(){ hora() })

        setInterval(function (){
            pub.emit('tictac')
        }, 1000);
    }

}

let reloj = new Clock()

reloj.mostrarHora()

