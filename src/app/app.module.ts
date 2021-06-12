import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BbUIModule } from './bb-ui/bb-ui.module';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BbUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
