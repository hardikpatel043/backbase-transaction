import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BbUIModule } from './bb-ui/bb-ui.module';
import { TransactionsComponent } from './transactions/transactions.component';
import { MakeTransferComponent } from './transactions/make-transfer/make-transfer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TransactionsComponent, MakeTransferComponent],
  imports: [BrowserModule, AppRoutingModule, BbUIModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
