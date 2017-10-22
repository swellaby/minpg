import { QueryResult } from 'pg';

import { Component, ChangeDetectorRef, OnInit } from '@angular/core';

import { DataProviderService } from '../../../services/data-provider';

@Component({
  selector: 'table-view',
  templateUrl: 'ui/components/data-view/table-view/table-view.html'
})
export class TableView implements OnInit {
  public data: QueryResult;

  constructor(private dataService: DataProviderService, private ref: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.dataService.currentTableData.subscribe((val) => {
      this.data = val;
      console.log(this.data);
      this.ref.detectChanges();
    });
  }
}
