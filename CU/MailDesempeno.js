function crearCu(generadorPdf, temporizador, moduloMail, dao) {
    return {
        invocar: async function (frecuencia, tempRules, asunto, cuerpo, direcciones, nombreArchivo, rutaArchivo) {
            
            const data = await dao.getDesempenos();
            
            const columnas = Object.keys(data[0]);

            const programarEvento = temporizador(frecuencia);

            programarEvento(tempRules, async function () {
                const template = generadorPdf.crearTemplate('Ejecutivo');
                const content = generadorPdf.crearContent(template, columnas, data);
                const doc = generadorPdf.crearDoc('Mi tabla', 'Yo', 'Tabla de personas', content);
                await generadorPdf.guardarDoc('PdfCU3', './CU/assets', doc);
                moduloMail.enviarMail(direcciones, asunto, cuerpo, nombreArchivo, rutaArchivo);
            })
        }
    }
}

module.exports = { crearCu }
