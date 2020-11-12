const { factoryCu3 } = require('../Factories/Zeus/FactoryCu3.js')
const { crearTempo } = require('./../src/DaoTempo.js')

const addreses = ['sabrina-martinez@hotmail.es'];
const scheduleDao = crearTempo('mensual');
const setTemporizador = { 
    diaDelMes: 01,
    hora: 00,
    minuto: 00,
    segundo: 00,
    id: 'id'
}

async function main () {
    const cu = factoryCu3.getCu();
    await cu.invocar(scheduleDao, setTemporizador, addreses,'Test de prueba','Body del mail', 'UnPdf', './CU/assets/PdfCU3.pdf');

}
main ();
