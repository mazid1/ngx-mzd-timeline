import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TimelineContentComponent } from './components/timeline-content/timeline-content.component';
import { TimelineComponent } from './components/timeline/timeline.component';

@NgModule({
  declarations: [TimelineComponent, TimelineContentComponent],
  imports: [
    BrowserModule
  ],
  exports: [TimelineComponent, TimelineContentComponent]
})
export class TimelineModule { }
