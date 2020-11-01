const { crearCliente } = require('../src/ClienteRest.js')
const request = require('request')
const fs = require('fs')
const { crearServidor } = require('../src/Server.js')
const axios = require('axios')
const FormData = require('form-data')


async function main(){
    const server = await crearServidor(0)
    const cliente = crearCliente('http://localhost', server.address().port, '/remiseria/upload')

    function uploadFile() {
        
        const form = new FormData();
        const stream = fs.createReadStream('post.png');


        form.append('image', stream);
        form.name = 'nachito'
        const formHeaders = form.getHeaders();
        

        axios.post(`http://localhost:${server.address().port}/remiseria/upload`, form, {
        headers: {
            ...formHeaders,
        },
        name: 'nachito',
        tempFilePath: './uploads'
        })
        .then(response => response)
        .catch(error => error)

    }
    uploadFile()
}

main()


