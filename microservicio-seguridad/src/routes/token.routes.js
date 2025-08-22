import { generateToken, validateTokenHandler, saveTokenHandler } from '../controllers/token.controller.js';

const tokenRoutes = [
    {
        method: 'GET',
        path: '/tokens/generate',
        handler: generateToken
    },
    {
        method: 'GET',
        path: '/tokens/validate/{token}',
        handler: validateTokenHandler
    },
    {
        method: 'POST',
        path: '/tokens/save',
        handler: saveTokenHandler
    }
];

export default tokenRoutes;
