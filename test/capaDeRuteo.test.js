const { crearServidor } = require('../src/Server.js')
const { crearCliente } = require('../src/ClienteRest.js')
const { crearDao } = require('../src/DaoFactory')

const diaDelMes = 14;
const hora = 01;
const minuto = 45;
const segundo = 00;

const db = crearDao('db');

async function recoPago() {
    const server = await crearServidor(0, db)
    const cliente = crearCliente('http://localhost', server.address().port, '/api/remiseria/recopago')

    const tempRulesRecoPago = { 
        diaDelMes: diaDelMes,
        hora: hora,
        minuto: minuto,
        segundo: segundo,
        id: 'id'
    }
    
    // await db.connect();

    await cliente.addRecordatorioDePago({
        tempRules: tempRulesRecoPago,
        frecuencia:'mensual',
        asunto:'mail de prueba',
        cuerpo:'mail de prueba',
        direcciones:['sabrina-martinez@hotmail.es, tomas.lozano92@gmail.com']
    });

    // await db.close();

}

async function resuDesemp() {

    const server = await crearServidor(0, db)
    const cliente = crearCliente('http://localhost', server.address().port, '/api/remiseria/resdesemp')

    // await db.connect();

    await cliente.sendNewResumenDesempeno({
        asunto:'mail de prueba',
        cuerpo:'mail de prueba',
        direcciones:['sabrina-martinez@hotmail.es, tomas.lozano92@gmail.com'],
        archivo: {
            nombreArchivo: 'UnPdf',
            rutaArchivo: './CU/assets/PdfCU2.pdf'
        }
    })

    // await db.close();

}
async function repoStats() {

const server = await crearServidor(0, db)
    const cliente = crearCliente('http://localhost', server.address().port, '/api/remiseria/repostats')

    // await db.connect();

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

    // await db.close();
}
async function emailDesemp() {

    const server = await crearServidor(0, db)
    const cliente = crearCliente('http://localhost', server.address().port, '/api/remiseria/maildesemp')

    // await db.connect();

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
        asunto:'mail de prueba',
        cuerpo:'mail de prueba',
        direcciones:['sabrina-martinez@hotmail.es, tomas.lozano92@gmail.com'],
        archivo: {
            nombreArchivo: 'unPdf',
            rutaArchivo: './CU/assets/PdfCU3.pdf'
        }
    });

    // await db.close()
}

recoPago();
resuDesemp();
repoStats();
emailDesemp();
