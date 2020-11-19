const schedule = require('node-schedule'); //librería para temporizador 
const shell = require('shelljs') //acceder a la consola desde el programa
const { crearErrorDeUsuario, crearErrorDelServidor } = require('../../src/DaoErrores.js')

  function crearTemporizadorDeEventos() {

  function crearEvento(rule, id, callback) { //crea el evento en cada metodo
    const j = schedule.scheduleJob(id, rule, callback)
    return j
  }

  function crearRule (config) { //se usa para crear las rules para los metodos propios del modulo
    const rule = new schedule.RecurrenceRule();
    if (config){
      if (config.second) rule.second = config.second
      if (config.minute) rule.minute = config.minute
      if (config.hour) rule.hour = config.hour
      if (config.dayOfWeek) rule.dayOfWeek = config.dayOfWeek
      if (config.date) rule.date = config.date
      if (config.month) rule.month = config.month
      if (config.year) rule.year = config.year
    } else {
      throw crearErrorDeUsuario("Debe proveer los datos necesarios para la creacion de la temporizacion")
    }
    return rule
  }

  function cancelEvent (evento) { //esta funcion es llamada por cancelarEvento para cancelar el evento en si mismo
    evento.cancel()
  }

  function buscarEvento (id) {
    const evento = schedule.scheduledJobs[id]
    return evento
  }

  const eventos = []

    return {

        repetirSemanalmente: function( scheduleObject, callback ) {
            try {
              const rule = crearRule ({dayOfWeek:scheduleObject.diaDeLaSemana,
                                      hour:scheduleObject.hora,
                                      minute:scheduleObject.minuto,
                                      second:scheduleObject.segundo})
              const j = crearEvento (rule, scheduleObject.id, callback)
            } catch (error) {
              throw crearErrorDelServidor(error.message);
            }
        },

        repetirMensualmente: function(scheduleObject, callback) {
            try {
                const rule = crearRule({date: scheduleObject.diaDelMes,
                                        hour: scheduleObject.hora,
                                        minute: scheduleObject.minuto,
                                        second: scheduleObject.segundo})
                const j = crearEvento (rule, scheduleObject.id, callback)
            } catch (error) {
              throw crearErrorDelServidor(error.message);
            }
        },

        repetirDiariamente: function(scheduleObject, callback) {
            try {
                const rule = crearRule({hour: scheduleObject.hora,
                                        minute: scheduleObject.minuto,
                                        second: scheduleObject.segundo})
                const j = crearEvento (rule, scheduleObject.id, callback)
            } catch (error) {
              throw crearErrorDelServidor(error.message);
            }
        },
        cancelarEvento: function (id) {
            const evento = buscarEvento(id)
            if (evento) {
            cancelEvent(evento)
            } else {
              throw crearErrorDeUsuario("No existe ese evento.")
            }
        }
    }
  }


  module.exports = { crearTemporizadorDeEventos }