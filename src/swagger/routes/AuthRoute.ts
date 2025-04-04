/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Utilize esta rota para gerar o token a ser utilizada pelas rotas protegidas
 *     tags: [AUTENTICAÇÃO]
 *     responses:
 *       200:
 *         description: Token JWT gerado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Credenciais inválidas.
 */
