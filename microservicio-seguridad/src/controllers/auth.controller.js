import { registerClienteService } from '../services/auth.service.js';

export const registerCliente = async (request, h) => {
  try {
    const { Tipo_Documento, Num_Documento, Nombres, Apellidos, FechaNacimiento } = request.payload;

    const clienteId = await registerClienteService(Tipo_Documento, Num_Documento, Nombres, Apellidos, FechaNacimiento);

    return h.response({ message: 'Cliente registrado', id: clienteId }).code(201);
  } catch (error) {
    console.error(error);
    return h.response({ error: 'Error registrando cliente', details: error.message }).code(500);
  }
};


