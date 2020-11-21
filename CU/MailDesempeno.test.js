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
const mailData = {
    to: direcciones,
    subject: 'Test de prueba',
    mailBody: 'Body del mail'
}
const mailAttach = {
    fileName: 'UnPdf',
    filePath: './CU/assets/PdfCU3.pdf'
}

async function main () {

    const cu = factoryMailDesemp.getCu();
    await cu.invocar(frecuencia, tempRules, mailData, mailAttach);

}

main ();
