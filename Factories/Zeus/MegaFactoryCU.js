const { factoryRecPago } = require('../Zeus/FactoryRecordatorioDePago.js');
const { factoryResDesemp } = require('../Zeus/FactoryResumenDesempeno.js');
const { factoryMailDesemp } = require('../Zeus/FactoryMailDesempeno.js');
const { factoryRepEst } = require('../Zeus/FactoryReporteEstadistico.js');

const crearFactoryCu = (mensaje) => {
    if (mensaje === '1') return factoryRecPago;
    if (mensaje === '2') return factoryResDesemp;
    if (mensaje === '3') return factoryMailDesemp;
    if (mensaje === '4') return factoryRepEst;
}

module.exports = { crearFactoryCu };