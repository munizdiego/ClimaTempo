import { Router } from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from "path";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Compras Públicas",
      version: "1.0.0",
      description: "Documentação da API de compras públicas",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor Local",
      },
    ],
  },
  apis: [
    path.join(__dirname, "../routes/*.ts"),
    path.join(__dirname, "../swagger/schemas/*.ts"),
  ],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export function setupSwagger(router: Router) {
  router.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}
