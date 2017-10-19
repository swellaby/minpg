import { NgModule } from '@angular/core';
// tslint:disable:no-stateless-class
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app';

import { LeftSidebar } from './components/left-sidebar/left-sidebar';
import { TableList } from './components/left-sidebar/table-list/table-list';

import { DataView } from './components/data-view/data-view';
import { TableView } from './components/data-view/table-view/table-view';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    LeftSidebar,
    TableList,
    DataView,
    TableView
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }