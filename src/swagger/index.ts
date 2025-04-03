/**
 * Índice que cria a aplicação UI de swagger e o rastreamento das rotas e schemas,
 * incorporando a rota /swagger para realizar as requisições http no frontend.
 */

import { Router } from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from "path";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Consulta de Clima e Tempo",
      version: "1.0.0",
      description: "Previsão para os próximos 5 dias de qualquer lugar da Terra. Inclui dados de previsão do tempo para cada 3 horas.",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor Local",
      },
    ],
  },
  apis: [
    path.join(__dirname, "../swagger/routes/*.ts"),   // importação das rotas para utilização no swagger
    path.join(__dirname, "../swagger/schemas/*.ts"),  // importação dos schemas para utilização no swagger
  ],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export function setupSwagger(router: Router) {
  router.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}
