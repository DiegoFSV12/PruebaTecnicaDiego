import { pool } from '../config/db.js';
import { createClient } from 'redis';

const client = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
});
await client.connect();


export const getAllGlobals = async () => {
    const globals = await client.get('globalParams');
    if (globals) return JSON.parse(globals);

    const [result] = await pool.query(
      `SELECT * FROM parametrosglobales`
    );
    await client.set('globalParams', JSON.stringify(result));
    return result;
};