function crearCu(moduloMail, moduloSchedule) {
    return {
        invocar: function (dao) {
            // aca va toda la logica del CU
            const addreses = ['sabrina-martinez@hotmail.es'];

            // dao(04,00,00,00, 'Id', function () {
                dao(05,21,39,00, 'id', function(){
                    moduloMail.enviarMail(addreses,'Aviso de Pagos','Pagarle a los empleados')
            });
        }
    }
}

module.exports = { crearCu }
