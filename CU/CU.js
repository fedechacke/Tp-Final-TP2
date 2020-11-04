const { crearModuloMailing } = require('../modulos/MailingModulo/MailingModulo.js');
const { crearTemporizadorDeEventos } = require('../modulos/ModuloTemporizador/ScheduleModulo.js');

function crearCu() {
    return {
        invocar: function () {
            // aca va toda la logica del CU
            const moduloMail = crearModuloMailing('gmail', 'gestion.remiseria@gmail.com', 'TPgrupal2-');
            const addreses = ['sabrina-martinez@hotmail.es'];
            const callbackMail = moduloMail.enviarMail;

            const moduloSchedule = crearTemporizadorDeEventos();
            moduloSchedule.repetirSemanalmente(03,00,44,00, 'Id', callbackMail(addreses,'Test de prueba','Body del mail'));
        }
    }
}

module.exports = { crearCu }
