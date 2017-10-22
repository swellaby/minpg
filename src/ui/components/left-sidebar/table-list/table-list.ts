import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { PostgresClient } from '../../../../services/pg-client';
import { ServerConfig } from '../../../../models/server-config';
import { TableLink } from '../../../../models/table-link';
import { ServerSelectionService } from '../../../services/sever-selection';
import { DataProviderService } from '../../../services/data-provider';

const noTablesMessage = 'No tables to display';

@Component({
  selector: 'pg-table-list',
  templateUrl: 'ui/components/left-sidebar/table-list/table-list.html',
  styleUrls: ['ui/components/left-sidebar/table-list/table-list.css']
})
export class TableList implements OnInit {
  public tables: TableLink[] = [];
  public message: String = noTablesMessage;

  private serverConfig: ServerConfig;
  private pgClient: PostgresClient;

  constructor(private selectionService: ServerSelectionService, private dataService: DataProviderService, private ref: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.selectionService.currentServer.subscribe((val) => {
      this.updateServer(val);
    });
  }

  public setTable(table: TableLink) {
    this.tables.forEach((t) => {
      t.selected = false;
    });
    table.selected = true;
    this.pgClient.getTable(table.name).then((result) => {
      this.dataService.updateData(table.name, result);
      this.ref.detectChanges();
    });
  }

  private updateServer(server: ServerConfig) {
    this.serverConfig = server;
    this.pgClient = new PostgresClient(this.serverConfig);
    this.loadTables();
  }

  private loadTables() {
    this.pgClient.getAllTableNames().then((tables) => {
      this.tables = tables.map((table) => {
        return { name: table, selected: false };
      });
      this.message = noTablesMessage;
      this.ref.detectChanges();
    }).catch((err) => {
      this.message = err;
    });
  }
}
