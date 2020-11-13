function crearCu(moduloMail, temporizador) {

    return {
        invocar: function (frecuencia, tempRules, asunto, cuerpo, direcciones) {

            const programarEvento = temporizador(frecuencia);

            programarEvento(tempRules, function() {
                moduloMail.enviarMail(direcciones, asunto, cuerpo)
            });
        }
    }
}

module.exports = { crearCu }
