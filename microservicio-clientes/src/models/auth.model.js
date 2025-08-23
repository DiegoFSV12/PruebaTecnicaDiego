import { pool } from '../config/db.js';


//ANTES DE REGISTRAR, CLIENTES DEBERIA VALIDAR EL TOKEN LLAMANDO A SEGURIDAD LUEGO REGISTRA EL CLIENTE EN LA BD, LUEGO CONSULTA EL PARAMETRO EN REDIS (ESTO SE GUARDA APENAS DE INICIE CLIENTES), DE ESTAR ACTIVO, PROCEDE A ENVIAR LA PETICION A CORREOS
export const registerClient = async (Tipo_Documento, Num_Documento, Nombres, Apellidos, FechaNacimiento) => {
    const [result] = await pool.query(
        `INSERT INTO Clientes (Tipo_Documento, Num_Documento, Nombres, Apellidos, FechaNacimiento) 
     VALUES (?, ?, ?, ?, ?)`,
        [Tipo_Documento, Num_Documento, Nombres, Apellidos, FechaNacimiento]
    );
    return result.insertId;
};

