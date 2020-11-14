const { crearCu } = require('../../CU/ResumenDesempeno.js');
const { mailerFactory } = require('../../Factories/Modulos/FactoryModuloMailing.js');
const { pdfFactory } = require('../../Factories/Modulos/FactoryModuloPdfGenerator.js');

const mailer = mailerFactory.getMailer();
const pdfGenerator = pdfFactory.getPdfGenerator();

const cu = crearCu(mailer, pdfGenerator);

const factoryResDesemp = {
    getCu: function () {
        return cu;
    }
}

module.exports = { factoryResDesemp };