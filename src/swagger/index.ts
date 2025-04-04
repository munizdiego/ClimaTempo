/**
 * Índice que cria a aplicação UI de swagger e o rastreamento das rotas e schemas,
 * incorporando a rota /swagger para realizar as requisições http no frontend.
 */

import { Router } from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from "path";

const orderedApis = [
  path.join(__dirname, "../swagger/routes/AuthRoute.ts"), // Primeira rota
  path.join(__dirname, "../swagger/routes/ClimaRoute.ts"), // Primeira rota
  path.join(__dirname, "../swagger/routes/ClimaDadosRoute.ts"), // Segunda rota
  path.join(__dirname, "../swagger/routes/ClimaDatabaseRoute.ts"), // Terceira rota
];

const orderedSchemas = [
  path.join(__dirname, "../swagger/schemas/OpenWeatherSchema.ts"),
  path.join(__dirname, "../swagger/schemas/ClimaSchema.ts"),
];

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Consulta de Clima e Tempo",
      version: "1.0.0",
      description:
        "Previsão para os próximos 5 dias de qualquer lugar da Terra. Inclui dados de previsão do tempo para cada 3 horas.",
    },
    servers: [
      {
        url: "http://localhost:3321",
        description: "Servidor Local",
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        BearerAuth: [],
      },
    ],
  },
  apis: [...orderedApis, ...orderedSchemas],
};


const swaggerDocs = swaggerJsDoc(swaggerOptions);

export function setupSwagger(router: Router) {
  router.use(
    "/swagger",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocs, {
      swaggerOptions: {
        persistAuthorization: true, // Mantém o token salvo no Swagger UI
      },
    })
  );
}
