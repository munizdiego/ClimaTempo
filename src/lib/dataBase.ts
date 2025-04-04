/**
 * Esta é uma classe de conexão com o banco de dados no qual
 * utilizo a um bom tempo para as aplicações de API.
 * 
 * No arquivo de entrada principal API, deve ser chamado o método
 * Database.initialize() uma vez antes de qualquer outra parte.
 * Como é um método assíncrono, ela espera usar await ao chamá-la 
 * dentro de uma função async de nível superior.
 * 
 * Método initialize Inicializa o pool de conexões do MySQL se ele ainda 
 * não tiver sido criado. Este método deve ser chamado uma única 
 * vez no início da aplicação.
 * 
 * Método ensurePoolInitialized garante que o pool esteja 
 * inicializado antes de executar uma query
 * 
 * Método query executa uma consulta SQL com parâmetros opcionais 
 * e tipagem genérica para o resultado
 * 
 * Método execute executa uma consulta SQL que retorna informações 
 * de "ResultSetHeader" (INSERT, UPDATE, DELETE)
 * 
 * Método closePool encerra todas as conexões no pool
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

    public static async initialize(): Promise<void> {
        if (!this.pool) {
            try {
                this.pool = mysql.createPool({
                    host: process.env.DB_HOST,
                    user: process.env.DB_USER,
                    password: String(process.env.DB_PASSWORD),
                    database: process.env.DB_DATABASE,
                    port: Number(process.env.DB_PORT),
                    waitForConnections: true,
                    connectionLimit: 10,
                    queueLimit: 0 
                });
                await this.pool.getConnection(); // Testa a conexão inicial
                console.log('Conexão com o banco de dados estabelecida.');
            } catch (error) {
                console.error('Erro ao inicializar o pool de conexões:', error);
                throw error;
            }
        }
    }

    private static async ensurePoolInitialized(): Promise<void> {
        if (!this.pool) {
            await this.initialize();
        }
    }

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
            throw error;
        }
    }

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
            throw error;
        }
    }

    public static async closePool(): Promise<void> {
        if (this.pool) {
            try {
                await this.pool.end();
                this.pool = null;
                console.log('Conexões com o banco de dados encerradas.');
            } catch (error) {
                console.error('Erro ao encerrar o pool de conexões:', error);
                throw error; 
            }
        }
    }
}