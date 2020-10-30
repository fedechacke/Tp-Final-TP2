const nodemailer = require('nodemailer')

function crearModuloMailing(mailService, username, password) {
    
    const validateMailFormat = function (mailData) {
        const emailRejex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        return (emailRejex.test(mailData))
    }

    let transporter
    if (validateMailFormat(username)){
        transporter = nodemailer.createTransport({
            service: mailService,
            auth: {
                user: username,
                pass: password
            }
        })
    } else {
        throw new Error('Usuario invalido');
    }
    
    return {
        /** 
        *@param {string} to: the recipients of your mail
        *@param {string} subject: subject of your mail
        *@param {string} mailBody: body/content
        *@param {string} fileName: name of the file
        *@param {string} filePath: path to the atttached document
        */ 
        enviarMail: async function (to, subject, mailBody, fileName, filePath) {
           
           const mailData = {
               from: this.username,
               to: to,
               subject: subject,
               text: mailBody,
               dsn: {
                id: 'Mensajes Rechazados',
                return: 'headers',
                notify: ['failure', 'delay'],
                recipient: this.username
               },
               attachments: [{
                   filename: fileName,
                   path: filePath,
                   contentType: "application/pdf"
               }]
            } 
            
            await transporter.sendMail(mailData, (err, info) => {
                if (err){
                    console.log(`Error: ${err.message}`);
                } else {
                    if (info.accepted){
                        console.log(`Mail enviado con exito a: ${info.accepted}`)
                    }
                    /*if (info.rejected){
                        console.log(`Mail rechazados: ${info.rejected}`)
                    }
                    if (info.pending){
                        console.log(`Mail pendientes: ${info.pending}`)
                    }*/
                }
            })
        }
    }
}

module.exports = { crearModuloMailing }


