/**
 * @swagger
 * /clima:
 *   get:
 *     summary: Retorna as condições climáticas de uma cidade ou coordenadas geográficas diretamente da API de OpenWeather
 *     tags: [CLIMA]
 *     parameters:
 *       - in: query
 *         name: lat
 *         schema:
 *           type: number
 *           format: float
 *         required: false
 *         description: "Latitude da cidade (ex: -15.7801)"
 *       - in: query
 *         name: lon
 *         schema:
 *           type: number
 *           format: float
 *         required: false
 *         description: "Longitude da cidade (ex: -47.9292)"
 *       - in: query
 *         name: q
 *         default: Rio de Janeiro
 *         schema:
 *           type: string
 *         required: false
 *         description: "Nome da cidade para consulta (ex: Brasília). Caso fornecido, ignora as coordenadas de latitude e longitude."
 *       - in: query
 *         name: units
 *         schema:
 *           default: metric
 *           type: string
 *           enum:
 *             - metric
 *             - imperial
 *             - standard
 *         required: false
 *         description: "Unidade de temperatura para a resposta (metric para Celsius, imperial para Fahrenheit). Caso não informado, utiliza a unidade padrão (Kelvin)."
 *       - in: query
 *         name: lang
 *         schema:
 *           type: string
 *           default: pt_br
 *         required: false
 *         description: " da resposta (ex: pt_br para português, en para inglês)."
 *     responses:
 *       200:
 *         description: "Dados de clima retornados com sucesso"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WeatherResponse'
 *       204:
 *         description: Nenhum dado de clima encontrado para a cidade ou coordenadas fornecidas
 *       400:
 *         description: Requisição inválida, verifique os parâmetros
 *       401:
 *         description: Não autorizado, verifique suas credenciais
 *       422:
 *         description: Erro de validação, os dados enviados estão incorretos
 *       500:
 *         description: Erro interno do servidor
 */
