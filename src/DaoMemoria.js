function crearDaoMemoria() {
    const autos = []
    const choferes = []
    return {
        getAllAutos: async () => { return [...autos] },
        getAutoByPatente: async (patente) => { return autos.filter( e => e.patente === patente) },
        addAuto: async (auto, campo) => {
            encontrados = autos.filter( e => e[campo]===auto[campo])
            if (encontrados.length === 0){
                autos.push(auto)
            }else{
                throw new Error('El auto ya existe')
            }

        },
        getAllChoferes: async () => { return [...choferes] },
        getChoferByDni: async (dni) => { return choferes.filter( e => e.dni === dni) },
        addChofer: async (chofer, campo) => {
            encontrados = choferes.filter( e => e[campo]===chofer[campo])
            if (encontrados.length === 0){
                choferes.push(chofer)
            }else{
                throw new Error('El chofer ya existe')
            }

        }
    }
}

module.exports = { crearDaoMemoria }