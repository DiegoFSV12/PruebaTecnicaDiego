import { registerClient } from '../services/auth.service.js';
import {getAllGlobals} from '../services/globals.service.js'
import {sendOrder} from '../workers/rabbitmq.js'

export const registerClientControl = async (req, h) => {
  try {
    const { token, Tipo_Documento, Num_Documento, Nombres, Apellidos, FechaNacimiento } = req.payload;

    const clienteId = await registerClient(token, Tipo_Documento, Num_Documento, Nombres, Apellidos, FechaNacimiento);
    const globals = await getAllGlobals();
    const {Parametro,Estado} = globals.find(g => g.Parametro === 'ENVIAR_CORREO');
    if (Parametro && Estado == 1){
      sendOrder({
        id_cliente: clienteId,
        asunto: "Correo de Bienvenida",
        contenido: "Bienvenido estimado cliente."
      });
    }
    return h.response({ message: 'Cliente registrado', id: clienteId }).code(201);
  } catch (error) {
    return h.response({ error: 'Error registrando cliente', details: error.message }).code(500);
  }
};


