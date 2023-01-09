'use strict'

//javascript forms

const http = require('http').createServer(webServer),
        form = require('fs').readFileSync('./assets/formulario.html'),
        querystring = require('querystring'),
        util = require('util')
        let dataString = ''

function webServer(req, res){
    if(req.method == 'GET'){
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.end(form)
    }
    if(req.method == 'POST'){
        req
            .on('data', (data)=>{
                dataString += data
            })
            .on('end', ()=>{
                let dataObject = querystring.parse(dataString),
                    objecToJson = util.inspect(dataObject),
                    templateString = `Los datos enviados por POST son: 
                                        -> ${dataString}
                                        Los datos enviados por POST como JSON son: 
                                        -> ${objecToJson}`
                console.log(templateString)
                res.end(templateString)
            })
    }
}

http.listen(3000)

console.log('Servidor http corriendo...')
