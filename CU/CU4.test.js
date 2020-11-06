const { crearTemporizadorDeEventos } = require('../modulos/ModuloTemporizador/ScheduleModulo.js');
const { crearModuloPdf } = require('../modulos/PdfGeneratorModule/PdfGeneratorModule.js');
const { crearCu } = require('./CU4.js');
const { crearDao } = require('./../src/DaoFactory.js')
const { crearTempo } = require('./../src/DaoTempo.js')

const moduloSchedule = crearTemporizadorDeEventos();
const generadorPdf = crearModuloPdf();

async function main () {
    const cu = crearCu(generadorPdf, moduloSchedule, crearDao('campanas'));
    await cu.invocar(crearTempo('diario'));
}
main ();