import { registerCliente } from '../controllers/auth.controller.js';

const authRoutes = [
  {
    method: 'POST',
    path: '/register',
    handler: registerCliente,
  },
];

export default authRoutes;
