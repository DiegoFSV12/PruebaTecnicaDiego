import Hapi from '@hapi/hapi';
import tokenRoutes from './routes/token.routes.js';
import dotenv from 'dotenv';
dotenv.config();

export const createServer = async () => {
  const server = Hapi.server({
    port: 4000,
    host: '0.0.0.0',
    routes: {
    cors: {
      origin: ['*'] // Permite cualquier origen
    }
  }
  });

  server.route(tokenRoutes);

  return server;
};
