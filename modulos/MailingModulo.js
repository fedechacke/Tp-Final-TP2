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
        */ 
        enviarMail: async function (to, subject, mailBody) {
           
           const mailData = {
               from: this.username,
               to: to,
               subject: subject,
               text: mailBody
            } 
            
            await transporter.sendMail(mailData, (err, info) => {
                if (err){
                    console.log(`Error: ${err.message}`);
                } else {
                    console.log(`Mail enviado con exito a: ${info.accepted}`)
                }
            })
        }
    }
}

module.exports = { crearModuloMailing }


