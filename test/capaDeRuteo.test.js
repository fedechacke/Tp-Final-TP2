const { crearServidor } = require('../src/Server.js')
const { crearCliente } = require('../src/ClienteRest.js')
const { crearDao } = require('../src/DaoFactory')

const diaDelMes = 24;
const hora = 19;
const minuto = 52;
const segundo = 45;



async function recoPago(server) {
    const cliente = crearCliente('http://localhost', server.address().port, '/api/remiseria/recopago')
    
    const tempRulesRecoPago = { 
        diaDelMes: diaDelMes,
        hora: hora,
        minuto: minuto,
        segundo: segundo,
        id: 'id'
    }

    await cliente.addRecordatorioDePago({
        tempData: {
            frecuencia:'mensual',
            tempRules: tempRulesRecoPago
        },
        mailData: {
            subject:'mail de prueba',
            mailBody:'mail de prueba',
            to:['sabrina-martinez@hotmail.es', 'tomas.lozano92@gmail.com']
        }
    });

}

async function resuDesemp(server) {
    const cliente = crearCliente('http://localhost', server.address().port, '/api/remiseria/resdesemp')

    await cliente.sendNewResumenDesempeno({
        mailData: {
            subject:'mail de prueba',
            mailBody:'mail de prueba',
            to:['sabrina-martinez@hotmail.es', 'tomas.lozano92@gmail.com']
        }
    });
}
async function repoStats(server) {
    const cliente = crearCliente('http://localhost', server.address().port, '/api/remiseria/repostats')

    const tempRulesRepoStats = {
        hora: hora,
        minuto: minuto,
        segundo: segundo,
        id: 'id'
    }

    await cliente.addNewTimedReporteEstadistico({
        tempData: {
            tempRules: tempRulesRepoStats,
            frecuencia:'diario'
        }
    });
}
async function emailDesemp(server) {
    const cliente = crearCliente('http://localhost', server.address().port, '/api/remiseria/maildesemp')

    const tempRulesDesempMail = { 
        diaDelMes: diaDelMes,
        hora: hora,
        minuto: minuto,
        segundo: segundo,
        id: 'id'
    }

    await cliente.addNewTimedDesempenoEmail({
        tempData: {
            tempRules: tempRulesDesempMail,
            frecuencia:'mensual'
        },
        mailData:{
            subject:'mail de desempeños',
            mailBody:'mail de prueba',
            to:['sabrina-martinez@hotmail.es', 'tomas.lozano92@gmail.com']
        }
    });
}

async function main() {
    const db = crearDao('db');
    await db.connect();
    const server = await crearServidor(0, db)
    await recoPago(server);
    await resuDesemp(server);
    await repoStats(server);
    await emailDesemp(server);
    // await db.close();
}

main();
