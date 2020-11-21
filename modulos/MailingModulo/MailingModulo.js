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

    createMailData = function (mailInfo, mailAttach) {
        let mailData
        if (mailInfo.to !== null){
            mailData = {
                from: this.username,
                to: mailInfo.to,
                subject: mailInfo.subject,
                text: mailInfo.mailBody
            }
    
            if (mailAttach != undefined){
                let ext = mailAttach.filePath.substr(mailAttach.filePath.lastIndexOf('.'));
                mailData.attachments = [{
                    filename: mailAttach.fileName + ext,
                    path: mailAttach.filePath,
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
        enviarMail: async function (mailInfo, mailAttach) {
            try {
                const mailData = createMailData(mailInfo, mailAttach);
                await transporter.sendMail(mailData, (err, info) => {
                    if (err){
                        throw new Error(`Error: ${err.message}`);
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


