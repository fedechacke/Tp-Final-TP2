const { crearTemporizadorDeEventos } = require('./../modulos/ModuloTemporizador/ScheduleModulo.js')

const modulo = crearTemporizadorDeEventos();

function crearTempo(tipo){
    if (tipo === 'semanal') return modulo.repetirSemanalmente
    if (tipo === 'mensual') return modulo.repetirMensualmente
    if (tipo === 'diario') return modulo.repetirDiariamente
    throw new Error()
}

module.exports= { crearTempo }