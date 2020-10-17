const { completeMailData, enviarMail, setEmailService } = require('./MailingModulo.js')
const assert = require('assert')

/*describe('Prueba de Modulo de mail', () => {
    describe('Se intenta mandar un mail de prueba', () => {
        it ('deberia llegar un mail', () => {*/
            completeMailData('gestion.remiseria@gmail.com','tomas.lozano92@gmail.com','Test de prueba','Body del mail');
            enviarMail();
        /*})
    })
} )*/