function crearCu(generadorPdf, moduloSchedule) {
    return {
        invocar: function async () {
            // aca va toda la logica del CU
            
            const template = generadorPdf.crearTemplate('Helvetica', 15, false, 'A4', 'landscape');
            const content = generadorPdf.crearContent(template, columnas, data);
            const callbackCrear = generadorPdf.crearDoc;
            const callbackGuardar = generadorPdf.guardarDoc;
            await moduloSchedule.repetirSemanalmente(03,00,44,00, 'Id', callbackCrear('Mi tabla', 'Yo', 'Tabla de personas', content));
            moduloSchedule.repetirSemanalmente(03,00,48,00, 'Id', callbackGuardar('Esta', './', doc));
        }
    }
}

module.exports = { crearCu }