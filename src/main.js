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
    /* await axios.post(`http://localhost:${puertoReal}/`, { nombre: 'tomi-baila-en-tutu' })
    const response2 = await axios.get(`http://localhost:${puertoReal}/`) */
    //console.log(response2.data)
    /* const pdf = await axios.get(`http://localhost:${puertoReal}/`)
    console.log(pdf) */
    //pdf.pipe(fs.createWriteStream(`./pdf.pdf`))
    /* fs.writeFileSync('./', pdf)
    fs.
    console.log(fs.readFileSync())*/
    // server.close() 
}

main()