const { factoryResDesemp } = require('../Factories/Zeus/FactoryResumenDesempeno.js')

const direcciones = ['sabrina-martinez@hotmail.es'];

const mailData = {
    to: direcciones,
    subject: 'Desempeño',
    mailBody: 'Datos de empleados adjuntos'
}
const mailAttach = {
    fileName: 'UnPdf',
    filePath: './CU/assets/PdfCU2.pdf'
}

async function main () {
    
    const cu = factoryResDesemp.getCu();
    await cu.invocar(mailData, mailAttach);

}

main ();