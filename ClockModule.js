'use strict'

const EventEmitter = require('events').EventEmitter
module.exports = class ClockModule extends EventEmitter{

    mostrarHora(){
        let hora = ()=>{
            let date = new Date(),
            addZero = (num)=>
            {
                return (num<10) ? '0'+num : num
            },
            rango = ()=>
            {
                return (date.getHours()<12) ? 'AM' : 'PM'
            },
            hrs = addZero(date.getHours()),
            min = addZero(date.getMinutes()),
            sec = addZero(date.getSeconds())

            let msg = `${hrs}:${min}:${sec} ${rango()}`

            console.log(msg)
        }

        super.on('tictac', ()=>{ hora() })

        setInterval( ()=>{ super.emit('tictac') }, 1000);
    }

}