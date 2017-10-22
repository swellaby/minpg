import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { PostgresClient } from '../../../../services/pg-client';
import { ServerConfig } from '../../../../models/server-config';
import { ServerSelectionService } from '../../../services/sever-selection';

const noTablesMessage = 'No tables to display';

@Component({
  selector: 'pg-table-list',
  templateUrl: 'ui/components/left-sidebar/table-list/table-list.html',
  styleUrls: ['ui/components/left-sidebar/table-list/table-list.css']
})
export class TableList implements OnInit {
  public tables: String[] = [];
  public message: String = noTablesMessage;

  private serverConfig: ServerConfig;
  private pgClient: PostgresClient;

  constructor(private selectionService: ServerSelectionService, private ref: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.selectionService.currentServer.subscribe((val) => {
      this.updateServer(val);
    });
  }

  private updateServer(server: ServerConfig) {
    this.serverConfig = server;
    this.pgClient = new PostgresClient(this.serverConfig);
    this.loadTables();
  }

  private loadTables() {
    this.pgClient.getAllTableNames().then((tables) => {
      this.tables = tables;
      this.message = noTablesMessage;
      this.ref.detectChanges();
    }).catch((err) => {
      this.message = err;
    });
  }
}
