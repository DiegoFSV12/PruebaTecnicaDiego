import Hapi from '@hapi/hapi';
import authRoutes from './routes/auth.routes.js';
import dotenv from 'dotenv';
dotenv.config();

export const createServer = async () => {
  const server = Hapi.server({
    port: 4000,
    host: '0.0.0.0',
  });

  server.route(authRoutes);

  return server;
};
