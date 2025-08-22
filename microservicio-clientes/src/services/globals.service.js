import { pool } from '../config/db.js';

export const getAllGlobals = async () => {
    const [result] = await pool.query(
      `SELECT * FROM parametrosglobales`
    );
    return result;
};

