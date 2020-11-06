function crearCu(generadorPdf, moduloSchedule, dao) {
    return {
        invocar: async function (tempo) {
            // aca va toda la logica del CU

            const data = await dao.getCampanas()

            const columnas = Object.keys(data[0]);

            tempo(21,25,00, 'Id', function () {
                const template = generadorPdf.crearTemplate('Casual');
                const content = generadorPdf.crearContent(template, columnas, data);
                const doc = generadorPdf.crearDoc('Mi tabla', 'Yo', 'Tabla de personas', content);
                generadorPdf.guardarDoc('PdfCU4', './CU/assets', doc);
            });
        }
    }
}

module.exports = { crearCu }
