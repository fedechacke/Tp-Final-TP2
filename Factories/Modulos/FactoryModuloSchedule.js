const { crearTempo } = require('../../src/DaoTempo')

const tempo = crearTempo;

const tempoFactory = {
    getTempo : function () {
        return tempo
    }
};

module.exports = { tempoFactory }
