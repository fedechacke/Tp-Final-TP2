const { crearModuloPdf } = require ('../../modulos/PdfGeneratorModule/PdfGeneratorModule.js');

/*const config = require('config');
const credentials = {
    config.user, config.pass
}*/
const pdfGenerator = crearModuloPdf();

const pdfFactory = {
    getPdfGenerator : function () {
        return pdfGenerator
    }
};

module.exports = { pdfFactory }