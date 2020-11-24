const express = require('express')
const fs = require('fs')
const fileUpload = require('express-fileupload');
const multer = require('multer');
const { crearFactoryCu } = require('../Factories/Zeus/MegaFactoryCU.js');

async function main () {
    await crearServidor(4200);
}

main()

async function crearServidor(puerto, db) {
    return new Promise(async (resolve, reject) => {

        const app = express()

        app.use(express.json())
        app.use(fileUpload({createParentPath: true}));

        function manejarError(error, res) {
            if (error.type === 'USER_ERROR'){
                res.status(400).send(error.message);
            } else {
                res.status(500).send(error.message);
            }
        }

        app.post('/api/remiseria/recopago', (req, res) => {
            const form = req.body;
            const cu = crearFactoryCu('1');
            try {
                cu.getCu().invocar(form.tempData, form.mailData);
                res.status(204).send();
            }
            catch (error) {
                manejarError(error, res);
            }
        })

        app.post('/api/remiseria/resdesemp', async (req, res) => {
            const form = req.body;
            const cu = crearFactoryCu('2');
            try {
                await cu.getCu().invocar(form.mailData, db);
                res.status(204).send(); 
            } catch (error) {
                manejarError(error, res);
            }
        })

        app.post('/api/remiseria/maildesemp', async (req, res) => {
            const form = req.body;
            const cu = crearFactoryCu('3');
            try {
                await cu.getCu().invocar(form.tempData, form.mailData, db);
                res.status(204).send();
            } catch (error) {
                manejarError(error, res);
            }
        })

        app.post('/api/remiseria/repostats', async (req, res) => {
            const form = req.body;
            const cu = crearFactoryCu('4');
            try {
                await cu.getCu().invocar(form.tempData, db);
                res.status(200).send();
            } catch (error) {
                manejarError(error, res);
            }
        })

        app.get('/remiseria/reportes', async (req, res) => {
            const data =fs.readFileSync(`./Demo.pdf`);
            res.contentType("application/pdf");
            res.send(data);
        })

        let upload = multer({dest: './uploads/'});

        app.post('/remiseria/imagenes', upload.single('nachito'), async (req, res) => {
            try {
                let archivo = req.files.image
                console.log(archivo)
                archivo.mv('../uploads', err => {
                    if(err){
                        throw err.message
                    }
                })
                console.log('HIZO EL UPLOAD')
                res.send(archivo);
            } catch (error) {
                manejarError(error, res);
            }
            });

        const server = app.listen(puerto)
            .on('listening', () => resolve(server))
            .on('error', () => reject(new Error('address in use')))
        });


}

module.exports = { crearServidor }
