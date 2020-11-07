function crearCu(moduloMail, moduloSchedule) {
    return {
        invocar: function (dao, subject, body, addreses) {
            // aca va toda la logica del CU

            // dao(04,00,00,00, 'Id', function () {
                dao(05,21,39,00, 'id', function(){
                    moduloMail.enviarMail(addreses, subject, body)
            });
        }
    }
}

module.exports = { crearCu }
