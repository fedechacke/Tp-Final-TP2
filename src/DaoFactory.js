const { crearDaoMemoria } = require('./DaoMemoria')
function crearDao(tipo){
    if (tipo === 'memoria') return crearDaoMemoria()
    //if (tipo === 'db') return crearDaoDb()
    throw new Error()
}

module.exports= { crearDao }