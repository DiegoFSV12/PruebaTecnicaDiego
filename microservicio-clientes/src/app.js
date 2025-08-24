import Hapi from '@hapi/hapi';
import authRoutes from './routes/auth.routes.js';
import { preloadGlobals } from './controllers/globals.controller.js';
import dotenv from 'dotenv';
dotenv.config();

export const createServer = async () => {
  await preloadGlobals();//Aqui estoy cargando los parametros globales en Redis
  const server = Hapi.server({
    port: 5000,
    host: '0.0.0.0',
    routes: {
    cors: {
      origin: ['*'] // Permite cualquier origen
    }
  }
  });

  server.route(authRoutes);

  return server;
};
