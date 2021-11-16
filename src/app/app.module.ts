import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActionReducerMap, StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { ReadComponent } from './components/read/read.component';
import { CreateComponent } from './components/create/create.component';

import { reducers } from './reducers/tutorial.reducer'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BtnCellRenderer } from './components/btn-cell-renderer';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([BtnCellRenderer]),
    StoreModule.forRoot({ user: reducers } as ActionReducerMap<any, any>)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
