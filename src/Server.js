const express = require('express')

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
       /*  app.post('/api/estudiantes', async (req, res) => {
            const estuCreado = req.body
            estuCreado.id = nextId++

            try {
                await db.addUnique(estuCreado, 'dni')
                res.json(estuCreado)
            } catch (error) {
                res.status(400).json({ message: error.message })
            }
        }) */

        const server = app.listen(puerto)
            .on('listening', () => resolve(server))
            .on('error', () => reject(new Error('address in use')))
    })
}

module.exports = { crearServidor }