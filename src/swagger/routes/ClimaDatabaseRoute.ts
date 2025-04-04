/**
 * @swagger
 * /clima/database:
 *   get:
 *     summary: Utilize esta rota para exibir as condições climáticas a partir das informações armazenadas no Banco de Dados
 *     security:
 *       - BearerAuth: []
 *     tags:
 *       - CLIMA
 *     parameters:
 *       - in: query
 *         name: city
 *         schema:
 *           type: string
 *           default: Rio de Janeiro
 *         required: true
 *         description: "Digite um nome de cidade que esteja armazenado no banco de dados"
 *       - in: query
 *         name: tempMin
 *         schema:
 *           type: integer
 *         required: false
 *         description: "Temperatura mínima em Celsius"
 *       - in: query
 *         name: tempMax
 *         schema:
 *           type: integer
 *         required: false
 *         description: "Temperatura máxima em Celsius"
 *       - in: query
 *         name: weather
 *         schema:
 *           type: string
 *         required: false
 *         description: "Condições climáticas (ex: céu limpo, nublado)"
 *       - in: query
 *         name: pod
 *         schema:
 *           type: string
 *         required: false
 *         description: "Período do dia da condição climática (ex.: 'n' - noite, 'd' - dia)"
 *       - in: query
 *         name: dt_txt
 *         schema:
 *           type: string
 *         required: false
 *         description: "Data e hora para previsões a cada 3 horas (ex.: '2025-04-04 00:00:00')"
 *     responses:
 *       200:
 *         description: "Dados de clima retornados com sucesso"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ClimaResponse'
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
