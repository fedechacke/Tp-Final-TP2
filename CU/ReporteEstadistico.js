function crearCu(generadorPdf, temporizador) {

    return {

        invocar: async function (frecuencia, tempRules, data) {   

            const columnas = Object.keys(data[0]);

            const programarEvento = temporizador(frecuencia);

            programarEvento(tempRules, async function () {
                const template = generadorPdf.crearTemplate('Casual');
                const content = generadorPdf.crearContent(template, columnas, data);
                const doc = generadorPdf.crearDoc('Mi tabla', 'Yo', 'Tabla de personas', content);
                await generadorPdf.guardarDoc('PdfCU4', './CU/assets', doc);
            });
        }
    }
}

module.exports = { crearCu }
