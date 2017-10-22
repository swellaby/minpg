import { NgModule } from '@angular/core';
// tslint:disable:no-stateless-class
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './components/app';

import { LeftSidebar } from './components/left-sidebar/left-sidebar';
import { TableList } from './components/left-sidebar/table-list/table-list';
import { ServerSelection } from './components/left-sidebar/server-selection/server-selection';

import { DataView } from './components/data-view/data-view';
import { TableView } from './components/data-view/table-view/table-view';

import { AddEditServer } from './components/modals/add-edit-server/add-edit-server';

import { ServerSelectionService } from './services/sever-selection';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule.forRoot() ],
  declarations: [
    AppComponent,
    AddEditServer,
    DataView,
    LeftSidebar,
    ServerSelection,
    TableList,
    TableView
  ],
  bootstrap:    [ AppComponent ],
  entryComponents: [ AddEditServer ],
  providers: [ ServerSelectionService ]
})
export class AppModule { }