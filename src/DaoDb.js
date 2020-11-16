const { MongoClient } = require("mongodb")

function crearDaoDb() {

    const client = new MongoClient('mongodb+srv://Tomi92:Tomi92@cluster0.f0z9j.mongodb.net/TPFinal?retryWrites=true&w=majority', { useUnifiedTopology: true,  })

    const elementos = []
    return {
        /* getAll: async () => {
            const database = client.db('ort_tp2_remote')
            const collection = database.collection('estudiantes')
            const estudiantes = await collection.find({}, { projection: { _id: 0 } }).toArray()
            return estudiantes
        }, */
        // getByDni: async (unDni) => { return elementos.filter(e => e.dni === unDni) },
        /* add: async (elemento) => {
            const database = client.db('ort_tp2_remote')
            const collection = database.collection('estudiantes')
            const result = await collection.insertOne(elemento)
            delete elemento._id
            return elemento
        }, */
        // addUnique: async (elemento, campo) => {
        //     const encontrados = elementos.filter(e => e[campo] == elemento[campo])
        //     if (encontrados.length === 0) {
        //         elementos.push(elemento)
        //     } else {
        //         throw crearErrorDeUsuario('ya existe estudiante con el mismo valor en ese campo')
        //     }
        // },
        /* deleteAll: async () => {
            const database = client.db('ort_tp2_remote')
            const collection = database.collection('estudiantes')
            const result = await collection.deleteMany({})

        }, */

        getDesempenos: async () => {
            const database = client.db('TPFinal')
            const collection = database.collection('Desempenos')
            const desempenos = await collection.find({}, { projection: { _id: 0 } }).toArray()
            return desempenos
        },
        getCampanas: async () => {
            const database = client.db('TPFinal')
            const collection = database.collection('Campanas')
            const campanas = await collection.find({}, {projection: {_id: 0}}).toArray()
            return campanas
        },
        connect: async () => {
            await client.connect()
        },
        close: async () => {
            await client.close()
        }
    }
}
exports.crearDaoDb = crearDaoDb