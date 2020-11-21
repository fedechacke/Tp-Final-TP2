const { crearErrorDeUsuario, crearErrorDelServidor } = require('../src/DaoErrores.js')

function crearCu(generadorPdf, temporizador, moduloMail) {
    return {
        invocar: async function (frecuencia, tempRules, mailInfo, mailAttach, data) {
            
            const columnas = Object.keys(data[0]);

            const programarEvento = temporizador(frecuencia);
            console.log(mailInfo)
            console.log(mailAttach)
            programarEvento(tempRules, async function () {
                const template = generadorPdf.crearTemplate('Ejecutivo');
                const content = generadorPdf.crearContent(template, columnas, data);
                const doc = generadorPdf.crearDoc('Mi tabla', 'Yo', 'Tabla de personas', content);
                await generadorPdf.guardarDoc('PdfCU3', './CU/assets', doc);
                await moduloMail.enviarMail(mailInfo, mailAttach);
            })
        }
    }
}

module.exports = { crearCu }
