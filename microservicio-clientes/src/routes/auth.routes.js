import { registerClientControl } from '../controllers/auth.controller.js';

const authRoutes = [
  {
    method: 'POST',
    path: '/clients/register',
    handler: registerClientControl,
  },
];

export default authRoutes;
