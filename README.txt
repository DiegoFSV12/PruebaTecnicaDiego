## Prueba Tecnica

INFORMACIÓN:

Microservicio de seguridad -> http://localhost:4000
Microservicio de correos -> http://localhost:6000
Microservicio de clientes -> http://localhost:5000





Rutas:
Microservicio de Seguridad:
    GET http://localhost:4000/tokens/generate - Genera un token de 8 digitos
    POST http://localhost:4000/tokens/save - Toma un token y lo adjunta a un usuario en la BD
    Enviar asi :
        {
          "token": "12345678",
          "id_cliente": "1"
        }

    GET http://localhost:4000/tokens/validate/{token} - Valida si el token esta en la BD, retorna true si lo esta y false sino