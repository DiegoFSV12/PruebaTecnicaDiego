import Hapi from '@hapi/hapi';
import authRoutes from './routes/auth.routes.js';
import globalsRoutes from './routes/globals.routes.js';
import dotenv from 'dotenv';
dotenv.config();

export const createServer = async () => {
  const server = Hapi.server({
    port: 5000,
    host: '0.0.0.0',
  });

  server.route(authRoutes);
  server.route(globalsRoutes);

  return server;
};
