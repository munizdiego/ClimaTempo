/**
 * Esta é uma classe de conexão com o banco de dados no qual
 * utilizo a um bom tempo para as aplicações de API.
 * 
 * No arquivo de entrada principal API, deve ser chamado o método
 * Database.initialize() uma vez antes de qualquer outra parte.
 * Como é um método assíncrono, ela espera usar await ao chamá-la 
 * dentro de uma função async de nível superior.
 */

import mysql, { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

interface QueryResult<T> extends Array<T> {}

export class Database {
    private static pool: Pool | null = null;

    private constructor() {
        // Impede a criação de novas instâncias da classe Database
    }

    /**
     * Inicializa o pool de conexões do MySQL se ele ainda não tiver sido criado. 
     * Este método deve ser chamado uma única vez no início da aplicação.
     */
    public static async initialize(): Promise<void> {
        if (!this.pool) {
            try {
                this.pool = mysql.createPool({
                    host: process.env.DB_HOST,
                    user: process.env.DB_USER,
                    password: String(process.env.DB_PASSWORD),
                    database: process.env.DB_DATABASE,
                    port: Number(process.env.DB_PORT),
                    waitForConnections: true, // Esperar por conexões se todas estiverem em uso
                    connectionLimit: 10,    // Limite máximo de conexões no pool (ajuste conforme necessário)
                    queueLimit: 0             // Fila ilimitada para solicitações de conexão
                });
                await this.pool.getConnection(); // Testa a conexão inicial
                console.log('Conexão com o banco de dados estabelecida.');
            } catch (error) {
                console.error('Erro ao inicializar o pool de conexões:', error);
                throw error; // Rejeita a promise para indicar falha na inicialização
            }
        }
    }

    // Garante que o pool esteja inicializado antes de executar uma query
    private static async ensurePoolInitialized(): Promise<void> {
        if (!this.pool) {
            await this.initialize();
        }
    }

    // Executa uma consulta SQL com parâmetros opcionais e tipagem genérica para o resultado
    public static async query<T extends RowDataPacket>(
        sql: string,
        params: any[] = []
    ): Promise<QueryResult<T>> {
        await this.ensurePoolInitialized();

        try {
            const [rows] = await this.pool!.execute<T[]>(sql, params);
            return rows;
        } catch (error) {
            console.error('Erro ao executar a query:', sql, params, error);
            throw error; // Rejeita a promise em caso de erro na query
        }
    }

    // Executa uma consulta SQL que retorna informações de "ResultSetHeader" (INSERT, UPDATE, DELETE)
    public static async execute(
        sql: string,
        params: any[] = []
    ): Promise<ResultSetHeader> {
        await this.ensurePoolInitialized();

        try {
            const [results] = await this.pool!.execute<ResultSetHeader>(sql, params);
            return results;
        } catch (error) {
            console.error('Erro ao executar a query:', sql, params, error);
            throw error; // Rejeita a promise em caso de erro na execução
        }
    }

    // Encerra todas as conexões no pool
    public static async closePool(): Promise<void> {
        if (this.pool) {
            try {
                await this.pool.end();
                this.pool = null;
                console.log('Conexões com o banco de dados encerradas.');
            } catch (error) {
                console.error('Erro ao encerrar o pool de conexões:', error);
                throw error; // Rejeita a promise em caso de erro ao encerrar
            }
        }
    }
}