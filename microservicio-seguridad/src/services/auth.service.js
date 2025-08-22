import { pool } from '../config/db.js';

export const registerClienteService = async (Tipo_Documento, Num_Documento, Nombres, Apellidos, FechaNacimiento) => {
  const [result] = await pool.query(
    `INSERT INTO Clientes (Tipo_Documento, Num_Documento, Nombres, Apellidos, FechaNacimiento) 
     VALUES (?, ?, ?, ?, ?)`,
    [Tipo_Documento, Num_Documento, Nombres, Apellidos, FechaNacimiento]
  );
  return result.insertId;
};

