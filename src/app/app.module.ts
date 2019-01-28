import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdatedcustomerComponent } from './customer/updated/updatedcustomer.component';
import { AddcustomerComponent } from './customer/add/addcustomer.component';
import { ListcustomerComponent } from './customer/list/listcustomer.component';
import { FormcustomerComponent } from './customer/formcustomer/formcustomer.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdatedcustomerComponent,
    AddcustomerComponent,
    ListcustomerComponent,
    FormcustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
