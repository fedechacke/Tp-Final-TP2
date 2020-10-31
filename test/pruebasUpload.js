        const FormData = require('form-data');


        let form = new FormData();

        const stream = fs.createReadStream('Demo.pdf');
        
        form.append('image', stream);
        

        const formHeaders = form.getHeaders();
        cliente.addNewFile(form, {
        headers: {
            ...formHeaders,
        },
        })
        .then(response => response)
        .catch(error => error) 

        ////////////////////////////////////////////////////////////////////////////////////////////////////////
        const http = require('http');
        
        http.request('http://nodejs.org/images/logo.png', function(response) {
            form.append('file', fs.createReadStream('Demo.pdf'));
        });

        form.submit(`http://localhost:${server.address().port}/remiseria/upload`, function(err, res) {
            // res – response object (http.IncomingMessage)  //
            res.resume();
        });

       let formData = {
            name: 'file1',
            file: {
                value:  fs.createReadStream('Demo.pdf'),
                options: {
                    filename: 'nachito.pdf',
                    contentType: 'multipart/form-data'
                }
            }
        };
        
    console.log('FD: ',formData)
       request.post({url: `http://localhost:${server.address().port}/remiseria/upload`, formData: formData}, 
        function cb(err, httpResponse, body) {
            if (err) {
            return console.error('upload failed:', err);
            }
            console.log('Upload successful!  Server responded with:', body);
        }
        ); 

        cliente.addNewFile(formData) 