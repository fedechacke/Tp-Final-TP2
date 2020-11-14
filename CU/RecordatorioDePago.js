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
                throw new Error(error.message);
            }
        }
    }
}

module.exports = { crearCu }
