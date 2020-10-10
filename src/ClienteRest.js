const axios = require('axios')

function crearCliente( urlServidor, puerto, rutaApi ) {
    
    return {
        getAllAutos: async () => {
            const respuesta = await axios.get(`${urlServidor}:${puerto}${rutaApi}`)
            return respuesta.data
        },
        getAutoByPatente: async (patente) => {
            const respuesta = await axios.get(`${urlServidor}:${puerto}${rutaApi}?patente=${patente}`)
            return respuesta.data
        },
        getChoferByDni: async () => {

        },
        addNewAuto: async () => {

        },
        addNewChofer: async () => {

        },
        deleteChofer: async () => {

        },
        getAutoStats: async (startDate, endDate) => {

        },
        addAutoStats: async (statsFile) => {

        }
    }
}

module.exports = { crearCliente }