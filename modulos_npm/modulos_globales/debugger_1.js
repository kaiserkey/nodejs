'use strict'

const http = require('http')

function webServer(req, res){
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end('<h1>Hello World!</h1>')
}

http.createServer(webServer)
    .listen(3000, 'localhost')

console.log('Servidor corriendo...')