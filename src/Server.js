const express = require('express')
const fs = require('fs')
const { crearModuloPdf } = require('../modulos/PdfGeneratorModule/PdfGeneratorModule.js');
const request = require('request');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');
const multer = require('multer');
const { mv } = require('shelljs');
const router = express.Router();


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

        /////////////////////////////////////////////////////////////////////////////


        let storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, './uploads')

            },
            filename: (req,file, cb) => {
                cb(null, file.originalname)
            }
        })
        let upload = multer({dest: './uploads/'});

        app.post('/remiseria/upload', upload.single('nachito'), async (req, res) => {
            try {
                let archivo = req.files.image
                archivo.mv('./uploads', err => {
                    if(err){
                       throw err.message
                    }
                })
                res.send(req.files);
                console.log('HIZO EL UPLOAD')
            } catch (error) {
                throw error.message
            }

            });

                




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
        });
}

module.exports = { crearServidor }
