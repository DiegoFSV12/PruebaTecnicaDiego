import { generateRandomToken, saveToken, isTokenValid } from '../services/token.service.js';

export const saveTokenHandler = async (request, h) => {
    try {
        const { token, id_cliente } = request.payload;
        await saveToken(token, id_cliente);
        return h.response({ token, id_cliente }).code(201);
    } catch (error) {
        console.error(error);
        return h.response({ error: 'Error generando token', details: error.message }).code(500);
    }
};

export const validateTokenHandler = async (request, h) => {
    try {
        const { token } = request.params;
        const valid = await isTokenValid(token);
        return h.response({ valid }).code(200);
    } catch (error) {
        console.error(error);
        return h.response({ error: 'Error validando token', details: error.message }).code(500);
    }
};

export function generateToken(){
    const token = generateRandomToken();
    return {token: token};
}
