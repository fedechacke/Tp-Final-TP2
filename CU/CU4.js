function crearCu(generadorPdf, moduloSchedule) {
    return {
        invocar: function (data) {
            // aca va toda la logica del CU

            const columnas = Object.keys(data[0]);
            
            moduloSchedule.repetirDiariamente(19,00,00, 'Id', function () {
                const template = generadorPdf.crearTemplate('Helvetica', 15, false, 'A4', 'landscape');
                const content = generadorPdf.crearContent(template, columnas, data);
                const doc = generadorPdf.crearDoc('Mi tabla', 'Yo', 'Tabla de personas', content);
                generadorPdf.guardarDoc('PdfCU4', './CU/assets', doc);
            });
        }
    }
}

module.exports = { crearCu }
