/**
 * Arquivo de roteamento específico para a rota "/auth", utilizando
 * os controladores correspondentes da classe.
 * 
 * /auth/login - Retorna o token gerado para autenticidade em rotas protegidas.
 */

import { Router } from "express";
import { AuthController } from './../controllers/AuthController';

const router = Router();

router.post("/auth/login", AuthController.getToken);

export default router;
