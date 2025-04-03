/**
 * Arquivo índice responsável pelo gerenciamento de rotas, redirecionando 
 * para os destinos correspondentes, utilizando Swagger ou outros arquivos.
 */

import express from "express";
import { setupSwagger } from "../swagger";

import climaRoutes from "./ClimaRoutes"

const router = express.Router();

setupSwagger(router); // Configurar Swagger na rota principal

router.use(climaRoutes); // Outras rotas adicionadas

export default router;
