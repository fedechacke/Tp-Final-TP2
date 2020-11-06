function crearCu(moduloMail, generadorPdf, dao) {
    return {
        invocar: async function () {
            // aca va toda la logica del CU

            const data = await dao.getDesempenos();
            
            const columnas = Object.keys(data[0]);
            
            const template = generadorPdf.crearTemplate('Ejecutivo');
            const content = generadorPdf.crearContent(template, columnas, data);
            const doc = generadorPdf.crearDoc('Mi tabla', 'Yo', 'Tabla de personas', content);
            generadorPdf.guardarDoc('PdfCU2', './CU/assets', doc); 
            
            const addreses = ['sabrina-martinez@hotmail.es'];
            moduloMail.enviarMail(addreses,'Desempeño','Datos de empleados adjuntos', 'UnPdf', './CU/assets/PdfCU2.pdf');
        }
    }
}

module.exports = { crearCu }
