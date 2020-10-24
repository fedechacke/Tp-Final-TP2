const schedule = require('node-schedule');
const shell = require('shelljs')

  function crearTemporizadorDeEventos() {
    
    return {

        repetirSemanalmente: function( diaDeLaSemana, hora, minuto, segundo, callback ) {
            const j = schedule.scheduleJob(`*/${segundo} */${minuto} */${hora} * * */${diaDeLaSemana}`, callback);
        },

        repetirMensualmente: function(diaDelMes, hora, minuto, segundo, callback) {
            const j = schedule.scheduleJob(`*/${segundo} */${minuto} */${hora} */${diaDelMes} * *`, callback);
        },

        repetirDiariamente: function(hora, minuto, segundo, callback) {
            try {
                let rule = new schedule.RecurrenceRule();
                rule.second = segundo
                rule.minute = minuto
                rule.hour = hora
                console.log(segundo, hora, minuto)
                const j = schedule.scheduleJob(rule, callback);
                console.log(j)
            } catch (error) {
                console.log(error.message)
            }
        }
    }
  }


  module.exports = { crearTemporizadorDeEventos }