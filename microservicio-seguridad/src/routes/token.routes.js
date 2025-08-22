import { generateTokenController, validateTokenController, updateTokenController } from '../controllers/token.controller.js';

const tokenRoutes = [
    {
        method: 'GET',
        path: '/tokens/generate',
        handler: generateTokenController
    },
    {
        method: 'GET',
        path: '/tokens/validate/{token}',
        handler: validateTokenController
    },
    {
        method: 'POST',
        path: '/tokens/update',
        handler: updateTokenController
    }
];

export default tokenRoutes;
