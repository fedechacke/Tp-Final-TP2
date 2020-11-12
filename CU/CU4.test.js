const { factoryCu4 } = require('../Factories/Zeus/FactoryCu4.js')
const { crearTempo } = require('./../src/DaoTempo.js')

const scheduleDao = crearTempo('diario');
const setTemporizador = { 
    hora: 21,
    minuto: 25,
    segundo: 00,
    id: 'id'
}

async function main () {
    const cu = factoryCu4.getCu();
    await cu.invocar(scheduleDao, setTemporizador);
}
main ();