
function crearCu(moduloMail, generadorPdf) {

    return {
        
        invocar: async function (mailData, dao) {
                const data = await dao.getDesempenos();

                const columnas = Object.keys(data[0]);

                const nombreArchivo = 'PdfCU2';
                const rutaArchivo = './CU/assets';
                const mailAttach = {
                    fileName: 'Desempeños',
                    filePath: `${rutaArchivo}/${nombreArchivo}.pdf`
                }
                
                const template = generadorPdf.crearTemplate('Ejecutivo');
                const content = generadorPdf.crearContent(template, columnas, data);
                const doc = generadorPdf.crearDoc('Mi tabla', 'Yo', 'Tabla de personas', content);
                await generadorPdf.guardarDoc(nombreArchivo, rutaArchivo, doc); 
                
                moduloMail.enviarMail(mailData, mailAttach);
        }
    }
}

module.exports = { crearCu }
