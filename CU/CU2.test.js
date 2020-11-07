const { factoryCu2 } = require('../Factories/Zeus/FactoryCu2.js')

const addreses = ['sabrina-martinez@hotmail.es'];

async function main () {
    const cu = factoryCu2.getCu();
    await cu.invocar(addreses,'Desempeño','Datos de empleados adjuntos', 'UnPdf', './CU/assets/PdfCU2.pdf');

}
main ();