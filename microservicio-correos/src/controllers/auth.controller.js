import { registerClienteService } from '../services/auth.service.js';

export const registerCliente = async (req, res) => {
  try {
    const { Tipo_Documento, Num_Documento, Nombres, Apellidos, FechaNacimiento } = req.payload;

    const clienteId = await registerClienteService(Tipo_Documento, Num_Documento, Nombres, Apellidos, FechaNacimiento);

    return res.response({ message: 'Cliente registrado', id: clienteId }).code(201);
  } catch (error) {
    console.error(error);
    return res.response({ error: 'Error registrando cliente', details: error.message }).code(500);
  }
};


