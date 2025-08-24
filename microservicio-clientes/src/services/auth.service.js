import * as AuthModel from '../models/auth.model.js';

// If using Node.js <18, uncomment the next line:
// import fetch from 'node-fetch';

export const registerClient = async (token, Tipo_Documento, Num_Documento, Nombres, Apellidos, FechaNacimiento) => {
    try {
        const response = await fetch(`${process.env.RUTA_VALIDAR_TOKEN}${token}`);
        if (!response.ok) {
            throw new Error(`Fetch failed with status: ${response.status}`);
        }
        const data = await response.json();
        if (!data.valid) {
            throw new Error('Token inválido');
        }
        return await AuthModel.registerClient(Tipo_Documento, Num_Documento, Nombres, Apellidos, FechaNacimiento);
    } catch (error) {
        console.error('Error during fetch:', error);
        throw error;
    }
};

