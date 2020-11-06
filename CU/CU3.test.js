const { crearTemporizadorDeEventos } = require('../modulos/ModuloTemporizador/ScheduleModulo.js');
const { crearModuloPdf } = require('../modulos/PdfGeneratorModule/PdfGeneratorModule.js');
const { crearModuloMailing } = require('../modulos/MailingModulo/MailingModulo.js');
const { crearCu } = require('./CU3.js');
const { crearDao } = require('./../src/DaoFactory.js')
const { crearTempo } = require('./../src/DaoTempo.js')

const moduloSchedule = crearTemporizadorDeEventos();
const generadorPdf = crearModuloPdf();
const moduloMail = crearModuloMailing('gmail', 'gestion.remiseria@gmail.com', 'TPgrupal2-');
const tempo = crearTempo('mensual');


async function main () {
    const cu = crearCu(generadorPdf, moduloSchedule, moduloMail, crearDao('desempenos'));
    await cu.invocar(tempo);

}
main ();