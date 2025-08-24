// sendOrder.js
import amqp from 'amqplib';

const RABBIT_URL = process.env.RABBIT_URL || 'amqp://guest:guest@rabbitmq:5672';
const QUEUE = 'ordenes';


export async function sendOrder(order) {
  try {
    // Conectar a RabbitMQ
    const connection = await amqp.connect(RABBIT_URL);
    const channel = await connection.createChannel();

    // Asegurar que la cola exista
    await channel.assertQueue(QUEUE, { durable: true });

    // Enviar mensaje
    channel.sendToQueue(QUEUE, Buffer.from(JSON.stringify(order)));
    console.log("✅ Orden enviada:", order);

    // Cerrar después de un momento
    setTimeout(() => {
      channel.close();
      connection.close();
    }, 500);
  } catch (error) {
    console.error("❌ Error enviando la orden:", error.message);
  }
}

