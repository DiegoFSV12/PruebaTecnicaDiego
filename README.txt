## Prueba Tecnica

INFORMACIÓN:

Microservicio de seguridad -> http://localhost:4000
Microservicio de clientes -> http://localhost:5000
Microservicio de correos -> http://localhost:8000





Rutas:
Microservicio de Seguridad:
    GET http://localhost:4000/tokens/generate - Genera un token de 8 digitos y lo registra en la bd sin el id_cliente, solo con el token y su estado true.
    POST http://localhost:4000/tokens/update - Toma un token y lo adjunta a un usuario en la BD, tambien lo actualiza segun el nuevo token ingresado por el usuario.
    Enviar asi :
        {
          "token": "12345678",
          "newToken": "87654321",
          "id_cliente": "1"
        }

    GET http://localhost:4000/tokens/validate/{token} - Valida si el token esta en la BD y si su estado es 1 (True), retorna true si lo esta y false sino.


Microservicio de Clientes:
  GET http://localhost:5000/globals - Recupera todos los parametros globales de la base de datos.
  POST http://localhost:5000/clients/register - Registra al usuario en la base de datos.
  Enviar asi:
        {
          "Tipo_Documento": "DNI",
          "Num_Documento": "12345678",
          "Nombres": "guestName",
          "Apellidos": "guestLastName",
          "FechaNacimiento": "1995-04-12"
        } 

Microservicio de Correos:
  GET http://0.0.0.0:8000/email/{id} - Recupera los datos de un correo enviado por el id.
  POST http://0.0.0.0:8000/email/send - Registra un correo en la base de datos, simulando el envio del mismo.
  Enviar asi:
        {
          "id_cliente": 1,
          "asunto": "Asunto del correo",
          "contenido": "Contenido del correo enviado"
        }