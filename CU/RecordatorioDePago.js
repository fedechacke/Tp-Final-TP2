const { crearErrorDeUsuario, crearErrorDelServidor } = require('../src/DaoErrores.js')


function crearCu(moduloMail, temporizador) {

    return {
        invocar: function (frecuencia, tempRules, mailData) {

            const programarEvento = temporizador(frecuencia);

            programarEvento(tempRules, function() {
                moduloMail.enviarMail(mailData)
            });
            
        }
    }
}

module.exports = { crearCu }
