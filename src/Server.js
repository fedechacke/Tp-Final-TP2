const express = require('express')
const fs = require('fs')
const { crearModuloPdf } = require('../modulos/PdfGeneratorModule/PdfGeneratorModule.js');
const request = require('request');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');


async function main () {
    await crearServidor(4200);
}

main()

function crearServidor(puerto, db) {
    return new Promise((resolve, reject) => {
        const app = express()

        app.use(express.json())
        app.use(fileUpload({
            createParentPath: true
        }));
        //add other middleware
        app.use(cors());
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(morgan('dev'));


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
            console.log('REQ. : ', req)
            try {
                if(!req.files) {
                    res.send({
                        status: false,
                        message: 'No file uploaded'
                    });
                } else {
                    //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
                    let nachito = req.files.nachito;
                    
                    //Use the mv() method to place the file in upload directory (i.e. "uploads")
                    nachito.mv('./uploads/' + nachito.name);
        
                    //send response
                    res.send( {
                        status: true,
                        message: 'File is uploaded',
                        data: {
                            name: nachito.name,
                            mimetype: nachito.mimetype,
                            size: nachito.size
                        }
                        });
                        }
                    } catch (err) {
                        res.status(500).send(err);
                    }
                });

/*             const file = req
            try {
                if (file) {
                    fs.writeFileSync('./files/nachito.pdf', file)
                    console.log('Archivo subido con éxito')
                } else {
                    const err = new Error('no hay nada en el archivo')
                    res.status(400).json({message: err.message})
                }
            } catch (error) {
                res.status(400).json({message: error.message})
            }

        })  */

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