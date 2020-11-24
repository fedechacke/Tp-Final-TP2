const { crearErrorDeUsuario, crearErrorDelServidor } = require('../../src/DaoErrores.js')

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
         * 
         * @param {string} estilo: El estilo deseado para el documento. Puede ser Ejecutivo o Casual.
         */
        crearTemplate: function(estilo) {
            
            if (!estilo){
                throw crearErrorDeUsuario("Ingrese un estilo")
            }
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
                    throw crearErrorDeUsuario("Ingrese un estilo valido");
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
            if (template && columnas && datos){
                content.content = [
                    table(datos, columnas)
                ]                
            } else {
                throw crearErrorDeUsuario("Verifique columnas y datos")
            }
            return content;
        },

        /** 
        *@param {string} title: the title of the document
        *@param {string} author: The author of the document
        *@param {string} subject: The subject of the document
        *@param {string} content: The content of the file, you must create this whith crearContent()
        */ 
        crearDoc: function (title, author, subject, content){
            if (!content){
                throw crearErrorDeUsuario("Ingrese su contenido")
            }
            content.info.title = title;
            content.info.author = author;
            content.info.subject = subject;
            try {
                const pdfDoc = imprimirPDF(docDefinition, content);
                return pdfDoc;
            } catch (error) {
                throw crearErrorDelServidor(error.message);
            }
        }, 
        guardarDoc: async function(fileName, path, doc){
            if (!fileName || !path || !doc){
                throw crearErrorDeUsuario("Ingrese los datos de su archivo");
            }
            try {
                await saveDoc(path, fileName, doc);
            } catch (error) {
                throw crearErrorDelServidor(error.message);
            }
        } 
    }
}

module.exports = { crearModuloPdf }
