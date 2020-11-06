fonts = {

    Courier: {
        normal: 'Courier',
        bold: 'Courier-Bold',
        italics: 'Courier-Oblique',
        bolditalics: 'Courier-BoldOblique'
    },
    Helvetica: {
        normal: 'Helvetica',
        bold: 'Helvetica-Bold',
        italics: 'Helvetica-Oblique',
        bolditalics: 'Helvetica-BoldOblique'
    },
    Times: {
        normal: 'Times-Roman',
        bold: 'Times-Bold',
        italics: 'Times-Italic',
        bolditalics: 'Times-BoldItalic'
    },
    Symbol: {
        normal: 'Symbol'
    },
    ZapfDingbats: {
        normal: 'ZapfDingbats'
    }
};
const PdfPrinter = require('pdfmake');
const printer = new PdfPrinter(fonts);
const fs = require('fs');


function crearModuloPdf() {
    let pdfDoc;

    const docDefinition = {
        info: {
            title: '',
            author: '',
            subject: '',
            creator: '',
            producer: '',
        },
        content: '',
        defaultStyle: {
            font: '',
            fontSize: null,
            bold: null
        },
        pageSize:'',
        pageOrientation: ''
    };

    const options = {
          // ...
        };

        function imprimirPDF(archivo) {
            return printer.createPdfKitDocument(archivo);
        };

        async function saveDoc(path, fileName, pdfDoc) {
            await pdfDoc.pipe(fs.createWriteStream(`${path}/${fileName}.pdf`)),
            pdfDoc.end()
        }

        function buildTableBody(data, columns) {
            const body = [];
        
            body.push(columns);
        
            data.forEach( row => {
                const dataRow = [];
        
                columns.forEach(function(column) {
                    dataRow.push(row[column].toString());
                })
        
                body.push(dataRow);
            });
        
            return body;
        }
        
        function table(data, columns) {
            return {
                table: {
                    headerRows: 1,
                    body: buildTableBody(data, columns)
                }
            };
        }

    return {
        /** 
        *@param {string} font: the font used on the document, can be Courier, Helvetica, Times, Symbol or ZapfDingbats
        *@param {number} fontSize: The size of the font
        *@param {boolean} isBold: wether to bolden the font
        *@param {string} pageSize: The size of the page, can be '4A0', '2A0', 'A0', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10',
                                    'B0', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10',
                                    'C0', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10',
                                    'RA0', 'RA1', 'RA2', 'RA3', 'RA4',
                                    'SRA0', 'SRA1', 'SRA2', 'SRA3', 'SRA4',
                                    'EXECUTIVE', 'FOLIO', 'LEGAL', 'LETTER', 'TABLOID'
        *@param {string} pageOrientation: The orientation of the page. Can be landscape or portrait
        */ 

        /**
         * 
         * @param {string} estilo: El estilo deseado para el documento. Puede ser Ejecutivo o Casual.
         */
        crearTemplate: function(estilo) {
            
            const template = docDefinition;
            
            switch (estilo) {
                case 'Ejecutivo':
                    template.pageOrientation = 'landscape';
                    template.pageSize = 'A4';
                    template.defaultStyle.font = 'Courier';
                    template.defaultStyle.fontSize = 14;
                    template.defaultStyle.bold = true;
                    template.defaultStyle.italics = true;
                    template.info.creator = 'Mi módulo de PDF';
                    template.info.producer = 'También mi módulo de PDF';
                    break;
                case 'Casual':
                    template.pageOrientation = 'portrait';
                    template.pageSize = 'A4';
                    template.defaultStyle.font = 'Helvetica';
                    template.defaultStyle.fontSize = 15;
                    template.defaultStyle.bold = false;
                    template.info.creator = 'Mi módulo de PDF';
                    template.info.producer = 'También mi módulo de PDF';
                    break;
                default:
                    break;
            }


            return template;
        },

        /**
         * 
         * @param {template} template se obtiene como resultado de invocar a la funcion crearTemplate.
         * @param {string[]} columnas Titulos de las columnas
         * @param {Object[]} datos Datos a representar en la tabla
         */
        crearContent: function (template, columnas, datos) {
            const content = template;
            content.content = [
                table(datos, columnas)
            ]
            return content;
        },

        /** 
        *@param {string} title: the title of the document
        *@param {string} author: The author of the document
        *@param {string} subject: The subject of the document
        *@param {string} content: The content of the file, you must create this whith crearContent()
        */ 
        crearDoc: function (title, author, subject, content){
            
            content.info.title = title;
            content.info.author = author;
            content.info.subject = subject;
            const pdfDoc = imprimirPDF(docDefinition, content);
            return pdfDoc;
        }, 
        guardarDoc: async function(fileName, path, doc){
            await saveDoc(path, fileName, doc);
        } 
    }
}

module.exports = { crearModuloPdf }
