const { crearModuloMailing } = require('../modulos/MailingModulo/MailingModulo.js');
const { crearTemporizadorDeEventos } = require('../modulos/ModuloTemporizador/ScheduleModulo.js');
const { crearCu } = require('./CU.js');

const moduloMail = crearModuloMailing('gmail', 'gestion.remiseria@gmail.com', 'TPgrupal2-');
const moduloSchedule = crearTemporizadorDeEventos();

function main () {
    const cu = crearCu(moduloMail, moduloSchedule);
    cu.invocar();

}
main ();
