const nodemailer = require('nodemailer')
const { crearErrorDelServidor, crearErrorDeUsuario } = require ('../../src/DaoErrores.js')

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
        throw crearErrorDeUsuario("Usuario invalido");
    }

    createMailData = function (to, subject, mailBody, fileName, filePath) {
        if (to){
            let mailData = {
                from: this.username,
                to: to,
                subject: subject,
                text: mailBody
            }
    
            if (filePath != undefined && fileName != undefined){
                let ext = filePath.substr(filePath.lastIndexOf('.'));
                mailData.attachments = [{
                    filename: fileName + ext,
                    path: filePath,
                    contentType: `application/${ext}`
                }]
            }
        } else {
            throw crearErrorDeUsuario("Ingrese una direccion");
        }
        return mailData; 
    }
    
    return {
        /** 
        *@param {string} to: the recipients of your mail
        *@param {string} subject: subject of your mail
        *@param {string} mailBody: body/content
        *@param {string?} fileName: name of the file
        *@param {string?} filePath: path to the atttached document
        */ 
        enviarMail: async function (to, subject, mailBody, fileName, filePath) {
            try {
                const mailData = createMailData(to, subject, mailBody, fileName, filePath);
                
                await transporter.sendMail(mailData, (err, info) => {
                    if (err){
                        throw new Error(`Error: ${err.message}`);
                        //console.log(`Error: ${err.message}`);
                    } else {
                        if (info.accepted){
                            //console.log(`Mail enviado con exito a: ${info.accepted}`)
                        }
                        if (info.rejected){
                            //enviar mail al emisor
                            //console.log(`Mail rechazados: ${info.rejected}`)
                        }
                        if (info.pending){
                            //console.log(`Mail pendientes: ${info.pending}`)
                        }
                    }
                })
            } catch (error) {
                throw crearErrorDelServidor(error.message);
            }
        }
    }
}

module.exports = { crearModuloMailing }


