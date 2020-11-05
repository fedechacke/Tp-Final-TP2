const { crearTemporizadorDeEventos } = require('../modulos/ModuloTemporizador/ScheduleModulo.js');
const { crearModuloPdf } = require('../modulos/PdfGeneratorModule/PdfGeneratorModule.js');
const { crearModuloMailing } = require('../modulos/MailingModulo/MailingModulo.js');
const { crearCu } = require('./CU3.js');

const moduloSchedule = crearTemporizadorDeEventos();
const generadorPdf = crearModuloPdf();
const moduloMail = crearModuloMailing('gmail', 'gestion.remiseria@gmail.com', 'TPgrupal2-');

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

function main () {
    const cu = crearCu(generadorPdf, moduloSchedule, moduloMail);
    cu.invocar(data);

}
main ();