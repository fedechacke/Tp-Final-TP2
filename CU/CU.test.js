const { factoryCu1 } = require('../Factories/Zeus/FactoryCu.js')
const { crearTempo } = require('../src/DaoTempo.js');

const addreses = ['sabrina-martinez@hotmail.es'];

function main () {
    const cu = factoryCu1.getCu();
    cu.invocar(crearTempo('mensual'),'Aviso de Pagos','Pagarle a los empleados', addreses);

}
main ();
