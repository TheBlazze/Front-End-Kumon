const app = require("./app");

const PORT = 3000;

const start = async () => {
  try {
    await app.listen({ port: PORT });
    app.log.info(`Servidor esta rodando em http://localhost:${PORT}`);
  } catch (error) {
    app.log.error("A Porta esta em uso", error);
    process.exit(1);
  }
};

start();
