import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bt1Component } from './bt1/bt1.component';
import { Bt2Component } from './bt2/bt2.component';
import { Bt3Component } from './bt3/bt3.component';
import { Bt4Component } from './bt4/bt4.component';
import { Bt5Component } from './bt5/bt5.component';
import { Bt6Component } from './bt6/bt6.component';
import { Bt7Component } from './bt7/bt7.component';

@NgModule({
  declarations: [
    AppComponent,
    Bt1Component,
    Bt2Component,
    Bt3Component,
    Bt4Component,
    Bt5Component,
    Bt6Component,
    Bt7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
