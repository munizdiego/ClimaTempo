import express from "express";
import { setupSwagger } from "../swagger"; // Importa a configuração do Swagger
import comprasRoutes from "./ComprasPublicasRoutes"; // Importa as rotas de compras

const router = express.Router();

// Configurar Swagger na rota principal
setupSwagger(router);

// Adicionar outras rotas
router.use(comprasRoutes);

export default router;
