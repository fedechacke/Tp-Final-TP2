const { factoryRecPago } = require('../Factories/Zeus/FactoryRecordatorioDePago.js');

const direcciones = ['sabrina-martinez@hotmail.es'];

const tempRules = { 
    diaDelMes: 12,
    hora: 21,
    minuto: 13,
    segundo: 00,
    id: 'id'
};

const frecuencia = 'mensual';

function main () {

    const cu = factoryRecPago.getCu();
    cu.invocar(frecuencia, tempRules, 'Aviso de Pagos', 'Pagarle a los empleados', direcciones);

};

main ();
