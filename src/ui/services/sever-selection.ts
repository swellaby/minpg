import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ServerConfig } from '../../models/server-config';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerSelectionService {
  private serverSource: BehaviorSubject<ServerConfig>  = new BehaviorSubject<ServerConfig>({});
  public currentServer: Observable<ServerConfig> = this.serverSource.asObservable();

  public changeServer(server: ServerConfig) {
    this.serverSource.next(server);
  }
}