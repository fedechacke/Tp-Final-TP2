const { crearModuloMailing } = require('../modulos/MailingModulo/MailingModulo.js');
const { crearModuloPdf } = require('../modulos/PdfGeneratorModule/PdfGeneratorModule.js');
const { crearCu } = require('./CU2.js');

const data = [
    {
        Nombre: 'Sami',
        Apellido: 'Martinez',
        Edad: 28,
        Unidad_de_trabajo: 'ACC123',
        Horas_trabajadas: '120',
        Recaudacion: '$17500'
    },
    {
        Nombre: 'Tomi',
        Apellido: 'Lozano',
        Edad: 27,
        Unidad_de_trabajo: 'ADQ567',
        Horas_trabajadas: '150',
        Recaudacion: '$20000'
    }]

const moduloMail = crearModuloMailing('gmail', 'gestion.remiseria@gmail.com', 'TPgrupal2-');
const generadorPdf = crearModuloPdf();

function main () {
    const cu = crearCu(moduloMail, generadorPdf);
    cu.invocar(data);

}
main ();