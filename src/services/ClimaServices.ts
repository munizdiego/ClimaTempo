/**
 * Esta classe de serviços é responsável por realizar requisições HTTP
 * para o link público de OpenWeather, tratando as respostas conforme o
 * contexto, como sucesso, não encontrado ou erros de validação.
 *
 * O método getClimaCidade recebe os parâmetros fornecidos pelo usuário,
 * seguindo a tipagem da interface ParametrosWeather. Ao ser executado com sucesso,
 * retorna um array de objetos tipados como WeatherResponse.
 *
 * API_KEY é a variável da API Key esperada pela requisição de OpenWather
 *
 * Método getClimaCidade é reponsável por obter a cidade com base nos parâmetros fornecidos.
 * @param parametros Parâmetros de consulta da API.
 * @parametrosComPadrao são parâmetros pré-estabelecidos para a pesquisa, podendo ser modificados caso o usuário incluir na requisição.
 * @returns O objeto de WeatherResponse ou null caso ocorra 404.
 * @throws Exceção caso ocorra um erro de comunicação ou validação.
 *
 *
 * Método handleApiError lida com erros da API de forma detalhada.
 * @param error Erro capturado durante a comunicação com a API.
 * @throws Exceção com a mensagem de erro apropriada.
 */

import axios from "axios";
import dotenv from "dotenv";
import { ParametrosClimaBancoDados, ParametrosWeather } from "../interfaces/Parametros";
import { City, WeatherArray, WeatherResponse } from "../interfaces/OpenWeather";
import { Database } from "../lib/dataBase";
import { OkPacketParams, RowDataPacket } from "mysql2";
import { ClimaResponse } from "../interfaces/Clima";

dotenv.config();

const API_URL = "https://api.openweathermap.org/data/2.5/forecast";

export class ClimaServices {
  private static readonly API_KEY = process.env.OPENWEATHER_API_KEY;

  public static async getClimaCidade(
    parametros: ParametrosWeather
  ): Promise<WeatherResponse[] | null> {
    try {
      const parametrosPadrao = {
        units: "metric",
        lang: "pt_br",
        ...parametros,
      };

      const response = await axios.get(API_URL, {
        params: { ...parametrosPadrao, appid: this.API_KEY },
      });

      if (response.status === 200) {
        return response.data as WeatherResponse[];
      }

      if (response.status === 204) {
        return null;
      }

      throw new Error(`Resposta inesperada da API: ${response.status}`);
    } catch (error) {
      return this.handleApiError(error);
    }
  }

  private static handleApiError(error: any): never {
    if (error.response) {
      const { status } = error.response;

      switch (status) {
        case 400:
          throw new Error(
            "Requisição inválida. Verifique os parâmetros enviados."
          );
        case 401:
          throw new Error("Não autorizado. Verifique suas credenciais.");
        case 422:
          throw new Error(
            "Erro de validação. Dados enviados estão incorretos."
          );
        case 500:
          throw new Error(
            "Erro interno do servidor. Tente novamente mais tarde."
          );
        default:
          throw new Error(`Erro desconhecido: ${status}.`);
      }
    }

    // Se não houver resposta da API, o erro é relacionado à comunicação
    console.error("Erro ao conectar à API:", error.message);
    throw new Error("Falha na comunicação com a API. Verifique sua conexão.");
  }

  public static async createClimaDB(
    clima: WeatherArray,
    city: City
  ): Promise<boolean> {
    const result = (await Database.query(
      `INSERT INTO clima (dt, main, weather, clouds, wind, visibility, pop, rain, sys, dt_txt, city)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        clima.dt === undefined ? null : clima.dt,
        clima.main === undefined ? null : JSON.stringify(clima.main),
        clima.weather === undefined ? null : JSON.stringify(clima.weather),
        clima.clouds === undefined ? null : JSON.stringify(clima.clouds),
        clima.wind === undefined ? null : JSON.stringify(clima.wind),
        clima.visibility === undefined ? null : clima.visibility,
        clima.pop === undefined ? null : clima.pop,
        clima.rain === undefined
          ? null
          : JSON.stringify(
              Object.fromEntries(
                Object.entries(clima.rain).map(([key, value]) => [
                  key,
                  String(value),
                ])
              )
            ),
        clima.sys === undefined ? null : JSON.stringify(clima.sys),
        clima.dt_txt === undefined ? null : clima.dt_txt,
        JSON.stringify(city),
      ]
    )) as OkPacketParams;

    if ((result.affectedRows ?? 0) > 0) {
      return true;
    } else {
      return false;
    }
  }

  public static async getClimaDB(
    parametros: ParametrosClimaBancoDados
  ): Promise<ClimaResponse[] | null> {
    let conditions: string[] = [];
    let values: any[] = [];

    if (parametros.city) {
      conditions.push(`JSON_CONTAINS(city, ?, '$')`);
      values.push(JSON.stringify({ name: parametros.city }));
    }
    if (parametros.weather) {
      conditions.push(`JSON_CONTAINS(weather, ?, '$')`);
      values.push(JSON.stringify({ description: parametros.weather }));
    }
    if (parametros.tempMin) {
      conditions.push(`JSON_EXTRACT(main, '$.temp') >= ?`);
      values.push(Number(parametros.tempMin));
    }
    if (parametros.tempMax) {
      conditions.push(`JSON_EXTRACT(main, '$.temp') <= ?`);
      values.push(Number(parametros.tempMax));
    }
    if (parametros.pod) {
      conditions.push(`JSON_EXTRACT(sys, '$.pod') = ?`);
      values.push(parametros.pod);
    }
    if (parametros.dt_txt) {
      conditions.push(`dt_txt = ?`);
      values.push(parametros.dt_txt);
    }

    // Se não houver filtros, retorna todos os dados
    const whereClause =
      conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

    const query = `SELECT * FROM clima ${whereClause}`;

    const result = (await Database.query(query, values)) as RowDataPacket[];

    return result.length > 0 ? (result as ClimaResponse[]) : null;
  }

}
