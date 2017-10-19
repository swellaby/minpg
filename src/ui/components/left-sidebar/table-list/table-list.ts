// tslint:disable:no-suspicious-comment
import { Component, OnInit } from '@angular/core';

import { PostgresClient } from '../../../../services/pg-client';

@Component({
  selector: 'pg-table-list',
  templateUrl: 'ui/components/left-sidebar/table-list/table-list.html'
})
export class TableList implements OnInit  {
    public pgUtils: PostgresClient; // TODO: INSTANTIATE THIS
    public tables: String[];

    public ngOnInit() {
        this.pgUtils.getAllTableNames().then((names) => {
            this.tables = names;
        });
    }
}
