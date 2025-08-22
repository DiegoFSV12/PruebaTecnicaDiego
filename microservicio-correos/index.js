import Hapi from '@hapi/hapi';

const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT || 6000,
        host: '0.0.0.0'
    });

    await server.start();
    console.log(`🚀 Microservicio de Correos corriendo en: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
