function crearCu(moduloMail) {
    return {
        invocar: function (scheduleDao, setTemporizador, subject, body, addreses) {
            // aca va toda la logica del CU

            // scheduleDao(04,00,00,00, 'Id', function () {
                scheduleDao(setTemporizador, function(){
                    moduloMail.enviarMail(addreses, subject, body)
            });
        }
    }
}

module.exports = { crearCu }
