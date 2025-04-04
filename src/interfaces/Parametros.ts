/**
 * Os parâmetros são interfaces usadas para realizar
 * as consultas de maneira segura, garantindo que os dados
 * sejam tipados corretamente de acordo com sua "natureza".
 */

export interface ParametrosWeather {
  id?: number;       // id da cidade
  lat?: number;      // Latitude
  lon?: string       // Longitude
  mode?: string      // Formato da reposta, padronizado em JSON
  units?: string     // Unidades de medidas, padrão "standard"
  lang?: string      // Idioma
  q?: string         // Nome da cidade
  appid: string      // API Key
}

export interface ParametrosClimaBancoDados {
  city?: string;          // Nome da cidade
  weather?: string;       // Clima, "céu limpo", "nublado"
  tempMin?: number        // Temperatura mínima
  tempMax?: number        // Temperatura máxima
  pod?: string            // Período do dia, "d" - dia e "n" - noite
  dt_txt?: Date           // Data e hora previstos
  data_criacao: Date      // Data da inclusão no banco de dados
}
