'use strict'

//manejo de urls con servidor http nodejs
const http = require('http').createServer(webServer),
            path = require('path'),
            urls = [
                {
                    route: '',
                    output: '<h2>Home</h2>'
                },
                {
                    route: 'acerca',
                    output: "<h2>Acerca De...</h2>"
                },
                {
                    route: 'contacto',
                    output: '<h2>Contacto...</h2>'
                }
            ]

function webServer(req, res){
    const message = "<h1>Trabajando con NodeJS Servidor HTTP</h1>",
            pathURL = path.basename(req.url)
    urls.forEach((pos) => {
        if(pos.route==pathURL){
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(message + pos.output)
        }
    });

    if(!res.finished){
        res.writeHead(404, {'Content-Type': 'text/html'})
            res.end('<h1>Error 404: not found</h1>')
    }
}

http.listen(3000)

console.log('Servidor corriendo en: http://localhost:3000/');