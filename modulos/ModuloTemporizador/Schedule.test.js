const { crearTemporizadorDeEventos } = require('./ScheduleModulo')

const temporizador = crearTemporizadorDeEventos();
/* temporizador.repetirDiariamente(21,43,0, function() {
    console.log('se esta repitiendo diaramente')
})

 /*temporizador.repetirMensualmente(29, 21, 41, 0, function() {
    console.log('se esta repitiendo mensualmente')
})*/

  temporizador.repetirSemanalmente(4,21,47,0,'1',function() {
    console.log('se esta repitiendo semanalmente') //0 y 7 son domingo
}) 
    temporizador.cancelarEvento('1')