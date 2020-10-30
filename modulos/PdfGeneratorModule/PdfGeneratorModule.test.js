const { crearModuloPdf } = require('./PdfGeneratorModule');

const pdf = crearModuloPdf();
pdf.crearTemplate('Helvetica', 35, false, 'A4', 'portrait');
pdf.crearDoc('Mi-primer-pdf', 'Yo, obvio', 'El mejor asunto que se te pueda ocurrir, papu', 'Este es mi primer archivo PDF, por lo que estoy demasiado emocionado. Si esto llega a funcionar bien nos vamos de joda!');
pdf.guardarDoc('Demo1', '.');