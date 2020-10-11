const assert = require('assert')

const { crearServidor } = require('../src/Server.js')
const { crearCliente } = require('../src/ClienteRest.js')
const { crearDao } = require('../src/DaoFactory.js')

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
const autoIncompleto = {
    patente: '',
    marca: 'Mercados Vans',
    modelo: 'SL100997',
    ano: 1914
}

const chofer1 = {
    dni: 123,
    nombre: 'locomotora',
    apellido: 'castro'
}

const chofer2 = {
    dni: 326,
    nombre: 'hiena',
    apellido: 'barrios'
}

const choferIncompleto = {
    dni:'',
    nombre: 'hiena',
    apellido: 'barrios'
}

describe('server/autos', () => {

    let cliente
    let server
    let db

    beforeEach(async () => {
        db = crearDao('memoria')
        server = await crearServidor(0, db)
        cliente = crearCliente('http://localhost', server.address().port, '/api/remiseria/autos')
    })

    afterEach(() => {
        server.close()
    })

    describe('si el puerto esta ocupado', () => {
        it('no se conecta y lanza un error', async () => {
            await assert.rejects(async () => {
                await crearServidor(server.address().port, db)
            }, (error) => {
                assert.strictEqual(error.message, 'address in use')
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
                await db.addAuto(auto1,'patente')
                await db.addAuto(auto2,'patente')
                
                const esperado = [auto1, auto2]
                const autos = await cliente.getAllAutos()
                assert.deepStrictEqual(autos, esperado)
            })
        })
    })

    describe('getAutoByPatente', () => {
        describe('si no hay autos con esa patente', () => {
            it('devuelve una coleccion vacia', async () => {
                await db.addAuto(auto1, 'patente')
                await db.addAuto(auto2, 'patente')
                const autos = await cliente.getAutoByPatente('0000000')
                const esperado = []
                assert.deepStrictEqual(autos, esperado)
            })
        })

        describe('si hay autos con esa patente', () => {
            it('devuelve una coleccion con los coincidentes', async () => {
                await db.addAuto(auto1, 'patente')
                await db.addAuto(auto2, 'patente')
                const autos = await cliente.getAutoByPatente(auto1.patente)
                const esperado = [auto1]
                assert.deepStrictEqual(autos, esperado)
            })
        })
    })
    
    describe('post', () => {
        describe('addNewAuto', () => {
            describe('se quiere agregar un auto con datos imcompletos ', () => {
                it('debe devolver un error 400', async () => {
                    await assert.rejects(async ()=> {
                        await cliente.addNewAuto(autoIncompleto, 'patente')
                    },(error) => {
                        assert.strictEqual(error.status,400)
                        return true
                    })
                })
            })
            describe('se quiere agregar un auto valido ', () => {
                it('debe agregarlo a la coleccion', async () => {
                    let auto = await cliente.addNewAuto(auto1)
                    let autoEsperado = await cliente.getAutoByPatente(auto1.patente)
                    assert.deepStrictEqual(auto, autoEsperado)
                })
            })
            describe('se quiere agregar un auto que ya existe', () => {
                it('debe devolver un error 400', async () => {
                    let auto = await cliente.addNewAuto(auto1, 'patente')
                    assert.rejects( async() => {
                        await cliente.addNewAuto(auto1, 'patente')
                    },(error) => {
                        assert.strictEqual(error.status,400)
                        return true
                    })
                })
            })
        })
    })
})

describe('server/choferes', () => {

    let cliente
    let server
    let db

    beforeEach(async () => {
        db = crearDao('memoria')
        server = await crearServidor(0, db)
        cliente = crearCliente('http://localhost', server.address().port, '/api/remiseria/choferes')
    })

    afterEach(() => {
        server.close()
    })

    describe('getAllChoferes', () => {
        describe('si no hay choferes', () => {
            it('devuelve una coleccion vacía', async () => {
                const choferes = await cliente.getAllChoferes()
                const esperado = []
                assert.deepStrictEqual(choferes, esperado)
            })
        })
        describe('si hay choferes', () => {
            it('devuelve una coleccion con todo lo que haya', async () => {
                await db.addChofer(chofer1, 'dni')
                await db.addChofer(chofer2,'dni')
                
                const esperado = [chofer1, chofer2]
                const choferes = await cliente.getAllChoferes()
                assert.deepStrictEqual(choferes, esperado)
            })
        })
    })
})
