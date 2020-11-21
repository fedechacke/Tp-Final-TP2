const { factoryRecPago } = require('../Factories/Zeus/FactoryRecordatorioDePago.js');

const direcciones = ['sabrina-martinez@hotmail.es'];

const tempRules = { 
    diaDelMes: 12,
    hora: 21,
    minuto: 13,
    segundo: 00,
    id: 'id'
};
const mailData = {
    to: direcciones,
    subject: 'Aviso de Pagos',
    mailBody: 'No olvidarme de pagar a los empleados'
}

const frecuencia = 'mensual';

function main () {

    const cu = factoryRecPago.getCu();
    cu.invocar(frecuencia, tempRules, mailData);

};

main ();
