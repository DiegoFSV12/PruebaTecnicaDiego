import Hapi from '@hapi/hapi';
import { receiveOrder } from './workers/rabbitmq.js';
import dotenv from 'dotenv';
dotenv.config();

export const createServer = async () => {
  const server = Hapi.server({
    port: 8000,
    host: '0.0.0.0',
    routes: {
    cors: {
      origin: ['*'] // Permite cualquier origen
    }
  }
  });
  // Espera 15 segundos antes de ejecutar para dejar que rabbit cargue completamente
  setTimeout(() => {
    receiveOrder();
  }, 15000);
  return server;
};
