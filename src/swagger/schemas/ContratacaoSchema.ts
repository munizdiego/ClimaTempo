/**
 * @swagger
 * components:
 *   schemas:
 *     Contratacao:
 *       type: object
 *       properties:
 *         modoDisputaId:
 *           type: integer
 *           example: 1
 *         amparoLegal:
 *           type: object
 *           properties:
 *             codigo:
 *               type: integer
 *               example: 2
 *             descricao:
 *               type: string
 *               example: "Lei de Licitações e Contratos Administrativos"
 *             nome:
 *               type: string
 *               example: "Lei 14.133/2021"
 *         dataAberturaProposta:
 *           type: string
 *           format: date-time
 *           example: "2025-04-01T08:00:00"
 *         dataEncerramentoProposta:
 *           type: string
 *           format: date-time
 *           example: "2025-04-16T09:30:00"
 *         srp:
 *           type: boolean
 *           example: false
 *         orgaoEntidade:
 *           type: object
 *           properties:
 *             cnpj:
 *               type: string
 *               example: "03318233000125"
 *             razaoSocial:
 *               type: string
 *               example: "SECRETARIA DE ESTADO DA AGRICULTURA"
 *             poderId:
 *               type: string
 *               example: "E"
 *             esferaId:
 *               type: string
 *               example: "D"
 *         anoCompra:
 *           type: integer
 *           example: 2025
 *         numeroCompra:
 *           type: string
 *           example: "90001"
 *         objetoCompra:
 *           type: string
 *           example: "Aquisição de insumos agrícolas"
 *         valorTotalEstimado:
 *           type: number
 *           example: 993149.96
 */
