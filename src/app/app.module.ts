import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { Heroes2Module } from './heroes2/Heroes2.module';


import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    Heroes2Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
