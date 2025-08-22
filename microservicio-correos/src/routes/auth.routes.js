import { registerCliente } from '../controllers/auth.controller.js';

const authRoutes = [
  {
    method: 'POST',
    path: '/clients/register',
    handler: registerCliente,
  },
];

export default authRoutes;
