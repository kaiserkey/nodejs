'use strict'

class ClockModule{

    ClockModule(){}

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
        setInterval( ()=>{ hora()  }, 1000);
    }

}

module.exports = new ClockModule()