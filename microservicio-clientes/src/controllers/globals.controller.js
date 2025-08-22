import { getAllGlobals } from '../services/globals.service.js';

export const getGlobals = async (req, res) => {
    try {
        const globalParams = await getAllGlobals();
        return res.response(globalParams).code(201);
    } catch (error) {
        console.error(error);
        return res.response({ error: 'Error al recuperar parametros globales', details: error.message }).code(500);
    }
};


