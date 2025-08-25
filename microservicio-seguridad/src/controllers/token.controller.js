import { generateRandomToken, updateToken, isTokenValid } from '../services/token.service.js';

export const updateTokenController = async (req, h) => {
    try {
        const { token, newToken, id_cliente } = req.payload;
        if (!token || !newToken || !id_cliente) {
            return h.response({ error: 'Parámetros faltantes' }).code(400);
        }
        const updatedRows = await updateToken(token, newToken, id_cliente);
        if (updatedRows === 0) {
            return h.response({ error: 'No se encontró el token a actualizar' }).code(404);
        }
        return h.response({ token, newToken, id_cliente }).code(201);
    } catch (error) {
        console.error(error);
        return h.response({ error: 'Error actualizando token', details: error.message }).code(500);
    }
};

export const validateTokenController = async (req, h) => {
    try {
        const { token } = req.params;
        const valid = await isTokenValid(token);
        return h.response({ valid }).code(200);
    } catch (error) {
        console.error(error);
        return h.response({ error: 'Error validando token', details: error.message }).code(500);
    }
};

export const generateTokenController = async (req, h) => {
    try {
        const token = await generateRandomToken();
        return h.response(token).code(201);
    } catch (error) {
        console.error(error);
        return h.response({ error: 'Error generando token', details: error.message }).code(500);
    }
}
