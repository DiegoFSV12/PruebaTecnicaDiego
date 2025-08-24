## Prueba Tecnica

COMO INICIAR EL PROYECTO:
Creamos la base de datos MySQL empleando el script ubicado en la carpeta "database" en la raiz del proyecto.

Copiamos el archivo ".env.example" (Se incluyen las variables con fines de prueba)

Para ajustar los puertos de las variables de entorno estos deben coincidir con los establecidos en el archivo docker-compose.yml
  - Ajustar variables de entorno de la base de datos en MySQL
  - Ajustar las variables de entorno de Redis
  - Ajustar las variables de entorno de Rabbitmq

Una vez configurada las variables de entorno y la base de datos abriremos docker y utilizaremos el siguiente comando.
  - docker compose up


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
  /*Al iniciar el servicio este utiliza redis para llamar los parametros globales y los almacena*/
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