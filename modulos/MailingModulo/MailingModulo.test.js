const { mailerFactory } = require('../../Factories/FactoryModuloMailing.js')

const modulo = mailerFactory.getMailer();

const addreses = ['asdasd@asdasd.com', 'sabrina-martinez@hotmail.es'];

modulo.enviarMail(addreses,'Test de prueba','Body del mail', 'UnAdjunto', 'Demo.pdf');