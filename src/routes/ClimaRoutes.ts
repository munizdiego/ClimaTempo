/**
 * Arquivo índice de rotas específicas para "/clima", utilizando
 * os respectivos controladores da classe.
 */

import { Router } from "express";
import { ClimaControllers } from '../controllers/ClimaControllers';

const router = Router();

router.get("/clima", ClimaControllers.getClimaAPI);
router.get("/clima/dados", ClimaControllers.getClimaPostBancoDados);
router.get("/clima/database", ClimaControllers.getClimaBancoDados);

export default router;
