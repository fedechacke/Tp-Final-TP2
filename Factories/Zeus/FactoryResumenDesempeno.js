const { crearCu } = require('../../CU/ResumenDesempeno.js');
const { mailerFactory } = require('../../Factories/Modulos/FactoryModuloMailing.js');
const { pdfFactory } = require('../../Factories/Modulos/FactoryModuloPdfGenerator.js');
const { crearDao } = require('../../src/DaoFactory');

const mailer = mailerFactory.getMailer();
const pdfGenerator = pdfFactory.getPdfGenerator(); 
const dao = crearDao('desempeno');

const cu = crearCu(mailer, pdfGenerator, dao);

const factoryResDesemp = {
    getCu: function () {
        return cu;
    }
}

module.exports = { factoryResDesemp };