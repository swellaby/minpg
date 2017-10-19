import { Component } from '@angular/core';

import { PostgresClient } from '../../../../services/pg-client';

@Component({
  selector: 'pg-table-list',
  templateUrl: 'ui/components/left-sidebar/table-list/table-list.html'
})
export class TableList {
    public tables: String[];
}
