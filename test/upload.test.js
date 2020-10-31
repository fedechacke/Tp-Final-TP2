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

        var nachito = new FormData();
        const stream = fs.createReadStream('post.png');
        nachito.append('Archivo', stream);

        axios({
            method: 'post',
            url: `http://localhost:${server.address().port}/remiseria/upload`,
            data: nachito,
            headers: {'Content-Type': 'multipart/form-data' }
            })
            .then(function (response) {

                console.log(response.data)
            })
            
            .catch(function (response) {

            });
    }
    uploadFile()
}

main()


