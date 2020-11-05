function crearCu(moduloMail, generadorPdf) {
    return {
        invocar: function (data) {
            // aca va toda la logica del CU
            
            const columnas = Object.keys(data[0]);
            
            const template = generadorPdf.crearTemplate('Helvetica', 15, false, 'A4', 'landscape');
            const content = generadorPdf.crearContent(template, columnas, data);
            const doc = generadorPdf.crearDoc('Mi tabla', 'Yo', 'Tabla de personas', content);
            generadorPdf.guardarDoc('PdfCU2', './CU/assets', doc); 
            
            const addreses = ['sabrina-martinez@hotmail.es'];
            moduloMail.enviarMail(addreses,'Desempeño','Datos de empleados adjuntos', 'UnPdf', './CU/assets/PdfCU2.pdf');
        }
    }
}

module.exports = { crearCu }
