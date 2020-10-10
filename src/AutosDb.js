function crearDb() {
    const elementos = []
    return {
        getAllAutos: async () => { return [...elementos] },
        getAutoByPatente: async (patente) => { return elementos.filter( e => e.patente === patente) },
        addAuto: async (auto) => { elementos.push(auto) }
    }
}

module.exports = { crearDb }