function crearCu(moduloMail) {
    return {
        invocar: function (scheduleDao, subject, body, addreses) {
            // aca va toda la logica del CU

            // scheduleDao(04,00,00,00, 'Id', function () {
                scheduleDao(12,19,50,00, 'id', function(){
                    moduloMail.enviarMail(addreses, subject, body)
            });
        }
    }
}

module.exports = { crearCu }
