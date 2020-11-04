const { crearModuloMailing } = require('../modulos/MailingModulo/MailingModulo.js');
const { crearModuloPdf } = require('../modulos/PdfGeneratorModule/PdfGeneratorModule.js');
const { crearCu } = require('./CU2.js');

const moduloMail = crearModuloMailing('gmail', 'gestion.remiseria@gmail.com', 'TPgrupal2-');
const generadorPdf = crearModuloPdf();

function main () {
    const cu = crearCu(moduloMail, generadorPdf);
    cu.invocar();

}
main ();