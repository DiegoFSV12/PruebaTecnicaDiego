// receiveOrder.js
import amqp from 'amqplib';

const RABBIT_URL = process.env.RABBIT_URL || 'amqp://guest:guest@rabbitmq:5672';
const QUEUE = 'ordenes';

export async function receiveOrder() {
  try {
    // Conectar a RabbitMQ
    const connection = await amqp.connect(RABBIT_URL);
    const channel = await connection.createChannel();

    // Asegurar que la cola exista
    await channel.assertQueue(QUEUE, { durable: true });

    console.log("📡 Esperando órdenes en la cola:", QUEUE);

    // Recibir mensajes
    channel.consume(QUEUE, msg => {
      if (msg !== null) {
        const content = JSON.parse(msg.content.toString());
        console.log("📥 Orden recibida:", content);
        return content;

        // Confirmar (acknowledge) que se procesó
        channel.ack(msg);
      }
    });
  } catch (error) {
    console.error("❌ Error recibiendo orden:", error.message);
  }
}
