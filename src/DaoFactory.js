const { crearDaoMemoria } = require('./DaoMemoria')
const { crearDaoDesempeno } = require('./DaoDesempeno')
const { crearDaoCampana } = require('./DaoCampana')
function crearDao(tipo){
    if (tipo === 'memoria') return crearDaoMemoria()
    if (tipo === 'desempenos') return crearDaoDesempeno()
    if (tipo === 'campanas') return crearDaoCampana()
    throw new Error()
}

module.exports= { crearDao }