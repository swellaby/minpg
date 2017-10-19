import * as pg from 'pg';

import * as queries from '../constants/queries';

export class PostgresClient {
    private pool: pg.Pool;

    constructor(config: pg.PoolConfig) {
        this.pool = new pg.Pool(config);
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
}