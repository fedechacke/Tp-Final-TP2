const { crearModuloMailing } = require('./MailingModulo.js')

const modulo = crearModuloMailing('gmail', 'gestion.remiseria@gmail.com', 'TPgrupal2-');

const addreses = ['tomas.lozano92@gmail.com', 'sabrina-martinez@hotmail.es'];

modulo.enviarMail(addreses,'Test de prueba','Body del mail');
