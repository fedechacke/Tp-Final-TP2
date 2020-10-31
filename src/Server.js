const express = require('express')
const fs = require('fs')
const { crearModuloPdf } = require('../modulos/PdfGeneratorModule/PdfGeneratorModule.js');
const request = require('request');


async function main () {
    await crearServidor(4200);

}


main()


function crearServidor(puerto, db) {
    return new Promise((resolve, reject) => {
        const app = express()

        app.use(express.json())

        app.get('/api/remiseria/autos', async (req, res) => {
           
            let autos

            if(req.query.patente){
                autos = await db.getAutoByPatente(req.query.patente)
            }else{
                autos = await db.getAllAutos()
            }
            res.json(autos)
        })

        app.get('/api/remiseria/choferes', async (req, res) => {
            let choferes

            if(req.query.dni){
                choferes = await db.getChoferByDni(req.query.patente)
            }else{
                choferes = await db.getAllChoferes()
            }
            res.json(choferes)
        })

        app.get('/remiseria/download/:id', async (req, res) => {
            if (req.params.id > 0){
                const data =fs.readFileSync(`./Demo.pdf`);
                res.contentType("application/pdf");
                res.send(data);
            }
        })

         app.post('/remiseria/upload', async (req, res) => {
            const file = req.params
            console.log('ALGO 1')
            console.log('REQ. params: ' , req.form)
            try {
                if (file) {

                    fs.writeFileSync('./files/nachito.pdf', file)
                    res.json(file)
                    console.log('ALGO 2')
                } else {
                    const err = new Error('no hay nada en el archivo')
                    res.status(400).json({message: err.message})
                }
            } catch (error) {
                res.status(400).json({message: error.message})
            }

        }) 

 /*        let formData = {
            name: 'file1',
            file: {
              value:  fs.createReadStream('Demo.pdf'),
              options: {
                filename: 'Demo.pdf',
                contentType: 'application/pdf'
              }
            }
          };
          
        request.post({url:'http://localhost/remiseria/upload', formData: formData}, 
        function cb(err, httpResponse, body) {
            if (err) {
            return console.error('upload failed:', err);
            }
            console.log('Upload successful!  Server responded with:', body);
        }
        ); */










        app.post('/api/remiseria/autos', async (req, res) => {
            const auto = req.body
            
            try {
                if (auto.patente){
                    await db.addAuto(auto)
                    res.json(auto)
                } else {
                    const err = new Error('El auto no tiene patente')
                    res.status(400).json({ message: err.message })
                }
            } catch (error) {
                res.status(400).json({ message: error.message })
            }
                
        })
        /* app.post('/api/estudiantes', async (req, res) => {
            const estuCreado = req.body
            estuCreado.id = nextId++

            try {
                await db.addUnique(estuCreado, 'dni')
                res.json(estuCreado)
            } catch (error) {
                res.status(400).json({ message: error.message })
            }
        })
 */
        const server = app.listen(puerto)
            .on('listening', () => resolve(server))
            .on('error', () => reject(new Error('address in use')))
    })
}

module.exports = { crearServidor }