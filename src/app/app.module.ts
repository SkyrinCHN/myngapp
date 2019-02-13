import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Demo01Component } from './demo01/demo01.component';
import { Demo02Component } from './demo02/demo02.component';
import { Demo03DirectivesComponent } from './demo03-directives/demo03-directives.component';
import { Demo04TestComponent } from './demo04-test/demo04-test.component';
import { Demo05Component } from './demo05/demo05.component';
import { Demo06Component } from './demo06/demo06.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo01Component,
    Demo02Component,
    Demo03DirectivesComponent,
    Demo04TestComponent,
    Demo05Component,
    Demo06Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
