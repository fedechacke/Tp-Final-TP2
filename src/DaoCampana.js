function crearDaoCampana() {
    const campanas = [
        {
            Campaña: 'Sami',
            Cantidad_de_Clicks: '350',
            Gasto: '$28.000',
            Conversiones: '7',
            Impresiones: '120',
            Busquedas: '130'
        },
        {
            Campaña: 'Tomi',
            Cantidad_de_Clicks: '500',
            Gasto: '$30.000',
            Conversiones: '15',
            Impresiones: '150',
            Busquedas: '160'
        }];
    return {
        getCampanas: async () => {return [...campanas]}
    }
}

module.exports = { crearDaoCampana }