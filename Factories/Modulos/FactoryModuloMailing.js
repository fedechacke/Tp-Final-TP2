const { crearModuloMailing } = require ('../../modulos/MailingModulo/MailingModulo.js');

const mailer = crearModuloMailing('gmail', 'gestion.remiseria@gmail.com', 'TPgrupal2-');

const mailerFactory = {
    getMailer : function () {
        return mailer
    }
};

module.exports = { mailerFactory }