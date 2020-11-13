const { factoryMailDesemp } = require('../Factories/Zeus/FactoryMailDesempeno.js')

const direcciones = ['sabrina-martinez@hotmail.es'];
const frecuencia = 'mensual';
const tempRules = { 
    diaDelMes: 12,
    hora: 21,
    minuto: 39,
    segundo: 00,
    id: 'id'
};

async function main () {

    const cu = factoryMailDesemp.getCu();
    await cu.invocar(frecuencia, tempRules, 'Test de prueba', 'Body del mail', direcciones, 'UnPdf', './CU/assets/PdfCU3.pdf');

}

main ();
