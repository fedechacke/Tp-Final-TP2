const { crearErrorDeUsuario, crearErrorDelServidor } = require('../src/DaoErrores.js')


function crearCu(moduloMail, temporizador) {

    return {
        invocar: function (frecuencia, tempRules, asunto, cuerpo, direcciones) {

            try{
                const programarEvento = temporizador(frecuencia);
    
                programarEvento(tempRules, function() {
                    moduloMail.enviarMail(direcciones, asunto, cuerpo)
                });
            }
            catch (error) {
                if (error.type === 'USER_ERROR'){
                    throw crearErrorDeUsuario(error.message);
                } else {
                    throw crearErrorDelServidor(error.message);
                }
            }
        }
    }
}

module.exports = { crearCu }
