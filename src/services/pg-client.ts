import * as pg from 'pg';

import * as queries from '../constants/queries';
import { ServerConfig } from '../models/server-config';

export class PostgresClient {
    private pool: pg.Pool;

    constructor(config: ServerConfig) {
        this.pool = new pg.Pool(this.transformConfig(config));
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