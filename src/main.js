const express = require('express')
const axios = require('axios')
const fs = require('fs')

const app = express()

let miContenedor

app.use(express.json())

app.get('/', (req, res) => {
    //res.json({ contenedor: miContenedor })
    var data =fs.readFileSync('./Demo.pdf');
            res.contentType("application/pdf");
            res.send(data); 
            
})

app.post('/', (req, res) => {
    miContenedor = req.body
    res.json()
})

function crearServidorEscuchandoEn(puerto) {
    return new Promise((resolve, reject) => {
        const server = app.listen(puerto, async () => {
            resolve(server)
        })
    })
}

async function main() {
    const server = await crearServidorEscuchandoEn(0)
    const puertoReal = server.address().port
    console.log(`servidor inicializado en puerto ${puertoReal}`)
}

main()