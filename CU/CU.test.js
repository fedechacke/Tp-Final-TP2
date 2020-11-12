const { factoryCu1 } = require('../Factories/Zeus/FactoryCu.js')
const { crearTempo } = require('../src/DaoTempo.js');

const addreses = ['sabrina-martinez@hotmail.es'];

const setTemporizador = { 
    diaDelMes: 12,
    hora: 19,
    minuto: 50,
    segundo: 00,
    id: 'id'
}

const scheduleDao = crearTempo('mensual');

function main () {
    const cu = factoryCu1.getCu();
    cu.invocar(scheduleDao, setTemporizador,'Aviso de Pagos','Pagarle a los empleados', addreses);

}
main ();
