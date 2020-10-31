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

        var bodyFormData = new FormData();
        const stream = fs.readFileSync('Demo.pdf');
        bodyFormData.append('Archivo', stream);

        axios({
            method: 'post',
            url: `http://localhost:${server.address().port}/remiseria/upload`,
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data' }
            })
            .then(function (response) {
                //handle success

                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

/*         let body = [];
        request.on('data', (chunk) => {
            body.push(chunk);
            }).on('end', () => {
            body = Buffer.concat(body).toString();
            // at this point, `body` has the entire request body stored in it as a string
        }); */
        

    }
    uploadFile()
}

main()


