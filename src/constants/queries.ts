const queries = {
    getAllTableNames: 'SELECT table_name FROM information_schema.tables WHERE table_schema=\'public\' AND table_type=\'BASE TABLE\';',
    getAllDatabaseNames: 'SELECT datname FROM pg_database WHERE datistemplate = false;',
    getTable: 'SELECT * from %s;'
};
export = queries;