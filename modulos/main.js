const { crearModuloMailing } = require('./MailingModulo.js')
const { crearModuloPdf } = require('./PdfGeneratorModule');
const { crearTemporizadorDeEventos } = require('./ScheduleModulo')

// const modulo = crearModuloMailing('gmail', 'gestion.remiseria@gmail.com', 'TPgrupal2-');

// const addreses = ['tomas.lozano92@gmail.com', 'sabrina-martinez@hotmail.es'];

// modulo.enviarMail(addreses,'Test de prueba','Body del mail');

// const pdf = crearModuloPdf();
// pdf.crearTemplate('Helvetica', 35, false, 'A4', 'portrait');
// pdf.crearDoc('Mi-primer-pdf', 'Yo, obvio', 'El mejor asunto que se te pueda ocurrir, papu', 'Este es mi primer archivo PDF, por lo que estoy demasiado emocionado. Si esto llega a funcionar bien nos vamos de joda!');
// pdf.guardarDoc('Demo', '.');

// const temporizador = crearTemporizadorDeEventos();
/* temporizador.repetirDiariamente(18,49,0, function() {
    console.log('se esta repitiendo Tomas')
}) */

/* temporizador.repetirMensualmente(24, 18, 53, 0, function() {
    console.log('se esta repitiendo Tomas')
}) */

/* temporizador.repetirSemanalmente(6,18,56,0,function() {
    console.log('se esta repitiendo Tomas')
}) */