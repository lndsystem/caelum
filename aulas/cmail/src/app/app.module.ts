import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModuloRoteamento } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { LeituraDeEmailComponent } from './modules/leitura-de-email/leitura-de-email.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModuloRoteamento,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }