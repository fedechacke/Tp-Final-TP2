function crearCu(moduloMail, generadorPdf) {

    return {
        
        invocar: async function (mailData, mailAttach, data) {
            const columnas = Object.keys(data[0]);
            
            const template = generadorPdf.crearTemplate('Ejecutivo');
            const content = generadorPdf.crearContent(template, columnas, data);
            const doc = generadorPdf.crearDoc('Mi tabla', 'Yo', 'Tabla de personas', content);
            await generadorPdf.guardarDoc('PdfCU2', './CU/assets', doc); 
            
            moduloMail.enviarMail(mailData, mailAttach);
        }
    }
}

module.exports = { crearCu }
