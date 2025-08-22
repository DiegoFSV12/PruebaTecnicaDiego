import { getAllGlobals } from '../services/globals.service.js';

export async function preloadGlobals() {
    try {
        const results = await getAllGlobals();
        console.log('Parámetros globales precargados en Redis', results);
    } catch (error) {
        console.error('Error precargando parámetros globales:', error);
    }
}