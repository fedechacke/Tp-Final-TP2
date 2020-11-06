function crearDaoDesempeno() {
    const desempenos = [
        {
            Nombre: 'Sami',
            Apellido: 'Martinez',
            Edad: 28,
            Unidad_de_trabajo: 'ACC123',
            Horas_trabajadas: '120',
            Recaudacion: '$17500'
        },
        {
            Nombre: 'Tomi',
            Apellido: 'Lozano',
            Edad: 27,
            Unidad_de_trabajo: 'ADQ567',
            Horas_trabajadas: '150',
            Recaudacion: '$20000'
        }];
    return {
        getDesempenos: async () => {return [...desempenos]}
    }
}

module.exports = { crearDaoDesempeno }