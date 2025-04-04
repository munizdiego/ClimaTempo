/**
 * Interface de informações amarzenadas no banco de dados
 */

import { City, Clouds, Main, Rain, Sys, Weather, Wind } from "./OpenWeather";

export interface ClimaResponse {
  id: number;
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain: Rain;
  sys: Sys;
  dt_txt: Date;
  city: City;
  data_criacao: Date;
}