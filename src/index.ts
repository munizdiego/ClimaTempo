/**
 * Esta é uma aplicação de API RESTful para simulação de requisições HTTP
 * que possui como principal objetivo, a utilização de uma API externa e
 * a manipulação do Banco de Dados.
 * 
 * Este arquivo é a porta de entrada da api, que busca relacionar o modo
 * como as requisições serão gerenciadas, desde a porta, formato, inicialização e
 * encerramento de pools no banco de dados e por fim o direcionamento
 * dos arquivos de rotas.
 */

import express from "express";
import dotenv from "dotenv";
import { Database } from "./lib/dataBase";
import routes from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
  res.send("API");
});


/** 
 * Função para iniciar o servidor e conectar ao banco de dados
 */
const startServer = async () => {
  try {
    await Database.initialize();
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao iniciar a aplicação:", error);
    process.exit(1);
  }
};

/**
 * Função para encerrar corretamente a aplicação e liberar recursos
 */
const shutdownServer = async () => {
  console.log("Encerrando aplicação...");
  try {
    await Database.closePool();
    console.log("Banco de dados desconectado.");
  } catch (error) {
    console.error("Erro ao encerrar o pool de conexões:", error);
  } finally {
    process.exit(0);
  }
};

/**
 * Escutar eventos de encerramento para liberar recursos
 */
process.on("SIGINT", shutdownServer);
process.on("SIGTERM", shutdownServer);

startServer();