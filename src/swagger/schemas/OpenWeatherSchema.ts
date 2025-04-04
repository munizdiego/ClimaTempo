/**
 * @swagger
 * components:
 *   schemas:
 *     OpenWeatherResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *         consulta:
 *           type: object
 *           properties:
 *             cod:
 *               type: string
 *             message:
 *               type: integer
 *             cnt:
 *               type: integer
 *             list:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   dt:
 *                     type: integer
 *                   main:
 *                     type: object
 *                     properties:
 *                       temp:
 *                         type: number
 *                         format: float
 *                       feels_like:
 *                         type: number
 *                         format: float
 *                       temp_min:
 *                         type: number
 *                         format: float
 *                       temp_max:
 *                         type: number
 *                         format: float
 *                       pressure:
 *                         type: integer
 *                       sea_level:
 *                         type: integer
 *                       grnd_level:
 *                         type: integer
 *                       humidity:
 *                         type: integer
 *                       temp_kf:
 *                         type: number
 *                         format: float
 *                   weather:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                         main:
 *                           type: string
 *                         description:
 *                           type: string
 *                         icon:
 *                           type: string
 *                   clouds:
 *                     type: object
 *                     properties:
 *                       all:
 *                         type: integer
 *                   wind:
 *                     type: object
 *                     properties:
 *                       speed:
 *                         type: number
 *                         format: float
 *                       deg:
 *                         type: integer
 *                       gust:
 *                         type: number
 *                         format: float
 *                   visibility:
 *                     type: integer
 *                   pop:
 *                     type: number
 *                     format: float
 *                   rain:
 *                     type: object
 *                     properties:
 *                       "3h":
 *                         type: number
 *                         format: float
 *                     nullable: true
 *                   sys:
 *                     type: object
 *                     properties:
 *                       pod:
 *                         type: string
 *                   dt_txt:
 *                     type: string
 *                     format: date-time
 */
