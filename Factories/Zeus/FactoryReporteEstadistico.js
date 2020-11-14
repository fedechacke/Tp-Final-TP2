const { crearCu } = require('../../CU/ReporteEstadistico.js');
const { pdfFactory } = require('../../Factories/Modulos/FactoryModuloPdfGenerator.js');
const { tempoFactory } = require('../../Factories/Modulos/FactoryModuloSchedule.js');

const pdfGenerator = pdfFactory.getPdfGenerator(); 
const tempo = tempoFactory.getTempo();

const cu = crearCu(pdfGenerator, tempo);

const factoryRepEst = {
    getCu: function () {
        return cu;
    }
}

module.exports = { factoryRepEst };