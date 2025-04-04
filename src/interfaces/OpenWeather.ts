/**
 * Interface dos dados da API de OpenWeather, com ajustes para melhor manipulação
 * das requisições HTTP e manipulação de CRUD no Banco de Dados.
 */

// Tipagem para condições de clima
export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf?: number;
}

// Tipagem para as condições do tempo e visibilidade
export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

// Tipagem para condições de vento
export interface Wind {
  speed: number;
  deg: number;
  gust?: number;
}

// Tipagem para condições de nuvens
export interface Clouds {
  all: number;
}

// Tipagem para chuvas, com índice variável
export interface Rain {
  [key: string]: string | number;
}

// Tipagem para o sistema de dados
export interface Sys {
  type?: number;
  id: number;
  country: string;
  sunrise?: number;
  sunset?: number;
  pod?: string;
}

export interface WeatherArray {
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
}

export interface Coord {
  lat: number;
  lon: number;
}

export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

// Tipagem principal para a resposta do clima do local requisitado
export interface OpenWeatherResponse {
  cod?: number;
  message?: string;
  cnt?: number;
  city: City;
  list: WeatherArray[];
}
