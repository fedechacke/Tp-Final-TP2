const { crearCu } = require('../../CU/CU2.js');
const { mailerFactory } = require('../../Factories/Modulos/FactoryModuloMailing.js');
const { pdfFactory } = require('../../Factories/Modulos/FactoryModuloPdfGenerator.js');
const { crearDao } = require('../../src/DaoFactory');

const mailer = mailerFactory.getMailer();
const pdfGenerator = pdfFactory.getPdfGenerator(); 
const dao = crearDao('desempeno');

const cu = crearCu(mailer, pdfGenerator, dao);

const factoryCu2 = {
    getCu: function () {
        return cu;
    }
}

module.exports = { factoryCu2 };