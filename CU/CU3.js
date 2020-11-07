function crearCu(generadorPdf, moduloMail, dao) {
    return {
        invocar: async function (tempo, addreses, subject, body, fileName, filepath) {
            // aca va toda la logica del CU
            const data = await dao.getDesempenos();
            
            const columnas = Object.keys(data[0]);
            tempo(01,00,00,00, 'Id', async function () {
                const template = generadorPdf.crearTemplate('Ejecutivo');
                const content = generadorPdf.crearContent(template, columnas, data);
                const doc = generadorPdf.crearDoc('Mi tabla', 'Yo', 'Tabla de personas', content);
                await generadorPdf.guardarDoc('PdfCU3', './CU/assets', doc);
                moduloMail.enviarMail(addreses, subject, body, fileName, filepath);
            });
        }
    }
}

module.exports = { crearCu }
