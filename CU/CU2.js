function crearCu(moduloMail, generadorPdf) {
    return {
        invocar: function () {
            // aca va toda la logica del CU
            
            const template = generadorPdf.crearTemplate('Helvetica', 15, false, 'A4', 'landscape');
            const content = generadorPdf.crearContent(template, columnas, data);
            const doc =generadorPdf.crearDoc('Mi tabla', 'Yo', 'Tabla de personas', content);
            generadorPdf.guardarDoc('Esta', './', doc); 
            
            const addreses = ['sabrina-martinez@hotmail.es'];
            moduloMail.enviarMail(addreses,'Test de prueba','Body del mail', 'UnPdf', 'Esta.pdf');
        }
    }
}

module.exports = { crearCu }
