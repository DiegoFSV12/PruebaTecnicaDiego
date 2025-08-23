import * as MailModel from '../models/mail.model.js';

export const getEmailById = async (id) => {
    return await MailModel.getEmailById(id);
};

export const sendEmail = async (id,asunto,contenido) => {
    return await MailModel.sendEmail(id,asunto,contenido);
};
