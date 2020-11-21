const { crearServidor } = require('../src/Server.js')
const { crearCliente } = require('../src/ClienteRest.js')
const { crearDao } = require('../src/DaoFactory')

const diaDelMes = 21;
const hora = 02;
const minuto = 40;
const segundo = 00;



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
        tempRules: tempRulesRecoPago,
        frecuencia:'mensual',
        mailData: {
            subject:'mail de prueba',
            mailBody:'mail de prueba',
            to:['sabrina-martinez@hotmail.es, tomas.lozano92@gmail.com']
        }
    });

}

async function resuDesemp(server) {
    const cliente = crearCliente('http://localhost', server.address().port, '/api/remiseria/resdesemp')

    await cliente.sendNewResumenDesempeno({
        mailData: {
            subject:'mail de prueba',
            mailBody:'mail de prueba',
            to:['sabrina-martinez@hotmail.es, tomas.lozano92@gmail.com']
        },
        mailAttach: {
            fileName: 'UnPdf',
            filePath: './CU/assets/PdfCU2.pdf'
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
        tempRules: tempRulesRepoStats,
        frecuencia:'diario'
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
        tempRules: tempRulesDesempMail,
        frecuencia:'mensual',
        mailData: {subject:'mail de prueba',
        mailBody:'mail de prueba',
        to:['sabrina-martinez@hotmail.es, tomas.lozano92@gmail.com']
        },
        mailAttach: {
            fileName: 'unPdf',
            filePath: './CU/assets/PdfCU3.pdf'
        }
    });
}

async function main() {
    const db = crearDao('db');
    const server = await crearServidor(0, db)
    await db.connect();
    await recoPago(server);
    await resuDesemp(server);
    await repoStats(server);
    await emailDesemp(server);
    await db.close();
}

main();
