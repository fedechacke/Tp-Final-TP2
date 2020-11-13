const { crearCu } = require('../../CU/ReporteEstadistico.js');
const { pdfFactory } = require('../../Factories/Modulos/FactoryModuloPdfGenerator.js');
const { tempoFactory } = require('../../Factories/Modulos/FactoryModuloSchedule.js');
const { crearDao } = require('../../src/DaoFactory.js');

const pdfGenerator = pdfFactory.getPdfGenerator(); 
const tempo = tempoFactory.getTempo();
const dao = crearDao('campanas');

const cu = crearCu(pdfGenerator, tempo, dao);

const factoryRepEst = {
    getCu: function () {
        return cu;
    }
}

module.exports = { factoryRepEst };