/**
 * @swagger
 * components:
 *   schemas:
 *     WeatherResponse:
 *       type: object
 *       properties:
 *         coord:
 *           type: object
 *           properties:
 *             lon:
 *               type: number
 *               format: float
 *               example: -47.9292
 *             lat:
 *               type: number
 *               format: float
 *               example: -15.7801
 *         weather:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 500
 *               main:
 *                 type: string
 *                 example: "Rain"
 *               description:
 *                 type: string
 *                 example: "chuva leve"
 *               icon:
 *                 type: string
 *                 example: "10d"
 *               pop:
 *                 type: number
 *                 format: float
 *                 example: 0.58
 *               rain:
 *                 type: object
 *                 properties:
 *                   "3h":
 *                     type: number
 *                     format: float
 *                     example: 0.74
 *         base:
 *           type: string
 *           example: "stations"
 *         main:
 *           type: object
 *           properties:
 *             temp:
 *               type: number
 *               format: float
 *               example: 93.02
 *             feels_like:
 *               type: number
 *               format: float
 *               example: 100.13
 *             temp_min:
 *               type: number
 *               format: float
 *               example: 89.06
 *             temp_max:
 *               type: number
 *               format: float
 *               example: 93.02
 *             pressure:
 *               type: number
 *               format: float
 *               example: 1010
 *             humidity:
 *               type: number
 *               format: float
 *               example: 49
 *             sea_level:
 *               type: number
 *               format: float
 *               example: 1010
 *             grnd_level:
 *               type: number
 *               format: float
 *               example: 1010
 *             temp_kf:
 *               type: number
 *               format: float
 *               example: 2.2
 *         visibility:
 *           type: integer
 *           example: 10000
 *         wind:
 *           type: object
 *           properties:
 *             speed:
 *               type: number
 *               format: float
 *               example: 8.25
 *             deg:
 *               type: integer
 *               example: 162
 *             gust:
 *               type: number
 *               format: float
 *               example: 8.16
 *         clouds:
 *           type: object
 *           properties:
 *             all:
 *               type: integer
 *               example: 20
 *         dt:
 *           type: integer
 *           example: 1743703200
 *         sys:
 *           type: object
 *           properties:
 *             type:
 *               type: integer
 *               example: 1
 *             id:
 *               type: integer
 *               example: 102
 *             country:
 *               type: string
 *               example: "BR"
 *             sunrise:
 *               type: integer
 *               example: 1743685135
 *             sunset:
 *               type: integer
 *               example: 1743734907
 *             pod:
 *               type: string
 *               example: "d"
 *         timezone:
 *           type: integer
 *           example: -10800
 *         id:
 *           type: integer
 *           example: 3451190
 *         name:
 *           type: string
 *           example: "Brasília"
 *         cod:
 *           type: integer
 *           example: 200
 *         dt_txt:
 *           type: string
 *           format: date-time
 *           example: "2025-04-03 18:00:00"
 */
