/**
 * Esta classe de serviços manipula a criação e a verificação de tokens
 * para navegação nas rotas, através de controladores e middlewares.
 * 
 * API_KEY é a variável da API criada com o padrão MD5 e armazenada em .env
 * 
 * Método generateToken retorna uma chave token ascrecentando o payload
 * além de configurar o tempo de expiração em até uma hora para cada
 * token gerado.
 * 
 * Método verifyToken verifica a compatibilidade do token fornecido com o que
 * está armazenado em variável
 */

import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export class AuthServices {
  private static readonly SECRET_KEY = process.env.SECRET_KEY as string;

  public static generateToken(payload: object = { role: "admin" }): string {
    if (!this.SECRET_KEY) {
      throw new Error("SECRET_KEY não definida no arquivo .env");
    }

    return jwt.sign(payload, this.SECRET_KEY, { expiresIn: "1h" });
  }

  public static verifyToken(token: string): any {
    if (!this.SECRET_KEY) {
      throw new Error("SECRET_KEY não definida no arquivo .env");
    }

    try {
      return jwt.verify(token, this.SECRET_KEY);
    } catch (error) {
      throw new Error("Token inválido ou expirado");
    }
  }
}
