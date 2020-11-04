function crearCu(moduloMail, moduloSchedule) {
    return {
        invocar: function () {
            // aca va toda la logica del CU
            const addreses = ['sabrina-martinez@hotmail.es'];
            const callbackMail = moduloMail.enviarMail;

            moduloSchedule.repetirSemanalmente(03,00,44,00, 'Id', callbackMail(addreses,'Test de prueba','Body del mail'));
        }
    }
}

module.exports = { crearCu }
