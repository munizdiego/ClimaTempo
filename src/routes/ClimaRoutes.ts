/**
 * Arquivo de roteamento específico para a rota "/clima", utilizando
 * os controladores correspondentes da classe.
 * 
 * /clima - Realiza uma consulta dinâmica à API externa do OpenWeather.
 * /clima/dados - Realiza uma consulta dinâmica à API externa e salva os dados no banco de dados.
 * /clima/database - Realiza uma consulta dinâmica aos dados armazenados no banco de dados.
 */

import { Router } from "express";
import { ClimaControllers } from '../controllers/ClimaControllers';
import { authMiddleware } from "../middlewares/authenticate";

const router = Router();

router.get("/clima", authMiddleware, ClimaControllers.getClimaAPI);
router.post("/clima/dados", authMiddleware, ClimaControllers.postClimaPostBancoDados);
router.get("/clima/database", authMiddleware, ClimaControllers.getClimaBancoDados);

export default router;
