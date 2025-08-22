import { getEmailById, sendEmail } from '../services/mail.service.js';

export async function emailSend(req,res) {
    try {
        const {id_cliente, asunto, contenido} = req.payload;
        const emailSended = await sendEmail(id_cliente,asunto,contenido);
        if(!emailSended) return res.response({ error: 'Error enviando correo', details: error.message }).code(404);
        return res.response({message: 'Email Enviado', id: emailSended}).code(201)
    } catch (error) {
        console.error(error);
        return res.response({ error: 'Error enviando correo', details: error.message }).code(500);
    }
}

export async function getEmail(req, res) {
    try {
        const { id } = req.params;
        const email = await getEmailById(id);
        if (!email) return res.response({ error: 'Email no encontrado' }).code(404);
        return res.response(email).code(200);
    } catch (error) {
        console.error(error);
        return res.response({ error: 'Error recuperando correo', details: error.message }).code(500);
    }
}


