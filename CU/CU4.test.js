const { crearTemporizadorDeEventos } = require('../modulos/ModuloTemporizador/ScheduleModulo.js');
const { crearModuloPdf } = require('../modulos/PdfGeneratorModule/PdfGeneratorModule.js');
const { crearCu } = require('./CU4.js');

const moduloSchedule = crearTemporizadorDeEventos();
const generadorPdf = crearModuloPdf();

const data = [
    {
        Campaña: 'Sami',
        Cantidad_de_Clicks: '350',
        Gasto: '$28.000',
        Conversiones: '7',
        Impresiones: '120',
        Busquedas: '130'
    },
    {
        Campaña: 'Tomi',
        Cantidad_de_Clicks: '500',
        Gasto: '$30.000',
        Conversiones: '15',
        Impresiones: '150',
        Busquedas: '160'
    }]

function main () {
    const cu = crearCu(generadorPdf, moduloSchedule);
    cu.invocar(data);
}
main ();