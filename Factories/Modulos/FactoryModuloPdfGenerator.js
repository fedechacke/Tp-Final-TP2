const { crearModuloPdf } = require ('../../modulos/PdfGeneratorModule/PdfGeneratorModule.js');

const pdfGenerator = crearModuloPdf();

const pdfFactory = {
    getPdfGenerator : function () {
        return pdfGenerator
    }
};

module.exports = { pdfFactory }