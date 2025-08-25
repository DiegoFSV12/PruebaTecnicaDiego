import {sendEmail} from '../services/mail.service.js'
import amqp from 'amqplib';

const RABBIT_URL = process.env.RABBITMQ_URL;
const QUEUE = 'ordenes';

export async function receiveOrder() {
  try {
    const connection = await amqp.connect(RABBIT_URL);
    const channel = await connection.createChannel();
    await channel.assertQueue(QUEUE, { durable: true });

    console.log("CORREOS - Esperando órdenes en la cola :", QUEUE);

    channel.consume(QUEUE, async msg => {
      if (msg !== null) {
        const {id_cliente, asunto, contenido} = JSON.parse(msg.content.toString());
        console.log("CORREOS - Orden recibida:");
        const email = await sendEmail(id_cliente,asunto,contenido);
        console.log("Se envio el email de bienvenida : ",email)
        
        channel.ack(msg);
      }
    });
  } catch (error) {
    console.error("❌ Error recibiendo orden en Correos:", error.message);
  }
}
