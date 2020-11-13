const { factoryResDesemp } = require('../Factories/Zeus/FactoryResumenDesempeno.js')

const direcciones = ['sabrina-martinez@hotmail.es'];

async function main () {
    
    const cu = factoryResDesemp.getCu();
    await cu.invocar(direcciones, 'Desempeño', 'Datos de empleados adjuntos', 'UnPdf', './CU/assets/PdfCU2.pdf');

}

main ();