function crearCu(generadorPdf, moduloSchedule, moduloMail, dao) {
    return {
        invocar: async function (tempo) {
            // aca va toda la logica del CU
            const data = await dao.getDesempenos();
            
            const columnas = Object.keys(data[0]);
            
            tempo(01,00,00,00, 'Id', function () {
                const template = generadorPdf.crearTemplate('Ejecutivo');
                const content = generadorPdf.crearContent(template, columnas, data);
                const doc = generadorPdf.crearDoc('Mi tabla', 'Yo', 'Tabla de personas', content);
                generadorPdf.guardarDoc('PdfCU3', './CU/assets', doc);
                const addreses = ['sabrina-martinez@hotmail.es'];
                moduloMail.enviarMail(addreses,'Test de prueba','Body del mail', 'UnPdf', './CU/assets/PdfCU3.pdf');
            });
        }
    }
}

module.exports = { crearCu }
