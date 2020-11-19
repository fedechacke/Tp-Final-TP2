const { crearErrorDeUsuario, crearErrorDelServidor } = require('../src/DaoErrores.js')

function crearCu(moduloMail, generadorPdf) {

    return {
        
        invocar: async function (direcciones, asunto, cuerpo, nombreArchivo, rutaArchivo, data) {
            try {
                const columnas = Object.keys(data[0]);
                
                const template = generadorPdf.crearTemplate('Ejecutivo');
                const content = generadorPdf.crearContent(template, columnas, data);
                const doc = generadorPdf.crearDoc('Mi tabla', 'Yo', 'Tabla de personas', content);
                await generadorPdf.guardarDoc('PdfCU2', './CU/assets', doc); 
                
                moduloMail.enviarMail(direcciones, asunto, cuerpo, nombreArchivo, rutaArchivo);
            } catch (error) {
                if (error.type === 'USER_ERROR'){
                    throw crearErrorDeUsuario(error.message);
                } else {
                    throw crearErrorDelServidor(error.message);
                }
            }
        }
    }
}

module.exports = { crearCu }
