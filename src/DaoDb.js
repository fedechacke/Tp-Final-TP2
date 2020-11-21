const { MongoClient } = require("mongodb")

function crearDaoDb() {

    const client = new MongoClient('mongodb+srv://Tomi92:Tomi92@cluster0.f0z9j.mongodb.net/TPFinal?retryWrites=true&w=majority', { useUnifiedTopology: true,  })

    return {

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