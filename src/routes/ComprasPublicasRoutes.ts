/**
 * @swagger
 * /compras/contratacoes:
 *   get:
 *     summary: Retorna uma lista de contratações publicadas
 *     tags: [PNCP]
 *     parameters:
 *       - in: query
 *         name: dataInicial
 *         schema:
 *           type: string
 *         required: true
 *         description: "Data de início (ano, mês e dia) - ex: 20250430"
 *       - in: query
 *         name: dataFinal
 *         schema:
 *           type: string
 *         required: true
 *         description: "Data final (ano, mês e dia) - ex: 20250430"
 *       - in: query
 *         name: codigoModalidadeContratacao
 *         schema:
 *           type: integer
 *         required: true
 *         description: Código de Modalidade de Contratação (Leia Readme.md)
 *       - in: query
 *         name: uf
 *         schema:
 *           type: string
 *         required: true
 *         description: Sigla de Unidade Federativa
 *       - in: query
 *         name: idUsuario
 *         schema:
 *           type: integer
 *         required: false
 *         description: Id de identificação do usuário (Leia Readme.md)
 *       - in: query
 *         name: codigoMunicipioIbge
 *         schema:
 *           type: integer
 *         required: false
 *         description: Código do Município
 *       - in: query
 *         name: cnpj
 *         schema:
 *           type: string
 *         required: false
 *         description: Número de CNPJ da Entidade Pública
 *       - in: query
 *         name: pagina
 *         schema:
 *           type: number
 *         required: true
 *         description: Número da página
 *       - in: query
 *         name: tamanhoPagina
 *         schema:
 *           type: number
 *         required: false
 *         description: Número de consultas por página
 *     responses:
 *       200:
 *         description: Lista de contratações retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contratacao'
 *       204:
 *         description: Nenhuma contratação encontrada
 *       400:
 *         description: Requisição inválida, verifique os parâmetros
 *       401:
 *         description: Não autorizado, verifique suas credenciais
 *       422:
 *         description: Erro de validação, os dados enviados estão incorretos
 *       500:
 *         description: Erro interno do servidor
 */

import { Router } from "express";
import { ComprasPublicasController } from "../controllers/ComprasPublicasController";

const router = Router();

router.get("/compras/contratacoes", ComprasPublicasController.getCompras);
router.get("/compras/contratacoes/pesquisa", ComprasPublicasController.getPesquisaCompras);

export default router;
