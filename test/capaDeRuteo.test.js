// const assert = require('assert')
// const fs = require('fs')
// const { crearDao } = require('../src/DaoFactory.js')
/* const { pdfFactory } = require('./../Factories/Modulos/FactoryModuloPdfGenerator.js');
const { tempoFactory } = require('./../Factories/Modulos/FactoryModuloSchedule.js');
const { mailerFactory } = require('./../Factories/Modulos/FactoryModuloMailing.js'); */
const { crearServidor } = require('../src/Server.js')
const { crearCliente } = require('../src/ClienteRest.js')
const { crearTempo } = require('../src/DaoTempo.js')

async function main() {
    const server = await crearServidor(0)
    const cliente = crearCliente('http://localhost', server.address().port, '/api/remiseria/cu1')

    const scheduleDao = crearTempo('mensual');
    const setTemporizador = { 
        diaDelMes: 12,
        hora: 19,
        minuto: 50,
        segundo: 00,
        id: 'id'
    }
    
    cliente.addCU1({
        scheduleDao: scheduleDao,
        setTemporizador: setTemporizador,
        tempo:'mensual',
        subject:'mail de prueba',
        body:'mail de prueba',
        addreses:['sabrina-martinez@hotmail.es, tomas.lozano92@gmail.com']
    });
}


main();
