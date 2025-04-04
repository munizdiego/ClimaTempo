/**
 * @swagger
 * components:
 *   schemas:
 *     ClimaResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *         qtdResultado:
 *           type: integer
 *         consulta:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id_clima:
 *                 type: integer
 *               dt:
 *                 type: integer
 *               main:
 *                 type: object
 *                 properties:
 *                   temp:
 *                     type: number
 *                     format: float
 *                   temp_kf:
 *                     type: number
 *                     format: float
 *                   humidity:
 *                     type: integer
 *                   pressure:
 *                     type: integer
 *                   temp_max:
 *                     type: number
 *                     format: float
 *                   temp_min:
 *                     type: number
 *                     format: float
 *                   sea_level:
 *                     type: integer
 *                   feels_like:
 *                     type: number
 *                     format: float
 *                   grnd_level:
 *                     type: integer
 *               weather:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     icon:
 *                       type: string
 *                     main:
 *                       type: string
 *                     description:
 *                       type: string
 *               clouds:
 *                 type: object
 *                 properties:
 *                   all:
 *                     type: integer
 *               wind:
 *                 type: object
 *                 properties:
 *                   deg:
 *                     type: integer
 *                   gust:
 *                     type: number
 *                     format: float
 *                   speed:
 *                     type: number
 *                     format: float
 *               visibility:
 *                 type: integer
 *               pop:
 *                 type: number
 *                 format: float
 *               rain:
 *                 type: object
 *                 nullable: true
 *               sys:
 *                 type: object
 *                 properties:
 *                   pod:
 *                     type: string
 *               dt_txt:
 *                 type: string
 *                 format: date-time
 *               city:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   coord:
 *                     type: object
 *                     properties:
 *                       lat:
 *                         type: number
 *                         format: float
 *                       lon:
 *                         type: number
 *                         format: float
 *                   sunset:
 *                     type: integer
 *                   country:
 *                     type: string
 *                   sunrise:
 *                     type: integer
 *                   timezone:
 *                     type: integer
 *                   population:
 *                     type: integer
 *               data_criacao:
 *                 type: string
 *                 format: date-time
 */
