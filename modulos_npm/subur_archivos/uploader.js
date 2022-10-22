'use strict'
//servidor http estatico en nodejs
var http = require('http').createServer(serverUpload),
            fse = require('fs-extra'),
            util = require('util'),
            formidable = require('formidable')


function serverUpload(req, res){

    if(req.method == 'GET'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        let form = 
        `
            <form action="/upload" enctype="multipart/form-data" method="post">
                <h2>Uploader de archivos en nodejs</h2><br>
                <div><input type="file" name="upload" id="upload" required></div><br>
                <div><input type="submit" value="Subir Archivo"></div>
            </form>
        `
        res.end(form)
    }

    if(req.method == 'POST' && req.url == '/upload'){
        let form = new formidable.IncomingForm()
        form
            .parse(req, (err, field, files)=>{
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write(
                `
                    <h1>Archivo Recibido</h1> 
                    <a href="/">Regresar</a>
                    <br>
                    <code>${util.inspect( { file: files } )}</code>
                `
                )
                res.end()
            })
            .on('progress', (bytesReceived, bytesExpected)=>{
                let percentCompleted = ( (bytesReceived/bytesExpected) * 100 )
                console.log(percentCompleted.toFixed())
            })
            .on('error', (err)=>{
                console.lop(err)
            })
            .on('end', (fields, files)=>{
                //hubicacion temporal del archivo que se sube
                let temPath = form.openedFiles[0].filepath,
                    //extraemos el nombre del archivo
                    fileName = form.openedFiles[0].originalFilename,
                    //definimos la nueva ubicacion del archivo
                    newLocation = './upload/' + fileName
                
                fse.copy(temPath, newLocation, (err)=>{
                    return (err)? console.log(err): console.log('El archivo se subio exitosamente')
                } )
            })

        return
    }

    function readFile(err, data){
        if(err) throw err
        res.end(data)
    }

    
}

http.listen(3000, 'localhost');

console.log('Servidor corriendo en: http://localhost:3000/');