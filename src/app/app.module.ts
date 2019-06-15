import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { FormsModule } from '@angular/forms';
import { EmployeeDataService } from './employee-data/employee-data.service';   // our custom service, see below

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, EmployeeDataComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ EmployeeDataService ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
 