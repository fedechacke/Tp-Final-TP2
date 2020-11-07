const { factoryCu3 } = require('../Factories/Zeus/FactoryCu3.js')
const { crearTempo } = require('./../src/DaoTempo.js')

const addreses = ['sabrina-martinez@hotmail.es'];
const tempo = crearTempo('mensual');

async function main () {
    const cu = factoryCu3.getCu();
    await cu.invocar(tempo, addreses,'Test de prueba','Body del mail', 'UnPdf', './CU/assets/PdfCU3.pdf');

}
main ();