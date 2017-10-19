import { ServerConfig } from '../models/server-config';

import Store = require('electron-store');

export class ServerConfigService {
    private store: Store;

    constructor(store?: Store) {
        this.store = (store) ? store : new Store();
    }

    public addServer(server: ServerConfig): void {
        const servers = this.getServers();
        servers.push(server);
        this.store.set('servers', servers);
    }

    public removeServer(id: String): void {
        const servers = this.getServers().filter((server) => {
            return server.id !== id;
        });
        this.store.set('servers', servers);
    }

    public getServers(): ServerConfig[] {
        return this.store.get('servers');
    }
}