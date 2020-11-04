const { crearModuloPdf } = require('./PdfGeneratorModule');

const data = [
    {
        Nombre: 'Sami',
        Apellido: 'Martinez',
        Edad: 28,
        Trabajo: 'Libertad Motherfuckers!!!!',
        Hobbies: 'Pintarte la jeta',
        Comida_Preferida: 'Fideitos'
    },
    {
        Nombre: 'Tomi',
        Apellido: 'Lozano',
        Edad: 27,
        Trabajo: 'El masca pito de Xappia',
        Hobbies: 'Jugar con la gorda',
        Comida_Preferida: 'Hamburga extremadamente pintada con plastico'
    },
    {
        Nombre: 'Juani',
        Apellido: 'Argüello',
        Edad: 20,
        Trabajo: 'Soldadito de plomo',
        Hobbies: 'Tocar la guitarra',
        Comida_Preferida: 'Milanga con pure'
    },
    {
        Nombre: 'Fede',
        Apellido: 'Es demasiado largo',
        Edad: 26,
        Trabajo: 'Cual de todos?',
        Hobbies: 'Musica',
        Comida_Preferida: 'Si todavia no te diste cuenta de que son todas es porque no me viste la buzarda'
    }]

    const columnas = Object.keys(data[0]);

const pdf = crearModuloPdf();
/* pdf.crearTemplate('Helvetica', 35, false, 'A4', 'portrait');
pdf.crearDoc('Mi-primer-pdf', 'Yo, obvio', 'El mejor asunto que se te pueda ocurrir, papu', 'Este es mi primer archivo PDF, por lo que estoy demasiado emocionado. Si esto llega a funcionar bien nos vamos de joda!');
pdf.guardarDoc('Demo1', '.'); */
const template = pdf.crearTemplate('Helvetica', 15, false, 'A4', 'landscape');
const content = pdf.crearContent(template, columnas, data);
const doc = pdf.crearDoc('Mi tabla', 'Yo', 'Tabla de personas', content);
pdf.guardarDoc('Esta', './', doc);    