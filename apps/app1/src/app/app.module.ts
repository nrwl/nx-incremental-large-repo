import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Lib0Module } from '@largerepo/app0/lib0/lib0';
import { Lib1Module } from '@largerepo/app0/lib1/lib1';
import { Lib2Module } from '@largerepo/app0/lib2/lib2';
import { Lib3Module } from '@largerepo/app0/lib3/lib3';
import { Lib4Module } from '@largerepo/app0/lib4/lib4';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    Lib0Module,
    Lib1Module,
    Lib2Module,
    Lib3Module,
    Lib4Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
