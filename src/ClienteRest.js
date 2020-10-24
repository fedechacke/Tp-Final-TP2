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
        getAllChoferes: async() => {
            const respuesta = await axios.get(`${urlServidor}:${puerto}${rutaApi}`)
            return respuesta.data
        },
        getChoferByDni: async (dni) => {
            const respuesta = await axios.get(`${urlServidor}:${puerto}${rutaApi}?dni=${dni}`)
            return respuesta.data

        },
        addNewAuto: async (datos) => {
            try {
                const respuesta = await axios.post(`${urlServidor}:${puerto}${rutaApi}`, datos)
                return [respuesta.data]
            } catch (err) {
                const error = new Error(err.response.data.message)
                error.status = err.response.status
                throw error
            }
        },
        addNewChofer: async () => {

        },
        deleteChofer: async () => {

        },
        getAutoStats: async (startDate, endDate) => {

        },
        addAutoStats: async (statsFile) => {

        },
        addNewFile: async (file) => {
            try {
                const respuesta = await axios.post(`${urlServidor}:${puerto}${rutaApi}`, file)
                return [respuesta.data]
            } catch (err) {
                // const error = new Error(err.response.data.message)
                // error.status = err.response.status
                // throw error
                console.log(err.message)
            }
        }
    }
}

module.exports = { crearCliente }