const { crearDaoMemoria } = require('./DaoMemoria')
const { crearDaoDesempeno } = require('./DaoDesempeno')
const { crearDaoCampana } = require('./DaoCampana')
const { crearDaoDb } = require('./DaoDb')

function crearDao(tipo){
    if (tipo === 'memoria') return crearDaoMemoria()
    if (tipo === 'desempeno') return crearDaoDesempeno()
    if (tipo === 'campanas') return crearDaoCampana()
    if (tipo === 'db') return crearDaoDb()
    throw new Error()
}

module.exports= { crearDao }