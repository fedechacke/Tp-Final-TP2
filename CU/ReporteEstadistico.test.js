const { factoryRepEst } = require('../Factories/Zeus/FactoryReporteEstadistico.js')

const tempRules = {
    hora: 21,
    minuto: 46,
    segundo: 00,
    id: 'id'
}

const frecuencia = 'diario';

async function main () {

    const cu = factoryRepEst.getCu();
    await cu.invocar(frecuencia, tempRules);
}

main ();