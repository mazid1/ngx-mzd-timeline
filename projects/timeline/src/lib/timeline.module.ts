import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TimelineContentComponent } from './timeline-content/timeline-content.component';
import { TimelineComponent } from './timeline.component';

@NgModule({
  declarations: [TimelineComponent, TimelineContentComponent],
  imports: [
    BrowserModule
  ],
  exports: [TimelineComponent, TimelineContentComponent]
})
export class TimelineModule { }
