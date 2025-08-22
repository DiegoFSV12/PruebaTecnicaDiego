import { emailSend, getEmail } from '../controllers/mail.controller.js';

const mailRoutes = [
  {
    method: 'POST',
    path: '/email/send',
    handler: emailSend,
  },
  {
    method: 'GET',
    path: '/email/{id}',
    handler: getEmail,
  }
];

export default mailRoutes;
