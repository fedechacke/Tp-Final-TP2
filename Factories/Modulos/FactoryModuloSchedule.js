const { crearTemporizadorDeEventos } = require ('../modulos/ModuloTemporizador/ScheduleModulo.js');

/*const config = require('config');
const credentials = {
    config.user, config.pass
}*/
const tempo = crearTemporizadorDeEventos();

const tempoFactory = {
    getTempo : function () {
        return tempo
    }
};

module.exports = { tempoFactory }