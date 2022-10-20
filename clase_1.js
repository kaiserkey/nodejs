'use strict'
var contador = 0;

let saludo = setInterval(() => {
    console.log("Hello World!", contador)
    contador++;
    if(contador==3){
        clearInterval(saludo);
    }
}, 1000);

saludo;