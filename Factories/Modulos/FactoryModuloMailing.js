const { crearModuloMailing } = require ('../modulos/MailingModulo/MailingModulo.js');

/*const config = require('config');
const credentials = {
    config.user, config.pass
}*/
const mailer = crearModuloMailing('gmail', 'gestion.remiseria@gmail.com', 'TPgrupal2-');

const mailerFactory = {
    getMailer : function () {
        return mailer
    }
};

module.exports = { mailerFactory }