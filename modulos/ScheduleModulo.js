const schedule = require('node-schedule');
const shell = require('shelljs')

  function crearTemporizadorDeEventos() {
    
    return {

        repetirSemanalmente: function( diaDeLaSemana, hora, minuto, segundo, callback ) {
            let j = schedule.scheduleJob(`*/${segundo} */${minuto} */${hora} * * */${diaDeLaSemana}`, callback);
            try {
                let rule = new schedule.RecurrenceRule();
                rule.second = segundo
                rule.minute = minuto
                rule.hour = hora
                rule.dayOfWeek = diaDeLaSemana
                console.log(segundo, hora, minuto, diaDeLaSemana)
                const j = schedule.scheduleJob(rule, callback);
                console.log(j)
            } catch (error) {
                console.log(error.message)
            }
        },

        repetirMensualmente: function(diaDelMes, hora, minuto, segundo, callback) {
            try {
                let rule = new schedule.RecurrenceRule();
                rule.second = segundo
                rule.minute = minuto
                rule.hour = hora
                rule.date = diaDelMes
                console.log(segundo, hora, minuto, diaDelMes)
                const j = schedule.scheduleJob(rule, callback);
                console.log(j)
            } catch (error) {
                console.log(error.message)
            }
            
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