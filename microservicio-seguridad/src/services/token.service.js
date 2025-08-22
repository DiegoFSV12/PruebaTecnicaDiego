import { pool } from '../config/db.js';

export const generateRandomToken = async () => {
    const token = Math.floor(10000000 + Math.random() * 90000000).toString();
    const [result] = await pool.query(
        'INSERT INTO Token (Token, Estado) VALUES (?,?)',
        [token, true]
    );
    return { id: result.insertId, token };
};

export const updateToken = async (token, newToken, idCliente) => {
    const [result] = await pool.query(
        'UPDATE Token SET Id_cliente = ?, Token = ? WHERE Token = ?',
        [idCliente, newToken, token]
    );
    return result.affectedRows;
};

export const isTokenValid = async (token) => {
    const [rows] = await pool.query(
        'SELECT * FROM Token WHERE Token = ? and Estado = 1',
        [token]
    );
    return rows.length > 0;
};
