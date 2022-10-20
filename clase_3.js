'use strict'

/* var http = require('http');

http.createServer(function (request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World!\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/'); */

var http = require('http');

function webServer(req, res){
    res
    .writeHead(200, {'Content-Type': 'text/html'})
    .end('<h1>Hello World!</h1>');
}

http
.createServer(webServer)
.listen(3000, 'localhost');

console.log('Servidor corriendo en: http://localhost:300/');