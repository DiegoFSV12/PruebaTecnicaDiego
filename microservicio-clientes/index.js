import { createServer } from './src/app.js';
import { pool } from './src/config/db.js';

const init = async () => {
    try {
        // seleccionamos 1 solo para verificar la conexión a la bd, si da error entrara al catch
        await pool.query('SELECT 1');
        console.log('Cliente - Conectado a la BD');

        const server = await createServer();
        await server.start();

        console.log(`Microservicio de Clientes corriendo en: ${server.info.uri}`);
    } catch (err) {
        console.error('❌Error iniciando el microservicio de Clientes:', err);
        process.exit(1);
    }
};

init();