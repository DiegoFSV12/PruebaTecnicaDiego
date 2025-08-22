import { pool } from '../config/db.js';

export const generateRandomToken = () => {
    return Math.floor(10000000 + Math.random() * 90000000).toString();
};

export const saveToken = async (token, idCliente) => {
    const [result] = await pool.query(
        'INSERT INTO Token (Token, Id_cliente) VALUES (?,?)',
        [token, idCliente]
    );
    return result.insertId;
};

export const isTokenValid = async (token) => {
    const [rows] = await pool.query(
        'SELECT * FROM Token WHERE Token = ?',
        [token]
    );
    return rows.length > 0;
};
