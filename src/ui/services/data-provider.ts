import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { QueryResult } from 'pg';

@Injectable()
export class DataProviderService {
  private tableDataSource: BehaviorSubject<QueryResult>  = new BehaviorSubject<QueryResult>(undefined);
  private tableTitleSource: BehaviorSubject<String>  = new BehaviorSubject<String>('');

  public currentTableData: Observable<QueryResult> = this.tableDataSource.asObservable();
  public currentTableTitle: Observable<String> = this.tableTitleSource.asObservable();

  public updateData(title: String, data: QueryResult) {
    this.tableTitleSource.next(title);
    this.tableDataSource.next(data);
  }
}