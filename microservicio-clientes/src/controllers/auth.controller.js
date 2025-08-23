import { registerClient } from '../services/auth.service.js';

export const registerClientControl = async (req, res) => {
  try {
    const { Tipo_Documento, Num_Documento, Nombres, Apellidos, FechaNacimiento } = req.payload;

    const clienteId = await registerClient(Tipo_Documento, Num_Documento, Nombres, Apellidos, FechaNacimiento);

    return res.response({ message: 'Cliente registrado', id: clienteId }).code(201);
  } catch (error) {
    return res.response({ error: 'Error registrando cliente', details: error.message }).code(500);
  }
};


