import * as pg from 'pg';
import { format } from 'util';

import * as queries from '../constants/queries';
import { ServerConfig } from '../models/server-config';

export class PostgresClient {
    private pool: pg.Pool;
    private client: pg.Client;

    constructor(config: ServerConfig) {
        this.pool = new pg.Pool(this.transformConfig(config));
        config.database = 'postgres';
        this.client = new pg.Client(config);
    }

    public getAllTableNames(): Promise<String[]> {
        return new Promise<String[]>((resolve, reject) => {
            this.pool.query(queries.getAllTableNames).then((results) => {
                resolve(results.rows.map((row) => {
                    return row.table_name;
                }));
            }).catch((err) => {
                reject(err);
            });
        });
    }

    public getTable(table: String): Promise<pg.QueryResult> {
        return this.pool.query(format(queries.getTable, table));
    }

    public getAllDatabaseNames(): void {
        this.pool.query(queries.getAllDatabaseNames).then((results) => {
            console.log(results);
        });
    }

    private transformConfig(config: ServerConfig): pg.PoolConfig {
        return {
            host: config.host,
            port: config.port,
            user: config.user,
            password: config.password,
            database: config.database
        };
    }
}