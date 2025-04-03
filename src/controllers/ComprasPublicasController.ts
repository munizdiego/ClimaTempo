import { Request, Response } from "express";
import { ComprasPublicasServices } from "../services/ComprasPublicasServices";
import { Parametros } from "../interfaces/ComprasPublicas";

export class ComprasPublicasController {
  public static async getCompras(req: Request, res: Response) {
    const parametros: Parametros = req.query as unknown as Parametros;
    try {
      const response = await ComprasPublicasServices.getContratacoes(
        parametros as Parametros
      );
      if (response === null) {
        res.status(404).json({
          message: "Não encontrado!",
          consulta: null,
        });
      } else {
        res.status(200).json({
          message: "Sucesso",
          consulta: response,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({
          message: "Erro do servidor",
          error: error.message,
        });
      } else {
        res.status(500).json({
          message: "Erro desconhecido",
        });
      }
    }
  }

  public static async getPesquisaCompras(req: Request, res: Response) {
    const parametros: Parametros = req.query as unknown as Parametros;
    try {
      const response: any = await ComprasPublicasServices.getContratacoes(
        parametros as Parametros
      );
      if (response === null) {
        res.status(404).json({
          message: "Não encontrado!",
          consulta: null,
        });
      } else {
        const atributo = "numeroControlePNCP"; // Nome da chave a ser filtrada
        const parametro = "60448040000122-1-000083/2025"; // Valor esperado

        const filteredData = response.data.filter(
          (item: any) => item[atributo] === parametro
        );

        res.status(200).json({
          message: "Sucesso",
          consulta: filteredData,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({
          message: "Erro do servidor",
          error: error.message,
        });
      } else {
        res.status(500).json({
          message: "Erro desconhecido",
        });
      }
    }
  }
}
