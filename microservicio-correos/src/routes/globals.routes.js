import { getGlobals } from '../controllers/globals.controller.js';

const globalsRoutes = [
    {
        method: 'GET',
        path: '/globals',
        handler: getGlobals,
    },
];

export default globalsRoutes;
