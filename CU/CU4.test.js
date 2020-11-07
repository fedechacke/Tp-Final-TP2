const { factoryCu4 } = require('../Factories/Zeus/FactoryCu4.js')
const { crearTempo } = require('./../src/DaoTempo.js')

async function main () {
    const cu = factoryCu4.getCu();
    await cu.invocar(crearTempo('diario'));
}
main ();