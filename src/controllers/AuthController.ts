/**
 * Esta clsse de contrlador é responsável por interpretar as requisições
 * HTTP e executar ações focadas apenas para autenticação.
 * 
 * Método getToken, gera um token a partir da classe AuthServices no método
 * generateToken e retorna ao usuário para autenticar rotas que estarão protegidas. 
 */

import { AuthServices } from './../services/AuthServices';
import { Request, Response } from "express";

export class AuthController {
  public static async getToken(req: Request, res: Response) {
    try {
      const token = AuthServices.generateToken()
      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: "Erro ao gerar o token" });
    }
  }
}
