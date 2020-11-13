const { crearCu } = require('../../CU/RecordatorioDePago.js');
const { mailerFactory } = require('../../Factories/Modulos/FactoryModuloMailing.js');
const { tempoFactory } = require('../../Factories/Modulos/FactoryModuloSchedule.js');

const mailer = mailerFactory.getMailer();
const tempo = tempoFactory.getTempo(); 

const cu = crearCu(mailer, tempo);

const factoryRecPago = {
    getCu: function () {
        return cu;
    }
}

module.exports = { factoryRecPago };