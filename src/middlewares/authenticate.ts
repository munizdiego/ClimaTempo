/**
 * Este middleware fornece uma proteção nas rotas as quais ele estiver,
 * garantindo segurança por meio de verificação de atenticidade do token
 */

import { Request, Response, NextFunction } from "express";
import { AuthServices } from "../services/AuthServices";

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ error: "Token não fornecido ou inválido" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    (req as any).user = AuthServices.verifyToken(token);
    next();
  } catch (error) {
    res.status(401).json({ error: "Credenciais inválidas" });
    return;
  }
};
