import * as TokenModel from '../models/token.model.js';

export const generateRandomToken = async () => {
    return await TokenModel.generateRandomToken();
};

export const updateToken = async (token, newToken, id_cliente) => {
    return await TokenModel.updateToken(token, newToken, id_cliente);
};

export const isTokenValid = async (token) => {
    return await TokenModel.isTokenValid(token);
};
