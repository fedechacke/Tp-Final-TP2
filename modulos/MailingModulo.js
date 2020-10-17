const nodemailer = require('nodemailer')


    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'gestion.remiseria@gmail.com',
            pass: 'TPgrupal2-'
        },
    })

    function setEmailService (service, user, pass){
        transporter.service = service
        transporter.auth.user = user
        transporter.auth.pass = pass
    }    

    const mailData = {
        from: 'from',
        to: 'to',
        subject: 'emptySubject',
        text: 'text'
    } 
    
    /** 
    *@param {string} from  own Mail address
    *@param {string} to: the receptor of your mail
    *@param {string} subject: title of your mail
    *@param {string} text: body/content
    */
    function completeMailData (from, to, subject, text) {
        mailData.from=from
        mailData.to=to
        mailData.subject=subject
        mailData.text=text
    }

    function validateMailContent(){
        const emailRejex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        return (emailRejex.test(mailData.from) && emailRejex.test(mailData.to))
    }
    
    function enviarMail () {
        if (validateMailContent()){
            transporter.sendMail(mailData);
        } else {
            throw new Error()
        }

    }

module.exports = { completeMailData, enviarMail, setEmailService }


