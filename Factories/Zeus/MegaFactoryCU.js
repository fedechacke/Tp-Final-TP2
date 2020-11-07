const { factoryCu1 } = require('../Zeus/FactoryCu.js');
const { factoryCu2 } = require('../Zeus/FactoryCu2.js');
const { factoryCu3 } = require('../Zeus/FactoryCu3.js');
const { factoryCu4 } = require('../Zeus/FactoryCu4.js');

const crearFactoryCu = (mensaje) => {
    if (mensaje === '1') return factoryCu1;
    if (mensaje === '2') return factoryCu2;
    if (mensaje === '3') return factoryCu3;
    if (mensaje === '4') return factoryCu4;
}

module.exports = { crearFactoryCu };