/**
 * Esta classe de controladores é responsável por interpretar as requisições
 * HTTP e executar a programação conforme cada rota, tratando as respostas
 * conforme o contexto, como retornar diretamente da API pública ou
 * retornar as ações propostas pelo Recrutador, como CRUD do Banco de Dados.
 *
 * Método getClima obtém os dados do clima com base nos parâmetros fornecidos,
 * e tipados conforme ParametrosWeather, retornando informações diretamente 
 * da API pública do OpenWeather.
 * 
 * Método getClimaPostBancoDados recebe parâmetros para filtragem conforme tipado
 * por ParametrosWeather, no entanto, se a pesquisa não retornar nulo, ele 
 * utilizará o método createClimaDB para inserir ao banco e em seguida retornará
 * os resultados ao usuário.
 * 
 * Método getClimaBancoDados recebe parâmetros dinâmicos para filtragem de
 * dados diretamente do banco de dados, inseridos a partir do método anterior,
 * o método getClimaPostBancoDados.
 * 
 * Se deseja consultar e salvar novos dados, utilize primeiro getClimaPostBancoDados
 * e em seguida getClimaBancoDados para maiores detalhes.
*/

import { Request, Response } from "express";
import { ClimaServices } from "./../services/ClimaServices";
import { ParametrosClimaBancoDados, ParametrosWeather } from "../interfaces/Parametros";

export class ClimaControllers {
  public static async getClimaAPI(req: Request, res: Response) {
    const parametros: ParametrosWeather =
      req.query as unknown as ParametrosWeather;
    try {
      const response = await ClimaServices.getClimaCidade(
        parametros as ParametrosWeather
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

  public static async postClimaPostBancoDados(req: Request, res: Response) {
    const parametros: ParametrosWeather =
      req.query as unknown as ParametrosWeather;
    try {
      const response: any = await ClimaServices.getClimaCidade(
        parametros as ParametrosWeather
      );
      if (response === null) {
        res.status(404).json({
          message: "Não encontrado!",
          consulta: null,
        });
      } else {
        const { list, city } = response;

        for (let clima of list) {
          await ClimaServices.createClimaDB(clima, city);
        }

        res.status(200).json({
          message: "Sucesso!",
          qtdResultado: response.length,
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

  public static async getClimaBancoDados(req: Request, res: Response) {
    const parametros: ParametrosClimaBancoDados =
      req.query as unknown as ParametrosClimaBancoDados;
    try {
      const response: any = await ClimaServices.getClimaDB(parametros);
      if (response === null) {
        res.status(404).json({
          message: "Não encontrado!",
          consulta: null,
        });
      } else {
        res.status(200).json({
          message: "Sucesso!",
          qtdResultado: response.length,
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
}
