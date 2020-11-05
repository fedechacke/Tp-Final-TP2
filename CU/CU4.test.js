const { crearTemporizadorDeEventos } = require('../modulos/ModuloTemporizador/ScheduleModulo.js');
const { crearModuloPdf } = require('../modulos/PdfGeneratorModule/PdfGeneratorModule.js');
const { crearCu } = require('./CU4.js');

const moduloSchedule = crearTemporizadorDeEventos();
const generadorPdf = crearModuloPdf();

function main () {
    const cu = crearCu(generadorPdf, moduloSchedule);
    cu.invocar();

}
main ();