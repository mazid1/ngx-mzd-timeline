import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
    MzdTimelineContentComponent
} from './components/timeline-content/timeline-content.component';
import { MzdTimelineComponent } from './components/timeline/timeline.component';

@NgModule({
  declarations: [MzdTimelineComponent, MzdTimelineContentComponent],
  imports: [
    BrowserModule
  ],
  exports: [MzdTimelineComponent, MzdTimelineContentComponent]
})
export class MzdTimelineModule { }
