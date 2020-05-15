import { MzdTimelineModule } from 'projects/mzd-timeline/src/public-api';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MzdTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
