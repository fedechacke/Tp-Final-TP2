# Método maildesemp
- Crea un evento programable que envía un mail a las direcciones 
  proporcionadas con un archivo adjunto del cual se proporciona nombre y ruta y que se generará
  automáticamente con la información correspondiente en la base de datos.

**Request**

    HTTP Request
    POST /api/remiseria/maildesemp

**Request Body**

    frecuencia: string   La frecuencia de repetición del evento. Puede ser diario, semanal o mensual.
    tempRules: {diaDelMes: number, hora: number, minuto: number, segundo: number}  Objeto de configuración de la temporización.
    asunto: string  Asunto del mail.
    cuerpo: string  Cuerpo del mail.
    direcciones: string | string[]  Dirección o direcciones a las que se enviará el mail.
    nombreArchivo: string  Nombre que recibirá el archivo adjunto del mail.
    rutaArchivo: string  Ruta en la que se guardará el archivo generado.    


**Response**

    Devuelve un código 204 si no hay errores.
    Devuelve un código 400 si hay errores en el request.
    Devuelve un código 500 si hay un error en el servidor.

---------------------------------------------------------------------------------------------------

# Método 'repostats'
- Programa un evento que genera un reporte estadístico con el horario y la frecuencia que se solicite 

**Request**

   HTTP Request
   POST /api/remiseria/repostasts

**Request Body**

    frecuencia: string.	La frecuencia de repetición del evento. Puede ser diario, semanal o mensual.

    tempRules: {diaDelMes:number, hora: number, minuto: number, segundo: number}.  Objeto de configuración de la temporización.

**Response**

	Devuelve un código 200 si no hubo errores. Caso contrario devolverá un error 400 si es un error del usuario ó 500 si es un error del servidor

---------------------------------------------------------------------------------------------------

# Método recopago
- Programa un evento que envía un mail a las direcciones que fueron brindadas, con el cuerpo y el asunto que se haya solicitado. 

**Request**

    HTTP Request
    POST /api/remiseria/recopago

**Request Body**

    frecuencia: string. La frecuencia de repetición del evento. Puede ser diario, semanal o mensual.
    tempRules: {diaDelMes: number, hora: number, minuto: number, segundo: number} Objeto de configuración de la temporización.
    asunto: string. Asunto del mail.
    cuerpo: string. Cuerpo del mail.
    direcciones: string | string[]  Dirección o direcciones a las que se enviará el mail.

**Response**

    Devuelve un código 204 si no hay errores, de lo contrario otorgará un error 400 si es un error del usuario o 500 si es un error del servidor.

---------------------------------------------------------------------------------------------------

# Método resdesemp
- Crea un archivo de formato pdf con los datos proporcionados y el mismo es enviado por mail a las direcciones deseadas en un archivo adjunto. 

**Request**

    HTTP Request
    POST /api/remiseria/resDesemp

**Request Body**

    Direcciones (direcciones): string | string [] Dirección o direcciones a las que se enviará el mail.
    Asunto (asunto): : string  Asunto del mail.
    Cuerpo (cuerpo): string  Cuerpo del mail.
    Nombre Archivo (nombreArchivo): string  Nombre que recibirá el archivo adjunto del mail.
    Ruta Archivo (rutaArchivo):  string  Ruta en la que se guardará el archivo generado.    
    Datos de desempeño (desempeño): string [] Define la cantidad de columnas que poseerá el reporte y otorga los datos para el llenado del mismo.

**Response**

    Devuelve un código 204 si no hay errores
    Devuelve un código 400 si hay errores del lado del cliente
    Devuelve un código 500 si hay errores del lado del servidor
