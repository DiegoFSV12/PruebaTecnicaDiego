## Prueba Tecnica

INFORMACIÓN:

Microservicio de seguridad -> http://localhost:4000
Microservicio de clientes -> http://localhost:5000
Microservicio de correos -> http://localhost:6000





Rutas:
Microservicio de Seguridad:
    GET http://localhost:4000/tokens/generate - Genera un token de 8 digitos y lo registra en la bd sin el id_cliente, solo con el token y su estado true
    POST http://localhost:4000/tokens/update - Toma un token y lo adjunta a un usuario en la BD, tambien lo actualiza segun el nuevo token ingresado por el usuario
    Enviar asi :
        {
          "token": "12345678",
          "newToken": "87654321",
          "id_cliente": "1"
        }

    GET http://localhost:4000/tokens/validate/{token} - Valida si el token esta en la BD y si su estado es 1 (True), retorna true si lo esta y false sino