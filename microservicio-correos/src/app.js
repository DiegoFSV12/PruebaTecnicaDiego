import Hapi from '@hapi/hapi';
import mailRoutes from './routes/mail.routes.js';
import dotenv from 'dotenv';
dotenv.config();

export const createServer = async () => {
  const server = Hapi.server({
    port: 8000,
    host: '0.0.0.0',
  });

  server.route(mailRoutes);

  return server;
};
