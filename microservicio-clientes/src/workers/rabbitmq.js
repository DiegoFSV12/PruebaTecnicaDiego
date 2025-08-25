import amqp from 'amqplib';

const RABBIT_URL = process.env.RABBITMQ_URL;
const QUEUE = 'ordenes';


export async function sendOrder(order) {
  try {
    // Conectar a RabbitMQ
    const connection = await amqp.connect(RABBIT_URL);
    const channel = await connection.createChannel();

    await channel.assertQueue(QUEUE, { durable: true });

    channel.sendToQueue(QUEUE, Buffer.from(JSON.stringify(order)));
    console.log("CLIENTES - Orden enviada por rabbitmq:");

    setTimeout(() => {
      channel.close();
      connection.close();
    }, 500);
  } catch (error) {
    console.error("❌Error enviando la orden desde Clientes:", error.message);
  }
}

