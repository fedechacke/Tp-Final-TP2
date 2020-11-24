
function crearCu(generadorPdf, temporizador, moduloMail) {
    return {
        invocar: async function (tempData, mailInfo, dao) {
            
                const programarEvento = temporizador(tempData.frecuencia);

                const nombreArchivo = 'PdfCU3';
                const rutaArchivo = './CU/assets';
                const mailAttach = {
                    fileName: 'Desempeños',
                    filePath: `${rutaArchivo}/${nombreArchivo}.pdf`
                }
    
                programarEvento(tempData.tempRules, async function () {
                    const data = await dao.getDesempenos();
                    const columnas = Object.keys(data[0]);
                    const template = generadorPdf.crearTemplate('Ejecutivo');
                    const content = generadorPdf.crearContent(template, columnas, data);
                    const doc = generadorPdf.crearDoc('Mi tabla', 'Yo', 'Tabla de personas', content);
                    await generadorPdf.guardarDoc(nombreArchivo, rutaArchivo, doc);
                    moduloMail.enviarMail( mailInfo, mailAttach);
                })
        }
    }
}

module.exports = { crearCu }
