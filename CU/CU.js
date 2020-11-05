function crearCu(moduloMail, moduloSchedule) {
    return {
        invocar: function () {
            // aca va toda la logica del CU
            const addreses = ['sabrina-martinez@hotmail.es'];

            moduloSchedule.repetirMensualmente(04,00,00,00, 'Id', function () {
                moduloMail.enviarMail(addreses,'Aviso de Pagos','Pagarle a los empleados')
            });
        }
    }
}

module.exports = { crearCu }
