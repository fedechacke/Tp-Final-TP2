function crearCu(moduloMail, generadorPdf, dao) {
    return {
        invocar: async function (addreses,subject, body, fileName, filePath) {
            // aca va toda la logica del CU

            const data = await dao.getDesempenos();
            
            const columnas = Object.keys(data[0]);
            
            const template = generadorPdf.crearTemplate('Ejecutivo');
            const content = generadorPdf.crearContent(template, columnas, data);
            const doc = generadorPdf.crearDoc('Mi tabla', 'Yo', 'Tabla de personas', content);
            await generadorPdf.guardarDoc('PdfCU2', './CU/assets', doc); 
            
            moduloMail.enviarMail(addreses,subject, body, fileName, filePath);
        }
    }
}

module.exports = { crearCu }
