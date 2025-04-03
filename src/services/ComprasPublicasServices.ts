/**
 * Esta classe de serviços tem como atribuição realizar a requisição HTTP
 * através do link público do PCNP, cuja as requisições deverão ser tratadas
 * conforme cada situação, como sucesso, não encontrado e erros de validação.
 * 
 * getContratacoes recebe os parametros repassados pelo usuário conforme a tipagem
 * da interface Parametros, conforme é esperado pelo método get. Logo em seguida,
 * havendo o sucesso, retornará uma array de objetos conforme tipagem de Contratacao.
*/

import axios from "axios"; // Remova a importação de AxiosError, pois ele é usado implicitamente
import { Parametros } from "../interfaces/ComprasPublicas";
import { Contratacao } from "../interfaces/Contratacoes";

const API_URL = "https://pncp.gov.br/api/consulta/v1/contratacoes/publicacao";

/**
 * Classe de serviços para interagir com a API de Contratações Públicas.
 */
export class ComprasPublicasServices {
    /**
     * Método para obter a lista de contratações com base nos parâmetros fornecidos.
     * @param parametros Parâmetros de consulta da API.
     * @returns Uma lista de objetos Contratacao ou null caso não haja dados.
     * @throws Exceção caso ocorra um erro de comunicação ou validação.
     */
    public static async getContratacoes(parametros: Parametros): Promise<Contratacao[] | null> {
        try {
            const response = await axios.get(API_URL, { params: parametros });

            if (response.status === 200) {
                return response.data as Contratacao[];
            }

            if (response.status === 204) {
                return null;
            }

            throw new Error(`Resposta inesperada da API: ${response.status}`);
        } catch (error) {
            return this.handleApiError(error);
        }
    }

    /**
     * Lida com erros da API de forma detalhada.
     * @param error Erro capturado durante a comunicação com a API.
     * @throws Exceção com a mensagem de erro apropriada.
     */
    private static handleApiError(error: any): never {  // Use 'any' porque AxiosError não é importado diretamente
        if (error.response) {
            const { status } = error.response;

            // Mapeamento de erros específicos da API
            switch (status) {
                case 400:
                    throw new Error("Requisição inválida. Verifique os parâmetros enviados.");
                case 401:
                    throw new Error("Não autorizado. Verifique suas credenciais.");
                case 422:
                    throw new Error("Erro de validação. Dados enviados estão incorretos.");
                case 500:
                    throw new Error("Erro interno do servidor. Tente novamente mais tarde.");
                default:
                    throw new Error(`Erro desconhecido: ${status}.`);
            }
        }

        // Se não houver resposta da API, o erro é relacionado à comunicação
        console.error("Erro ao conectar à API:", error.message);
        throw new Error("Falha na comunicação com a API. Verifique sua conexão.");
    }
}
