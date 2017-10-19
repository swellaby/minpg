import { PoolConfig } from 'pg';
/**
 * Configuration for a postgres server
 * @export
 * @interface ServerConfig
 */
export interface ServerConfig extends PoolConfig {
    id?: String;
    name?: String;
}