const express = require('express')
const axios = require('axios')

const app = express()

let miContenedor

app.use(express.json())

app.get('/', (req, res) => {
    res.json({ contenedor: miContenedor })
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
    await axios.post(`http://localhost:${puertoReal}/`, { nombre: 'tomi-baila-en-tutu' })
    const response2 = await axios.get(`http://localhost:${puertoReal}/`)
    console.log(response2.data)
    server.close()
}

main()