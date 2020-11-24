
function crearCu(moduloMail, temporizador) {

    return {
        invocar: function (tempData, mailData) {
                const programarEvento = temporizador(tempData.frecuencia);
                programarEvento(tempData.tempRules, function() {
                    moduloMail.enviarMail(mailData)
                });
            
        }
    }
}

module.exports = { crearCu }
