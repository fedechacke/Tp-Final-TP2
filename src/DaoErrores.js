function crearErrorDeUsuario(msg) {
    const errObj = new Error(msg)
    errObj.type = 'USER_ERROR'
    return errObj
}

function crearErrorDelServidor(msg) {
    const errObj = new Error(msg)
    errObj.type = 'SERVER_ERROR'
    return errObj
}

module.exports = { crearErrorDeUsuario, crearErrorDelServidor }