import { pool } from '../config/db.js';

export async function sendEmail(id_cliente, asunto, contenido) {
    const [result] = await pool.query(
        'INSERT INTO CorreosEnviados (Id_cliente, Asunto, Contenido) VALUES (?, ?, ?)', 
        [id_cliente, asunto, contenido]
    );
    return result.insertId ;
}

export async function getEmailById(id) {
    const [rows] = await pool.query(
        'SELECT * FROM CorreosEnviados WHERE Id = ?', 
        [id]
    );
    return rows[0] || null;
}

