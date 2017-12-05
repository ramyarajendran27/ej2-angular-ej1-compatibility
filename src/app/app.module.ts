import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DropDownListAllModule } from '@syncfusion/ej2-ng-dropdowns';
import { EJ_GRID_COMPONENTS } from 'ej-angular2/src/ej/grid.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, EJ_GRID_COMPONENTS
  ],
  imports: [
    BrowserModule, DropDownListAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
