import * as AuthModel from '../models/auth.model.js';

export const registerClient = async (Tipo_Documento, Num_Documento, Nombres, Apellidos, FechaNacimiento) => {
    return await AuthModel.registerClient(Tipo_Documento, Num_Documento, Nombres, Apellidos, FechaNacimiento);
};

