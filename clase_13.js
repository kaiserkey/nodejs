'use strict'

//manejo de urls con servidor http nodejs
const http = require('http').createServer(webServer),
            url = require('url'),
            path = require('path'),
            fs = require('fs'),
            urls = [
                {
                    id: 1,
                    route: '',
                    output: './assets/page_1.html'
                },
                {
                    id: 2,
                    route: 'acerca',
                    output: "./assets/page_2.html"
                },
                {
                    id: 3,
                    route: 'contacto',
                    output: './assets/page_3.html'
                }
            ]

function webServer(req, res){
    const pathURL = path.basename(req.url),
            id = url.parse(req.url, true).query.id

    console.log(`path: ${pathURL},  id: ${id}`)

    function readFile(err, data){
        if(err) throw err
        res.end(data)
    }

    urls.forEach((pos) => {
        if(pos.route==pathURL || pos.id == id){
            res.writeHead(200, {'Content-Type': 'text/html'})
            fs.readFile(pos.output, readFile)
        }
    });

    if(!res.finished){
        res.writeHead(404, {'Content-Type': 'text/html'})
        fs.readFile('./assets/page_0.html', readFile)
    }
}

http.listen(3000)

console.log('Servidor corriendo en: http://localhost:3000/');