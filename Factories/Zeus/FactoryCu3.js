const { crearCu } = require('../../CU/CU3.js');
const { mailerFactory } = require('../../Factories/Modulos/FactoryModuloMailing.js');
const { pdfFactory } = require('../../Factories/Modulos/FactoryModuloPdfGenerator.js');
const { tempoFactory } = require('../../Factories/Modulos/FactoryModuloSchedule.js');
const { crearDao } = require('../../src/DaoFactory');

const mailer = mailerFactory.getMailer();
const pdfGenerator = pdfFactory.getPdfGenerator(); 
const tempo = tempoFactory.getTempo();
const dao = crearDao('desempeno');

const cu = crearCu(pdfGenerator, tempo, mailer, dao);

const factoryCu3 = {
    getCu: function () {
        return cu;
    }
}

module.exports = { factoryCu3 };