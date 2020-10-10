const assert = require('assert')

const { crearServidor } = require('../src/Server.js')
const { crearCliente } = require('../src/ClienteRest.js')
const { crearDb } = require('../src/AutosDb.js')

const auto1 = {
    patente: 'AA000AA',
    marca: 'Audo',
    modelo: 'P98',
    ano: 1948
}

const auto2 = {
    patente: 'AA999AA',
    marca: 'Mercados Vans',
    modelo: 'SL100997',
    ano: 1914
}

describe('server', () => {

    let cliente
    let server
    let db

    beforeEach(async () => {
        db = crearDb()
        server = await crearServidor(0, db)
        cliente = crearCliente('http://localhost', server.address().port, '/api/remiseria')
    })

    afterEach(() => {
        server.close()
    })

    describe('si el puerto esta ocupado', () => {
        it('no se conecta y lanza un error', async () => {
            await assert.rejects(async () => {
                await crearServidor(server.address().port, db)
            }, (error) => {
                assert.equal(error.message, 'address in use')
                return true
            })
        })
    })

    describe('getAllAutos', () => {
        describe('si no hay autos', () => {
            it('devuelve una coleccion vacia', async () => {
                const autos = await cliente.getAllAutos()
                const esperado = []
                assert.deepStrictEqual(autos, esperado)
            })
        })

        describe('si hay autos', () => {
            it('devuelve una coleccion con todo lo que haya', async () => {
                await db.addAuto(auto1)
                await db.addAuto(auto2)
                
                const esperado = [auto1, auto2]
                const autos = await cliente.getAllAutos()
                assert.deepStrictEqual(autos, esperado)
            })
        })
    })

    describe('getAutoByPatente', () => {
        describe('si no hay autos con esa patente', () => {
            it('devuelve una coleccion vacia', async () => {
                await db.addAuto(auto1)
                await db.addAuto(auto2)
                const autos = await cliente.getAutoByPatente('0000000')
                const esperado = []
                assert.deepStrictEqual(autos, esperado)
            })
        })

        describe('si hay autos con esa patente', () => {
            it('devuelve una coleccion con los coincidentes', async () => {
                await db.addAuto(auto1)
                await db.addAuto(auto2)
                const autos = await cliente.getAutoByPatente(auto1.patente)
                const esperado = [auto1]
                assert.deepStrictEqual(autos, esperado)
            })
        })
    })
})
